// Declaring Client Component
"use client"

// Importing Packages
import Image from "next/image"
import Link from "next/link"
import TypewriterComponent from "typewriter-effect"

// Importing Github Icon
import { GitHubLogoIcon } from "@radix-ui/react-icons"

// Exporting the Client Component for HomePage
export default function HomePage() {
  // Returning JSX
  return (
    <main className="h-screen select-none text-white bg-gray-900 overflow-hidden flex flex-col justify-between ">
      {/* Navbar Starts Here */}
      <nav className="flex justify-between items-center py-2 px-2 sm:px-4 md:px-6">
        <div className="flex items-center gap-2"><Image src="/icon.png" alt="Insightify" width={35} height={35} /><strong className="text-base font-semibold sm:text-xl md:text-2xl">Insightify</strong></div>
        <a href="https://github.com/rudrakumarmishraa/insightify" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-gray-900 font-medium md:font-semibold py-1 px-2 md:px-4 md:px-3 rounded-full hover:bg-gray-300" style={{ transition: "0.5s ease" }}><GitHubLogoIcon width="20" height="20" />Github</a>
      </nav>
      {/* Navbar Ends Here */}
      {/* Hero Section Starts Here */}
      <section className="font-bold text-center" style={{ paddingTop: "6rem", height: "100%" }}>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">The Best AI Tool for</h1>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-600"><TypewriterComponent options={{ strings: ["Chatbot.", "Photo Generation.", "Code Generation."], autoStart: true, loop: true }} /></div>
        <h4 className="text-medium sm:text-lg md:text-xl lg:text-2xl text-zinc-400">Create content using AI 10x faster.</h4>
        <Link href="/signin" className="inline-block mt-2 px-4 md:px-6 lg:mx-8 py-1 rounded-full text-medium sm:text-medium md:text-lg lg:text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Start Generating for free</Link>
      </section>
      {/* Hero Section Ends Here */}
      {/* Footer Section Starts Here */}
      <footer className="flex justify-between items-center px-2 sm:px-4 md:px-6">
        <div className="font-bold">&copy; Rudra Kumar Mishra</div>
        <div className="hidden items-center gap-4 py-2 sm:flex">
          <p className="sm:font-medium md:text-lg lg:text-xl">Tech Stack Used</p>
          <div className="flex items-center gap-2">
            <svg width="30px" height="30px" viewBox="0 0 128 128" fill="#ffffff" role="img"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" /></svg>
            <svg width="30px" height="30px" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8" /></svg>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#ffffff" role="img"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><title>OpenAI icon</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></g></svg>
          </div>
        </div>
      </footer>
      {/* Footer Section Ends Here */}
    </main>
  )
}