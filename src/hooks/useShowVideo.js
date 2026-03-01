import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useShowVideo = (showId) => {
    const [videoKey, setVideoKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset states when showId changes
        setVideoKey(null);
        setError(null);

        if (!showId) {
            setLoading(false);
            return;
        }

        const fetchShowVideo = async () => {
            try {
                setLoading(true);
                // TV Shows use /tv/ endpoint instead of /movie/
                const response = await fetch(
                    `https://api.themoviedb.org/3/tv/${showId}/videos`,
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
                    console.log('No videos found in API response');
                    // Don't set error for empty results - show graceful message instead
                }
            } catch (err) {
                console.error("Error fetching show video:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchShowVideo();
    }, [showId]);

    return { videoKey, loading, error };
};

export default useShowVideo;

