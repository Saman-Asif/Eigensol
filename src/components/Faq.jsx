import React, {useState} from 'react'

const Faq = () => {
    const faqs = [
        {
            question: "What is the Model Context Protocol (MCP)?",
            answer: "MCP is an open standard that enables developers to build secure, two-way connections between their AI-powered tools and data sources."
        },
        {
            question: "How does MCP work?",
            answer: "It consists of a client (like an AI assistant) and a server (the data source). They communicate over standardized JSON-RPC protocols, allowing the AI to query, read, or write to the server."
        },
        {
            question: "Is MCP open source?",
            answer: "Yes, MCP is an open standard. The specifications, client implementations, and server libraries are freely available for developers to build upon."
        },
        {
            question: "How do I stay in control?",
            answer: "You choose which skills are active, you watch every command as it runs (open any one for its details), and you can stop the session at any time."
        },
        {
            question: "Do you store my code?",
            answer: "No. Your codebase is read, edited, and run entirely on your machine. EigenMCP bridges the actions; it does not upload or store your files."
        },
        {
            question: "How do I connect?",
            answer: "Install the CLI or the VS Code extension, sign in, copy your single Client token, authorize your provider, open a folder, and start. The same token works for both clients."
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-18'>
                <div className='flex flex-col items-center'>
                    {/* Subtitle */}
                    <span className="inline-block text-sm py-2 px-4 rounded-full bg-[#F3F4F6] font-medium tracking-tight text-[#5D6775] uppercase transition-all duration-1000 transform">
                        FAQ
                    </span>

                    {/* Main heading reveal transition */}
                    <h2 className="text-3xl md:text-5xl mt-6 font-sans text-[#101828] lg:text-6xl font-bold tracking-tight transition-all text-center duration-1000 delay-200 transform">
                        Common Questions
                    </h2>
                </div>
                <div className='flex gap-6'>
                    <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-2xl bg-white backdrop-blur-sm overflow-hidden duration-300 bg-opacity-100 max-w-2xl transition-all"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                                    >
                                        <span className="font-medium text-base sm:text-lg text-[#121212]">
                                            {faq.question}
                                        </span>
                                        <span className={`text-white bg-gradient-to-br from-[#F4835B]  to-[#43a5cc] shrink-0 p-3 rounded-full transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="p-6 text-sm pt-0 text-black/70 leading-relaxed bg-white">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex flex-col lg:w-1/2 w-full'>
                       <img className='h-1/2 object-cover w-full rounded-xl' src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
