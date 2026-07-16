import React from 'react'

const FollowBox = () => {
    return (
        <>
            <div className='w-full h-auto bg-black py-24 px-6 md:px:12 lg:px-20 md:py-32 '>
                <div className='flex flex-col gap-6 items-center'>

                    {/* Main heading reveal transition */}
                    <h2 className="text-3xl md:text-5xl mt-6 font-sans text-white lg:text-6xl font-bold tracking-tight transition-all text-center duration-1000 delay-200 transform">
                        Follow us on <span className='bg-gradient-to-r from-[#ee7448]  to-[#3ec6fc] text-transparent bg-clip-text'>Social Media</span>
                    </h2>

                    {/* Description reveal transition */}
                    <p className="text-base text-center md:text-lg font-sans lg:text-lg text-[#838488] max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400">
                        Connect with us across LinkedIn, Facebook, and Instagram to get the latest updates, insights, and news.
                    </p>
                    <div className='flex w-full flex-col items-center justify-center md:flex-row gap-6 mt-8'>
                        <div className='w-full max-w-xs py-8 flex flex-col gap-3 justify-center items-center  rounded-3xl border border-[#6F7074] bg-[#303439] bg-opacity opacity-70 hover:bg-[#564640] hover:shadow-lg hover:scale-105 transition-all duration-700 ease-out'>
                            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="26" height="26" fill="#1877F2">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            <p className='text-white text-lg font-bold'>Facebook</p>
                        </div>
                        <div className='w-full max-w-xs py-8 flex flex-col bg-[#303439] bg-opacity opacity-70 gap-3 justify-center items-center  rounded-3xl border border-[#6F7074] hover:bg-[#3B3E4E]  hover:shadow-lg hover:scale-105 transition-all duration-700 ease-out'>
                            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-gradient)" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#instagram-gradient)" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#instagram-gradient)" />
                                <defs>
                                    <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#fdf497" />
                                        <stop offset="5%" stop-color="#fdf497" />
                                        <stop offset="45%" stop-color="#fd5949" />
                                        <stop offset="60%" stop-color="#d6249f" />
                                        <stop offset="100%" stop-color="#285AEB" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className='text-white text-lg font-bold'>Instagram</p>
                        </div>
                        <div className='w-full max-w-xs py-8 flex bg-[#303439] bg-opacity opacity-70 flex-col gap-3 justify-center items-center rounded-3xl border border-[#6F7074] hover:bg-[#38454E]  hover:shadow-lg hover:scale-105 transition-all duration-700 ease-out'>
                            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="26" height="26" fill="#0A66C2">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <p className='text-white text-lg font-bold'>LinkedIn</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowBox
