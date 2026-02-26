import React from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-4 md:px-12">
            <h1 className="text-white text-lg md:text-2xl font-semibold mb-4">
                {title}
            </h1>
            <div className="flex gap-2 overflow-x-scroll scrollbar-hide pb-4 scroll-smooth">
                {movies?.map((movie) => (
                    <MovieCart
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
