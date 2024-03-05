// Declaring Server Component to write server action for Logging in User
"use server"

// Importing Packages
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

// Exporting Async Function for handling User login
export const handleUserLogin = async ({ username, password }) => {
    try {
        // If username and password provided correctly
        if (username === process.env.USER && password === process.env.PASSWORD) {
            // Creating JWT Token
            const token = await jwt.sign({ "loggedIn": true }, process.env.JWT_SECRET, { expiresIn: "14d" })
            // Setting JWT Token to cookies
            if (await cookies().set(process.env.JWT_TOKEN_NAME, token)) {
                return { success: "Welcome back" }
            } else { return { error: "Invalid username or password" } }
        } else { return { error: "Invalid username or password" } }
    } catch { return { error: "Something went wrong." } }
}