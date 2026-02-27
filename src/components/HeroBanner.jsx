import React from "react";
import { useRef } from "react";

const HeroBanner = ({ show }) => {
    const videoRef = useRef(null);

    if (!show) return null;

    const trailerUrl =
        show.trailerUrl ||
        `https://www.youtube.com/embed/${show.videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${show.videoKey}`;

    return (
        <div className="relative w-full h-screen overflow-hidden group">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    ref={videoRef}
                    src={trailerUrl}
                    title={show.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full"
                />

                {/* Gradient Overlay - Fade to black at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>

            {/* Content - Bottom Left Corner */}
            <div className="absolute bottom-20 left-12 z-10 max-w-md">
                {/* Title - Small */}
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 tracking-wider">
                    {show.title}
                </h2>

                {/* Description - Small */}
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                    {show.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-semibold text-sm hover:bg-white/80 transition">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                    </button>
                    <button className="flex items-center gap-2 bg-gray-500/50 text-white px-5 py-2 rounded font-semibold text-sm hover:bg-gray-500/70 transition backdrop-blur-sm">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        More Info
                    </button>
                </div>

                {/* Age Rating Badge */}
                {show.ageRating && (
                    <div className="mt-6 flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-white/60 rounded text-white font-bold text-lg">
                            {show.ageRating}
                        </div>
                        <span className="text-white/70 text-xs uppercase tracking-wider">
                            {show.genre}
                        </span>
                    </div>
                )}
            </div>

            {/* Mute/Unmute Button */}
            <button className="absolute bottom-20 right-12 z-20 flex items-center justify-center w-10 h-10 bg-black/60 rounded-full hover:bg-black/80 transition">
                <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
            </button>
        </div>
    );
};

export default HeroBanner;