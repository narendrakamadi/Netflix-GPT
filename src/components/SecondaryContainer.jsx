import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    // Example: You can add more categories as you fetch more movie lists
    return (
        <div className="bg-black/90 py-8 space-y-10 absolute mt-[560px]">
            <MovieList
                title={"New on Netflix"}
                movies={movies.nowPlayingMovies}
            />
            <MovieList
                title={"Netflix Series"}
                movies={movies.nowPlayingMovies}
            />
        </div>
    );
};

export default SecondaryContainer;
