import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieVideo = (movieId) => {
    const [videoKey, setVideoKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset states when movieId changes
        setVideoKey(null);
        setError(null);

        if (!movieId) {
            setLoading(false);
            return;
        }

        const fetchMovieVideo = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                    API_OPTIONS
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data.results && data.results.length > 0) {
                    // Try to find a trailer first
                    const trailer = data.results.find(
                        (video) => video.type === "Trailer" && video.site === "YouTube"
                    );
                    // If no trailer, find any YouTube video
                    const video = trailer || data.results.find((v) => v.site === "YouTube") || data.results[0];

                    if (video?.key) {
                        setVideoKey(video.key);
                    } else {
                        // Don't set error - videoKey will be null which is handled gracefully
                    }
                } else {
                    // Don't set error for empty results - show graceful message instead
                }
                console.error("Error fetching movie video:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieVideo();
    }, [movieId]);

    return { videoKey, loading, error };
};

export default useMovieVideo;

