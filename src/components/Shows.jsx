import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import CategorySection from "./CategorySection";
import usePopularTVShows from "../hooks/usePopularTVShows";
import useTopRatedTVShows from "../hooks/useTopRatedTVShows";
import useAiringTodayTVShows from "../hooks/useAiringTodayTVShows";

const Shows = () => {
    // Fetch TV shows data
    usePopularTVShows();
    useTopRatedTVShows();
    useAiringTodayTVShows();

    // Get TV shows from Redux store
    const tvShows = useSelector((store) => store.movies);

    // Featured show data - using the first show from popular TV shows
    const featuredShow = tvShows.popularTVShows?.[0]
        ? {
              title:
                  tvShows.popularTVShows[0].name ||
                  tvShows.popularTVShows[0].title,
              subtitle: "Featured Show",
              description: tvShows.popularTVShows[0].overview,
              backgroundImage: `https://image.tmdb.org/t/p/original${tvShows.popularTVShows[0].backdrop_path}`,
              ageRating: "A",
              videoKey: tvShows.popularTVShows[0].videoKey,
          }
        : null;

    // TV shows categories
    const tvShowsCategories = [
        {
            title: "Airing Today",
            shows: tvShows.airingTodayTVShows || [],
        },
        {
            title: "Popular TV Shows",
            shows: tvShows.popularTVShows || [],
        },
        {
            title: "Top Rated TV Shows",
            shows: tvShows.topRatedTVShows || [],
        },
    ];

    return (
        <div className="bg-black min-h-screen">
            <Header />

            {/* Hero Banner */}
            <HeroBanner show={featuredShow} />

            {/* Categories Section */}
            <div className="relative z-20 -mt-32 space-y-12 pb-10">
                {tvShowsCategories.map((category, index) => (
                    <CategorySection
                        key={index}
                        title={category.title}
                        shows={category.shows}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Shows;
