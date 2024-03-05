// Declaring client component
"use client"

// Importing Packages and Server Action for Login
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useRef } from "react"
import { handleUserLogin } from "@/server/LoginAction"

// Exporting default function LoginPage
export default function LoginPage() {
    // Mounting router for changing route when loggedIn
    const router = useRouter()

    // Reference variable for handling errors
    const errorRef = useRef(null)

    // Function to handle login form submit
    async function handleLoginFormSubmit(formData) {
        // Getting credentials for formData
        const credentials = { username: formData.get("username"), password: formData.get("password") }
        // If any of the fields are empty, display an error message and return false
        if (credentials.username !== "" && credentials.username !== undefined && credentials.password !== "" && credentials.password !== undefined) {
            // Sending Credentials to server action
            const response = await handleUserLogin(credentials)
            // If errors encountered
            if (response.error) {
                errorRef.current.innerHTML = await response.error
            } else {
                // If user loggedin send user to dashboard....
                router.push("/dashboard")
            }
        } else { errorRef.current.innerHTML = "Please fill username and password." }
    }

    // Returning JSX
    return (
        <main className="grid md:grid-cols-2 h-screen text-white bg-gray-900">
            {/* Left Section Starts Here */}
            <section className="hidden md:flex flex-col gap-16 pb-2 md:pt-10 lg:pt-16 md:pl-10 lg:pl-16">
                <h1 className="flex items-center gap-2"><Image src="/icon.png" alt="Insightify" width={40} height={40} /><strong className="text-base font-semibold sm:text-xl md:text-2xl">Insightify</strong></h1>
                <ul>
                    <li before="✔" className="flex items-center gap-2 before:content-[attr(before)] before:flex before:items-center before:justify-center before:text-sm before:font-bold before:bg-emerald-500 before:p-1 before:rounded-full before:w-5 before:h-5"><strong className="text-2xl md:text-lg font-bold">Advanced AI Conversation</strong></li>
                    <p className="pb-5 ml-8 text-gray-400 lg:text-lg md:text-small">Used <b>gpt-3.5-turbo</b> model for converstion with users with fast response, leveraging OpenAI node js packages to write backend code.</p>
                    <li before="✔" className="flex items-center gap-2 before:content-[attr(before)] before:flex before:items-center before:justify-center before:text-sm before:font-bold before:bg-emerald-500 before:p-1 before:rounded-full before:w-5 before:h-5"><strong className="text-2xl md:text-lg font-bold">Intuitive Code Genration</strong></li>
                    <p className="pb-5 ml-8 text-gray-400 lg:text-lg md:text-small">Used <b>gpt-3.5-turbo</b> model with <b>ReactMarkDown</b> to provide code generated with proper markdown and comments to make code understandable.</p>
                    <li before="✔" className="flex items-center gap-2 before:content-[attr(before)] before:flex before:items-center before:justify-center before:text-sm before:font-bold before:bg-emerald-500 before:p-1 before:rounded-full before:w-5 before:h-5"><strong className="text-2xl md:text-lg font-bold">High Resolution Image Generation</strong></li>
                    <p className="pb-5 ml-8 text-gray-400 lg:text-lg md:text-small">Used <b>dall-e-2</b> model to generate high resolution images ranging from <b>(256x256)-(1024x1024)</b> and providing links to download generated images by AI Model.</p>
                </ul>
            </section>
            {/* Left Section Ends Here */}
            {/* Right Section Starts Here */}
            <div className="flex justify-center items-center p-4 sm:p-6 md:p-10 lg:p-16 select-none">
                <form action={handleLoginFormSubmit} autoComplete="off" className="flex flex-col gap-2 p-4 sm:p-6 md:p-8 lg:p-10" style={{ background: "#1F2937", maxWidth: "500px", width: "100%", borderRadius: "5px" }}>
                    <h1 className="flex items-center gap-2 mb-8 md:hidden"><Image src="/icon.png" alt="Insightify" width={40} height={40} /><strong className="text-base font-semibold sm:text-xl md:text-2xl">Insightify</strong></h1>
                    <h1 className="flex justify-center items-center gap-1 w-full text-lg md:text-xl lg:text-2xl font-bold before:content-[''] before:inline-block before:h-0 before:border before:border-gray-400 after:content-[''] after:inline-block after:h-0 after:border after:border-gray-400 after:w-14 before:w-14 sm:after:w-28 sm:before:w-28 md:after:w-10 md:before:w-10 xl:after:w-24 xl:before:w-24">Welcome Back</h1>
                    <div className="flex flex-col my-4 gap-1">
                        <label className="text-base font-medium" htmlFor="username">Username</label>
                        <input className="text-white bg-[#374151] outline-none p-2 border border-white rounded-md focus:border-emerald-500 focus:border-2" type="text" name="username" id="username" placeholder="username" onChange={() => { errorRef.current.innerHTML = "" }} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base font-medium" htmlFor="password">Password</label>
                        <input className="text-white bg-[#374151] outline-none p-2 border border-white rounded-md focus:border-emerald-500 focus:border-2" type="text" name="password" id="password" placeholder="password" onChange={() => { errorRef.current.innerHTML = "" }} />
                    </div>
                    <p ref={errorRef} className="text-[#ff0000] text-sm font-semibold mb-3"></p>
                    <button className="mt-1 mb-16 p-2 bg-emerald-500 rounded-full hover:bg-emerald-600 outline-none focus:border focus:border-white" style={{ transition: "0.3s ease" }}>Sign in to your account</button>
                </form>
            </div>
            {/* Right Section Ends Here */}
        </main>
    )
}