// Exporting Default function Settings for Settings Page
export default function Settings() {
    // Returning JSX
    return (
        <section className="flex w-full flex-col gap-2 px-4 sm:px-8 md:px-12 pt-10">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <div className="w-full shadow text-gray-500 text-lg mt-2 py-1 px-2 rounded-md">Name: <span className="text-black font-medium text-base">Rudra Kumar Mishra</span></div>
            <div className="w-full shadow text-gray-500 text-lg mt-2 py-1 px-2 rounded-md">Username: <span className="text-black font-medium text-base">rudrakumarmishra</span></div>
            <div className="w-full shadow text-gray-500 text-lg mt-2 py-1 px-2 rounded-md">Email: <span className="text-black font-medium text-base">dev@rudrakumarmishra.com</span></div>
            <div className="w-full shadow text-gray-500 text-lg mt-2 py-1 px-2 rounded-md">Gender: <span className="text-black font-medium text-base">Male</span></div>
        </section>
    )
}