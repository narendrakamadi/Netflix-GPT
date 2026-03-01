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

                dispatch(addPopularTVShows(data.results));
            } catch (error) {
                console.error("Error fetching popular TV shows:", error);
            }
        };

        fetchPopularTVShows();
    }, [dispatch]);
};

export default usePopularTVShows;