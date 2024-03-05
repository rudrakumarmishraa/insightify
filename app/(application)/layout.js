// Declaring Client Component
"use client"

// Importing Packages
import { useRef } from "react"

// Importing Components
import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

// Exporting ApplicationLayout
export default function ApplicationLayout({ children }) {
    // Reference for Sidebar change Styles on mobile screen
    const sidebarReference = useRef(null)

    // Function for chaning Sidebar Styles on Mobile Screen
    const changeSidebarStyles = () => {
        if (sidebarReference.current.style.transform === "") {
            sidebarReference.current.style.transform = "translateX(0%)"
        } else if (sidebarReference.current.style.transform === "translateX(0%)") {
            sidebarReference.current.style.transform = "translateX(-100%)"
        } else if (sidebarReference.current.style.transform === "translateX(-100%)") {
            sidebarReference.current.style.transform = "translateX(0%)"
        }
    }

    // Returning JSX
    return (
        <main className="flex realtive w-dvw h-screen text-white select-none overflow-hidden">
            <Sidebar sidebarReference={sidebarReference} changeSidebarStyles={changeSidebarStyles} />
            <section className="flex w-full h-screen flex-col text-black overflow-x-hidden overflow-y-auto"><Topbar changeSidebarStyles={changeSidebarStyles} />{children}</section>
        </main>
    )
}