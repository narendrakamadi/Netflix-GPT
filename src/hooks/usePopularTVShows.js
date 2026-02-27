import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTVShows } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularTVShows = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPopularTVShows = async () => {
            try {
                const response = await fetch(
                    "https://api.themoviedb.org/3/tv/popular?page=1",
                    API_OPTIONS
                );
                const data = await response.json();

                // Fetch video for first show
                if (data.results?.[0]) {
                    const videoResponse = await fetch(
                        `https://api.themoviedb.org/3/tv/${data.results[0].id}/videos`,
                        API_OPTIONS
                    );
                    const videoData = await videoResponse.json();
                    const trailer = videoData.results?.find(
                        (v) => v.type === "Trailer"
                    );
                    if (trailer) {
                        data.results[0].videoKey = trailer.key;
                    }
                }

                dispatch(addPopularTVShows(data.results));
            } catch (error) {
                console.error("Error fetching popular TV shows:", error);
            }
        };

        fetchPopularTVShows();
    }, [dispatch]);
};

export default usePopularTVShows;