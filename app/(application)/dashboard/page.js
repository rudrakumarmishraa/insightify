// Declaring Client Component
"use client"

// Importing Neccessary Modules
import Link from "next/link"

// Importing Icons
import { EnvelopeClosedIcon, ImageIcon, CodeIcon, ArrowRightIcon } from "@radix-ui/react-icons"

// Exporting Default function Dashboard for Dashboard Page
export default function Dashboard() {
    // Returning JSX
    return (
        <div className="flex w-full flex-col justify-center items-center px-2 pt-10">
            {/* Heading Section Starts Here */}
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold">Explore the power of AI</h1>
            <h3 className="text-xs sm:text-base md:text-lg text-gray-500 mt-1">Chat with smartest AI - Experience the power of AI</h3>
            {/* Heading Section Ends Here */}
            
            {/* Navigation Section Starts Here */}
            <div className="flex w-full flex-col gap-6 items-start px-4 sm:px-8 md:px-24 lg:px-44 mt-10">
                <Link className="flex w-full justify-between items-center px-1 py-2 shadow" href="/conversation"><div className="flex items-center gap-2 text-lg font-medium"><EnvelopeClosedIcon color="#4f46e5" width="30" height="30" style={{ background: "#0000001a", padding: "5px", borderRadius: "10px" }} />Conversation</div><ArrowRightIcon width="20" height="20" /></Link>
                <Link className="flex w-full justify-between items-center px-1 py-2 shadow" href="/image"><div className="flex items-center gap-2 text-lg font-medium"><ImageIcon color="#e11d48" width="30" height="30" style={{ background: "#0000001a", padding: "5px", borderRadius: "10px" }} />Image Generation</div><ArrowRightIcon width="20" height="20" /></Link>
                <Link className="flex w-full justify-between items-center px-1 py-2 shadow" href="/code"><div className="flex items-center gap-2 text-lg font-medium"><CodeIcon color="#059669" width="30" height="30" style={{ background: "#0000001a", padding: "5px", borderRadius: "10px" }} />Code Generation</div><ArrowRightIcon width="20" height="20" /></Link>
            </div>
            {/* Navigation Section Ends Here */}
        </div>
    )
}