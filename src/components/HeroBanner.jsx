import React, { useRef, useState } from "react";

const HeroBanner = ({ show }) => {
    const videoRef = useRef(null);
    const [playWithSound, setPlayWithSound] = useState(false);

    if (!show) return null;

    const trailerUrl =
        show.trailerUrl ||
        `https://www.youtube.com/embed/${show.videoKey}?autoplay=1&mute=${playWithSound ? 0 : 1}&controls=${playWithSound ? 1 : 0}&loop=1&playlist=${show.videoKey}&playsinline=1&rel=0`;

    return (
        <div className="relative w-full h-[70vh] md:h-screen overflow-hidden group">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    key={`${show.videoKey}-${playWithSound ? "sound" : "mute"}`}
                    ref={videoRef}
                    src={trailerUrl}
                    title={show.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[112.5vw] min-w-full min-h-full md:w-[177.77vh] md:h-[56.25vw]"
                />

                {/* Gradient Overlay - Fade to black at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>

            {/* Content - Bottom Left Corner */}
            <div className="absolute bottom-35 left-4 z-10 max-w-xs sm:max-w-sm md:bottom-45 md:left-12 md:max-w-md">
                {/* Title - Small */}
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-wider">
                    {show.title}
                </h2>

                {/* Description - Small */}
                <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-3">
                    {show.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        onClick={() => setPlayWithSound(true)}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 sm:px-6 sm:py-2 rounded font-semibold text-xs sm:text-sm hover:bg-white/80 transition"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                    </button>
                    <button className="flex items-center gap-2 bg-gray-500/50 text-white px-4 py-2 sm:px-5 sm:py-2 rounded font-semibold text-xs sm:text-sm hover:bg-gray-500/70 transition backdrop-blur-sm">
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
                        <span className="text-white/70 text-xs uppercase tracking-wider">
                            {show.genre}
                        </span>
                    </div>
                )}
            </div>

            {/* Mute/Unmute Button */}
            <button className="absolute bottom-6 right-4 z-20 flex items-center justify-center w-9 h-9 bg-black/60 rounded-full hover:bg-black/80 transition md:bottom-20 md:right-12 md:w-10 md:h-10">
                <svg
                    className="w-5 h-5 text-white md:w-6 md:h-6"
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
