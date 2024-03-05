// Declaring Client Component
"use client"

// Importing Neccessary Modules and Server Actions
import Link from "next/link"
import { useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { handleUserLogout } from "@/server/LogoutAction"

// Importing Icons
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

// Exporting Default function Topbar for Topbar Component
export default function Topbar({ changeSidebarStyles }) {
    // Getting current pathname and router object
    const pathName = usePathname().toString().slice(1).charAt(0).toUpperCase() + usePathname().toString().slice(2)
    const router = useRouter()

    // Creating Reference variable to Profile Dropdown
    const profileViewReference = useRef(null)

    // Function to change Styles for Profile Dropdown
    function changeDropDownMenuStyle() {
        if (profileViewReference.current.style.maxHeight === "0px" || profileViewReference.current.style.maxHeight === "") {
            profileViewReference.current.style.maxHeight = "300px"
        } else if (profileViewReference.current.style.maxHeight === "300px") {
            profileViewReference.current.style.maxHeight = "0px"
        }
    }

    // Function to logout user
    async function logOut() { if ((await handleUserLogout() === "success")) { router.push("/") } }

    // Returning JSX
    return (
        <header className="flex justify-between items-center py-2 px-3 bg-gray-100 shadow-lg">
            {/* Left Section Starts Here */}
            <div className="flex items-center gap-3">
                <HamburgerMenuIcon className="block md:hidden text-bold cursor-pointer" width="20" height="20" onClick={changeSidebarStyles} />
                <p className="text-transparent bg-clip-text text-lg font-medium md:font-semibold bg-gradient-to-r from-purple-700 via-pink-700 to-rose-700">{pathName}</p>
            </div>
            {/* Left Section Ends Here */}

            {/* Right Section Starts Here */}
            <div className="relative inline-block text-left">
                <div>
                    <img src="/profile.png" alt="Insightify" className="w-8 justify-center rounded-full text-sm shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer" onClick={changeDropDownMenuStyle} />
                </div>
                <div ref={profileViewReference} className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden" style={{ maxHeight: "0px", transition: "0.5s ease" }}>
                    <div className="py-1">
                        <Link href="/settings" className="text-gray-400 block px-4 py-2 m-1 text-sm rounded-lg hover:text-black" onClick={changeDropDownMenuStyle}>Settings</Link>
                        <button className="text-gray-400 block px-4 py-2 m-1 text-sm rounded-lg hover:text-black cursor-pointer" onClick={logOut}>Logout</button>
                    </div>
                </div>
            </div>
            {/* Right Section Ends Here */}
        </header>
    )
}