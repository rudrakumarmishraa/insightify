// Declaring Server Component to write server action for Logging in User
"use server"

// Importing Packages
import { cookies } from "next/headers"

// Exporting Async Function for handling User Logout
export const handleUserLogout = async () => {
    // Deleting Cookies
    try {
        await cookies().delete(process.env.JWT_TOKEN_NAME)
        return "success"
    } catch { return "error" }
}