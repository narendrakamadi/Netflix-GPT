import React from "react";
import MovieCart from "./MovieCart";
import VideoBackground from "./VideoBackground";

const MovieList = ({ title, movies }) => {
    return (
        <div className="relative">
            <div className="relative z-10 px-4 md:px-12">
                <h1 className="text-white text-base md:text-xl font-bold mb-4">
                    {title}
                </h1>
                <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pb-4">
                    {movies?.map((movie) => (
                        <MovieCart
                            key={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
