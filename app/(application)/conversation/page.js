// Declaring Client Component
"use client"

// Importing Neccessary Modules and Server Actions
import { useState } from "react"
import { ConversationAI } from "@/server/Conversation"

// Exporting Default function Conversation for Conversation Page
export default function Conversation() {
    // State variables to show loading screen and fetch data
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    // Function to Handle Form Submit Conversation
    async function handleFormSubmitConversation(formData) {
        // Setting Loading to true white fetching data
        setLoading(prev => true)

        // Getting input data
        const input = await formData.get("input")

        // Checking for empty field
        if (input !== "" && input !== undefined) {
            const response = await ConversationAI(input)
            if (response) { setData(prev => response) }
        } else { setData(prev => "please write something to get response") }
        // Setting Loading to false when data fetched
        setLoading(prev => false)
    }

    // Returning JSX
    return (
        <section className="flex w-full flex-col justify-center items-center gap-2 px-4 sm:px-8 md:px-12 pt-10">
            {/* Form Section Start Here */}
            <form action={handleFormSubmitConversation} className="flex w-full justify-between items-center gap-4 px-4 py-2 shadow-lg">
                <input type="text" name="input" placeholder="try a conversation with insightify" className="w-full outline-none" />
                {loading ? "" : <button className="text-white bg-[#644FF6] px-2 sm:px-4 md:px-6 py-1 rounded-md hover:bg-[#644FFF] transition">Generate</button>}
            </form>
            {/* Form Section Ends Here */}
            <div className="w-full rounded bg-gray-100 p-2">{data}</div>
        </section>
    )
}