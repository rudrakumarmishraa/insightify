// Declaring Client Component
"use client"

// Importing Neccessary Modules and Server Actions
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { handleUserLogout } from "@/server/LogoutAction"

// Importing Icons
import { DashboardIcon, EnvelopeClosedIcon, ImageIcon, VideoIcon, MixerHorizontalIcon, CodeIcon, GearIcon, ExitFullScreenIcon } from "@radix-ui/react-icons"

// Exporting Default function Sidebar for Sidebar Component
export default function Sidebar({ sidebarReference, changeSidebarStyles }) {
    // Getting current pathname and router object
    const pathName = usePathname()
    const router = useRouter()

    // Function to logout user
    async function logOut() { if ((await handleUserLogout() === "success")) { router.push("/") } }

    // Returning JSX
    return (
        <aside ref={sidebarReference} className="flex h-screen absolute md:relative min-w-52 max-w-52 flex-col justify-between text-white bg-gray-900 top-0 left-0 translate-x-[-100%] md:static md:translate-x-[0%]" style={{ transition: "0.5s ease" }}>
            <button className="block md:hidden absolute top-2 right-2 bg-[#ffffff1a] p-1 rounded" onClick={changeSidebarStyles}><ExitFullScreenIcon width="25" height="25" /></button>
            {/* Navigation Section Starts Here */}
            <div className="w-full">
                <div className="flex gap-2 py-3 px-2"><Image src="/icon.png" alt="Insightify" width={30} height={30} /><strong className="text-2xl font-medium">Insightify</strong></div>
                <div className="flex flex-col gap-1 px-2 mt-10">
                    <Link className="flex items-center gap-2 text-md hover:bg-[#ffffff1a] py-1 px-2 rounded-lg" href="/dashboard" style={pathName === "/dashboard" ? { background: "#ffffff1a", transition: "0.5s ease" } : { transition: "0.5s ease" }}><DashboardIcon color="#2563eb" width="20" height="20" />Dashboard</Link>
                    <Link className="flex items-center gap-2 text-md hover:bg-[#ffffff1a] py-1 px-2 rounded-lg" href="/conversation" style={pathName === "/conversation" ? { background: "#ffffff1a", transition: "0.5s ease" } : { transition: "0.5s ease" }}><EnvelopeClosedIcon color="#4f46e5" width="20" height="20" /> Conversation</Link>
                    <Link className="flex items-center gap-2 text-md hover:bg-[#ffffff1a] py-1 px-2 rounded-lg" href="/image" style={pathName === "/image" ? { background: "#ffffff1a", transition: "0.5s ease" } : { transition: "0.5s ease" }}><ImageIcon color="#e11d48" width="20" height="20" />Image Generation</Link>
                    <Link className="flex items-center gap-2 text-md hover:bg-[#ffffff1a] py-1 px-2 rounded-lg" href="/code" style={pathName === "/code" ? { background: "#ffffff1a", transition: "0.5s ease" } : { transition: "0.5s ease" }}><CodeIcon color="#059669" width="20" height="20" />Code Generation</Link>
                    <Link className="flex items-center gap-2 text-md hover:bg-[#ffffff1a] py-1 px-2 rounded-lg" href="/settings" style={pathName === "/settings" ? { background: "#ffffff1a", transition: "0.5s ease" } : { transition: "0.5s ease" }}><GearIcon color="#ca8a04" width="20" height="20" />Settings</Link>
                </div>
            </div>
            {/* Navigation Section Ends Here */}

            {/* Bottom Section Starts Here */}
            <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-purple-700 via-pink-700 to-rose-700 m-3 py-1 font-medium rounded hover:from-rose-700 hover:via-purple-700 hover:to-pink-700" onClick={logOut}>Logout</button>
            {/* Bottom Section Ends Here */}
        </aside>
    )
}