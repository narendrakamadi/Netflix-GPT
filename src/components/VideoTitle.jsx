import React from "react";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] md:pt-[15%] px-4 md:px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">{title}</h1>
            <p className="md:block text-xs md:text-base w-full md:w-1/3 mb-5 leading-normal">{overview}</p>
            <div className="flex gap-2 md:gap-3 mt-2 md:mt-4">
                <button className="flex items-center justify-center gap-1 md:gap-2 bg-white text-black py-1 px-3 md:py-2 md:px-8 text-sm md:text-lg font-semibold rounded hover:bg-opacity-80 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    Play
                </button>
                <button className="flex items-center justify-center gap-1 md:gap-2 bg-gray-600 bg-opacity-70 text-white py-1 px-3 md:py-2 md:px-8 text-sm md:text-lg font-semibold rounded hover:bg-opacity-50 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-6 md:h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
