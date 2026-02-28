import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className="relative z-10 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24 pb-10">
            <div className="bg-black bg-gradient-to-t from-black via-black/80 to-transparent pt-8 sm:pt-12 md:pt-16 lg:pt-20">
                <div className="space-y-12">
                    <MovieList
                        title={"Now Playing Movies"}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={"Popular Movies"}
                        movies={movies.popularMovies}
                    />
                    <MovieList
                        title={"Upcoming Movies"}
                        movies={movies.upcomingMovies}
                    />
                    <MovieList
                        title={"Top Rated Movies"}
                        movies={movies.topRatedMovies}
                    />
                </div>
            </div>
        </div>
    );
};

export default SecondaryContainer;
