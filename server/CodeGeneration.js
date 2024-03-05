// Declaring Server Component to write server action Conversation AI
"use server"

// Importing Packages
import { OpenAI } from "openai"

// OPENAI to fetch response
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Exporting Async Function for handling Code Generation AI
export const CodeGenerationAI = async (input) => {
    try {
        // Getting Response from OpenAI Library
        const response = await openai.chat.completions.create({ messages: [{ role: 'system',  content: "You are a code generator. You must answer only in markdown code snippets. Must use comments for explanations. Generate" + input}], model: 'gpt-3.5-turbo' })
        // Returning Response
        return response.choices[0].message.content
    } catch { return "Something went wrong." }
}