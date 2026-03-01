import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const sampleSuggestions = [
    {
        id: 1,
        title: "The Gray City",
        year: 2024,
        rating: 7.8,
        match: 96,
        genres: ["Thriller", "Mystery"],
        overview:
            "A detective unravels a cold case that points back to her own past.",
        poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "Signal to Orion",
        year: 2023,
        rating: 8.1,
        match: 92,
        genres: ["Sci-Fi", "Adventure"],
        overview:
            "A deep space relay finds a message that changes humanity's future.",
        poster: "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "Autumn Letters",
        year: 2022,
        rating: 7.2,
        match: 88,
        genres: ["Drama", "Romance"],
        overview: "Two strangers exchange letters after a mistaken delivery.",
        poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "Midnight Harbor",
        year: 2021,
        rating: 7.5,
        match: 90,
        genres: ["Crime", "Drama"],
        overview: "A dockworker uncovers a smuggling ring tied to his family.",
        poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "Midnight Harbor",
        year: 2021,
        rating: 7.5,
        match: 90,
        genres: ["Crime", "Drama"],
        overview: "A dockworker uncovers a smuggling ring tied to his family.",
        poster: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 6,
        title: "Paper Moons",
        year: 2024,
        rating: 7.9,
        match: 94,
        genres: ["Fantasy", "Family"],
        overview:
            "A young artist brings constellations to life with a secret ink.",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 7,
        title: "Northbound",
        year: 2019,
        rating: 7.1,
        match: 86,
        genres: ["Adventure", "Drama"],
        overview: "A winter trek turns into a survival pact between strangers.",
        poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 8,
        title: "The Last Reel",
        year: 2018,
        rating: 6.8,
        match: 82,
        genres: ["Comedy", "Drama"],
        overview:
            "A retired projectionist saves a neighborhood cinema from closure.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    },
];

const GptMovieSuggestions = () => {
    const langKey = useSelector((store) => store.config.lang);
    const lang = language[langKey];

    return (
        <div className="mt-10 text-white/90">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-white text-lg md:text-2xl font-semibold">
                    {lang["Suggestions for you"]}
                </h3>
                <span className="text-white/50 text-xs md:text-sm">
                    Top picks based on your mood
                </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                {sampleSuggestions.map((movie) => (
                    <div
                        key={movie.id}
                        className="flex flex-col rounded-lg border border-white/10 bg-black/60 shadow-md overflow-hidden"
                    >
                        <div className="relative w-full aspect-[2/3] overflow-hidden">
                            <img
                                src={movie.poster}
                                alt={`${movie.title} poster`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <h4 className="text-white text-sm font-semibold leading-snug">
                                        {movie.title}
                                    </h4>
                                    <p className="text-white/70 text-[11px] mt-1">
                                        {movie.genres.join(" · ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 pb-3 pt-2">
                            <p className="text-white/70 text-xs leading-relaxed">
                                {movie.overview}
                            </p>
                            <div className="mt-3 flex items-center justify-between text-[11px] text-white/60">
                                <span>{movie.year}</span>
                                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white">
                                    {movie.match}% match
                                </span>
                                <span className="text-white font-semibold">
                                    {movie.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;
