import React from "react";

const GptSearchBar = () => {
    return (
        <div className="w-full space-y-8">
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                {/* Sexy Search Container */}
                <div className="relative group">
                    {/* Subtle Glow Background */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-red-500/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10 rounded-3xl" />

                    {/* Main Search Box */}
                    <div className="relative flex items-center bg-white/95 backdrop-blur-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-300 overflow-hidden border border-white/50 group-focus-within:border-red-400/50">
                        {/* Search Icon */}
                        <div className="pl-6 md:pl-8 flex-shrink-0">
                            <svg
                                className="w-5 h-5 md:w-6 md:h-6 text-red-600 group-focus-within:text-red-700 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Input Field */}
                        <input
                            className="flex-1 px-4 md:px-6 py-4 md:py-5 text-base md:text-lg bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none font-light tracking-wide"
                            type="text"
                            placeholder="Search movies, shows, genres..."
                        />

                        {/* Search Button - Integrated */}
                        <button
                            type="submit"
                            className="mr-1.5 md:mr-2 px-7 md:px-10 py-3 md:py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold text-sm md:text-base rounded-full shadow-lg hover:shadow-red-500/50 transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
                        >
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12.17 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Elegant Divider */}
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                    <span className="text-xs md:text-sm text-gray-400 font-light tracking-widest uppercase">Or try</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </div>

                {/* Sexy Suggestions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
                    {[
                        { icon: "🔥", text: "Trending Now" },
                        { icon: "🎬", text: "Action Packed" },
                        { icon: "💕", text: "Romantic" },
                        { icon: "🌙", text: "Feel Good" }
                    ].map((item, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className="group relative px-1.5 md:px-2 py-1 md:py-1.5 bg-white/80 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 text-gray-800 hover:text-red-700 shadow-sm hover:shadow-red-200/50 border border-white/60 hover:border-red-300/50 transition-all duration-300 font-semibold text-xs md:text-xs tracking-wide overflow-hidden"
                        >
                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />

                            <div className="relative flex items-center justify-center gap-1">
                                <span className="text-sm md:text-base">{item.icon}</span>
                                <span className="hidden md:inline text-xs">{item.text}</span>
                                <span className="md:hidden text-xs">{item.text.split(" ")[0]}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default GptSearchBar;


