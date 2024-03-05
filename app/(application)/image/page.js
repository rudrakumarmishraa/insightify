// Declaring Client Component
"use client"

// Importing Neccessary Modules and Server Actions
import { useState } from "react"
import { ImageGenerationAI } from "@/server/ImageGeneration"
import Image from "next/image"

// CardView for Images
const ImagesCard = ({ url }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image width={300} height={300} src={url} alt="ImageGeneratedByInsightify" />
            <a target="_blank" rel="noreferrer" href={url} className="w-full flex justify-center items-center text-black font-medium border-2 border-black px-2 sm:px-4 md:px-6 py-1 transition hover:text-white hover:bg-black" download="ImageGeneratedByInsightify">Download</a>
        </div>
    )
}

// Exporting Default function ImageGeneration for Image Generation Page
export default function ImageGeneration() {
    // State variables to show loading screen and fetch data
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    // Function to Handle Form Submit Image Generation
    async function handleFormSubmitImageGeneration(formData) {
        // Setting Loading to true white fetching data
        setLoading(prev => true)

        // Getting input data
        const input = await formData.get("input")
        const number = await formData.get("number")
        const resolution = await formData.get("resolution")

        // Checking for empty field
        if (input !== "" && input !== undefined) {
            const response = await ImageGenerationAI({ input, number, resolution })
            setData(prev => response)
        }
        // Setting Loading to false when data fetched
        setLoading(prev => false)
    }

    // Returning JSX
    return (
        <section className="flex w-full flex-col justify-center items-center gap-2 px-4 sm:px-8 md:px-12 pt-10">
            {/* Form Section Start Here */}
            <form action={handleFormSubmitImageGeneration} className="flex w-full justify-between items-center gap-4 px-4 py-2 shadow-lg">
                <input type="text" name="input" placeholder="try generating images with insightify" className="w-full outline-none" />
                <div className="flex gap-2">
                    <select name="number" className="min-w-28 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="1">1 Photo</option>
                        <option value="2">2 Photo</option>
                        <option value="3">3 Photo</option>
                        <option value="4">4 Photo</option>
                    </select>
                    <select name="resolution" className="min-w-28 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="256x256">256x256</option>
                        <option value="512x512">512x512</option>
                        <option value="1024x1024">1024x1024</option>
                    </select>
                    {loading ? "" : <button className="text-white bg-[#644FF6] px-2 sm:px-4 md:px-6 py-1 rounded-md hover:bg-[#644FFF] transition">Generate</button>}
                </div>
            </form>
            {/* Form Section Ends Here */}
            <div className="flex w-full flex-wrap rounded bg-gray-100 gap-2 p-2">
                {data ? data.map((element) => <ImagesCard url={element.url} />) : ""}
            </div>
        </section>
    )
}