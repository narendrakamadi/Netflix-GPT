import React from "react";

const VideoModal = ({ isOpen, onClose, videoKey, movieTitle, loading, error }) => {
    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div className="bg-black rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden animate-fadeIn relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 transition p-2 rounded-full"
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Video Container */}
                    <div className="relative w-full bg-black">
                        {loading ? (
                            <div className="aspect-video flex items-center justify-center bg-gray-900">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                                    <p className="text-white text-sm">Loading video...</p>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                                <div className="flex flex-col items-center gap-4 text-center px-6">
                                    <svg
                                        className="w-16 h-16 text-yellow-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <div>
                                        <p className="text-white text-lg font-semibold mb-2">
                                            Video Not Available
                                        </p>
                                        <p className="text-gray-300 text-sm max-w-sm">
                                            Sorry, we couldn't find a video trailer for this {movieTitle?.includes('Season') ? 'season' : 'show'}. Videos may not be available in your region or the content might not have a trailer yet.
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="mt-4 bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition font-semibold text-sm"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        ) : videoKey ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&fs=1&rel=0`}
                                title={movieTitle}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="w-full aspect-video"
                            ></iframe>
                        ) : (
                            <div className="aspect-video flex items-center justify-center bg-gray-900">
                                <p className="text-white text-center">
                                    Video not available for this movie
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Movie Title */}
                    {movieTitle && (
                        <div className="px-6 py-4 border-t border-gray-700">
                            <h3 className="text-white text-xl font-semibold">{movieTitle}</h3>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default VideoModal;

