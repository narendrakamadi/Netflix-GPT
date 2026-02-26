import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCart = ({ posterPath, title }) => {
    return (
        <div className="w-44 min-w-44 flex flex-col items-center bg-black/60 rounded-lg shadow-md overflow-hidden">
            <img
                className="w-full h-60 object-cover"
                src={IMG_CDN_URL + posterPath}
                alt={title}
            />
        </div>
    );
};

export default MovieCart;
