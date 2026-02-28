import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import useMovieVideo from "../hooks/useMovieVideo";
import useShowVideo from "../hooks/useShowVideo";
import VideoModal from "./VideoModal";

const MovieCart = ({ posterPath, title, movieId, showId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Use appropriate hook based on whether it's a movie or show
    const { videoKey: movieVideoKey, loading: movieLoading, error: movieError } = useMovieVideo(
        isModalOpen && movieId ? movieId : null
    );
    const { videoKey: showVideoKey, loading: showLoading, error: showError } = useShowVideo(
        isModalOpen && showId ? showId : null
    );

    const videoKey = movieVideoKey || showVideoKey;
    const loading = movieLoading || showLoading;
    const error = movieError || showError;

    const handleOpenModal = () => {
        console.log("Opening modal for:", movieId ? `movie ${movieId}` : `show ${showId}`);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        console.log("Closing modal");
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                onClick={handleOpenModal}
                className="w-28 min-w-28 sm:w-36 sm:min-w-36 md:w-44 md:min-w-44 flex flex-col items-center bg-black/60 rounded-lg shadow-md overflow-hidden group cursor-pointer transition-transform duration-300 sm:hover:scale-105 sm:hover:z-10"
            >
                <div className="relative w-full h-40 sm:h-52 md:h-60 overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={IMG_CDN_URL + posterPath}
                        alt={title}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h3 className="text-white text-sm font-semibold line-clamp-2">
                                {title}
                            </h3>
                        </div>
                    </div>
                    {/* Play button on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleOpenModal();
                            }}
                            className="bg-white/90 rounded-full p-3 hover:bg-white transition"
                        >
                            <svg
                                className="w-6 h-6 text-black"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <VideoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                videoKey={videoKey}
                movieTitle={title}
                loading={loading}
                error={error}
            />
        </>
    );
};

export default MovieCart;
