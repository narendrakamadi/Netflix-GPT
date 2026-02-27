import React from "react";
import MovieCart from "./MovieCart";

const CategorySection = ({ title, shows }) => {
    if (!shows || shows.length === 0) return null;

    return (
        <div className="px-4 md:px-12">
            <h2 className="text-white text-lg md:text-2xl font-semibold mb-4">
                {title}
            </h2>
            {/* List/Horizontal Scroll View */}
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide pb-4 scroll-smooth">
                {shows.map((show) => (
                    <MovieCart
                        key={show.id}
                        showId={show.id}
                        title={show.title || show.name}
                        posterPath={show.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
