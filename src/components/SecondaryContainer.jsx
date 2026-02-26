import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className="relative z-20 -mt-145 pt-96 bg-gradient-to-t from-black via-black to-transparent">
            <div className="space-y-8 pb-10">
                <MovieList
                    title={"New on Netflix"}
                    movies={movies.nowPlayingMovies}
                />
                <MovieList
                    title={"Continue Watching for Narendra"}
                    movies={movies.nowPlayingMovies}
                />
                <MovieList
                    title={"Kids Animation"}
                    movies={movies.nowPlayingMovies}
                />
                <MovieList
                    title={"Asian TV Shows"}
                    movies={movies.nowPlayingMovies}
                />
            </div>
        </div>
    );
};

export default SecondaryContainer;
