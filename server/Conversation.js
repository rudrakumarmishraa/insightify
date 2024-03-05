// Declaring Server Component to write server action Conversation AI
"use server"

// Importing Packages
import { OpenAI } from "openai"

// OPENAI to fetch response
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Exporting Async Function for handling Conversation AI
export const ConversationAI = async (input) => {
    try {
        // Getting Response from OpenAI Library
        const response = await openai.chat.completions.create({ messages: [{ role: 'user', content: input }], model: 'gpt-3.5-turbo' })
        // Returning Response
        return response.choices[0].message.content
    } catch (error) { return "Something went wrong." }
}