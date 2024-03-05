// Importing NextResponse and JsonWebToken....
import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken"


// Exporting Middleware Function
export async function middleware(request) {
    // Getting pathname from request....
    const path = await request.nextUrl.pathname

    // Declaring public and protected paths....
    const isPublicPath = (path === "/") || (path === "/signin")
    const isProtectedPath = (path === "/code") || (path === "/conversation") || (path === "/dashboard") || (path === "/image") || (path === "/music") || (path === "/settings") || (path === "/videos")

    // Getting token from request cookies....
    const token = await request.cookies.get(process.env.JWT_TOKEN_NAME)

    // If public path and token is defined check if user loggedin or not or check if path is protected....
    if (isPublicPath && token) {
        const tokenValue = await jwt.decode(token.value)
        // If token decoded successfully.
        if (tokenValue) {
            if (tokenValue.loggedIn) {
                // Redirecting user to dashboard....
                return NextResponse.redirect(new URL('/dashboard', request.url))
            }
        }
    } else if (isProtectedPath) {
        // If we have token then user might be loggedIn otherwise redirect to loginpage....
        if (token) {
            const tokenValue = await jwt.decode(token.value)
            // If token decoded successfully
            if (tokenValue) {
                // If token loggedIn then do nothing else redirect to loginpage
                if (tokenValue.loggedIn) { } else {
                    // Redirecting user to loginPage....
                    return NextResponse.redirect(new URL('/signin', request.url))
                }
            } else { return NextResponse.redirect(new URL('/signin', request.url)) }
        } else {
            // Redirecting user to loginpage....
            return NextResponse.redirect(new URL('/signin', request.url))
        }
    }
}

// Exporting config for mathing urls to run middleware
export const config = { matcher: ["/", "/signin", "/code", "/conversation", "/dashboard", "/image", "/music", "/settings", "/videos"] }