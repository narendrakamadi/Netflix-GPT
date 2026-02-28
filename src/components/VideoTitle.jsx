import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-10 left-4 z-10 max-w-xs sm:bottom-14 sm:max-w-md md:bottom-20 md:left-12 md:max-w-lg lg:bottom-24 lg:max-w-xl text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
                    {title}
                </h1>
                <p className="text-xs sm:text-sm md:text-base w-full mb-4 leading-relaxed text-white/80">
                    {overview}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <button className="flex items-center justify-center cursor-pointer gap-2 bg-white text-black px-4 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-semibold rounded hover:bg-opacity-80 transition-all">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Play
                    </button>
                    <button className="flex items-center justify-center cursor-pointer gap-2 bg-gray-600 bg-opacity-70 text-white px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold rounded hover:bg-opacity-50 transition-all">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;
