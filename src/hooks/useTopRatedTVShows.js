import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTVShows } from "../utils/moviesSlice";

const useTopRatedTVShows = () => {
    const dispatch = useDispatch();

    const getTopRatedTVShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedTVShows(json.results));
    };

    useEffect(() => {
        getTopRatedTVShows();
    }, []);
};

export default useTopRatedTVShows;

