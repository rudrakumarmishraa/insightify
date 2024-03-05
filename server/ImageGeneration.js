// Declaring Server Component to write server action Conversation AI
"use server"

// Importing Packages
import { OpenAI } from "openai"

// OPENAI to fetch response
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Exporting Async Function for handling Image Generation AI
export const ImageGenerationAI = async ({ input, number, resolution }) => {
    try {
        // Getting Response by generating images from OpenAI Library
        const response = await openai.images.generate({ model: "dall-e-2", prompt: input, n: parseInt(number), size: resolution })
        // Returning Response Data
        return response.data
    } catch { return { error: "Something went wrong." } }
}