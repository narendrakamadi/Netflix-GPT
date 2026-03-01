import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import CategorySection from "./CategorySection";
import usePopularTVShows from "../hooks/usePopularTVShows";
import useTopRatedTVShows from "../hooks/useTopRatedTVShows";
import useAiringTodayTVShows from "../hooks/useAiringTodayTVShows";
import useShowVideo from "../hooks/useShowVideo";
import GptSearch from "./GptSearch";

const Shows = () => {
    // Fetch TV shows data
    usePopularTVShows();
    useTopRatedTVShows();
    useAiringTodayTVShows();

    // Get TV shows from Redux store
    const tvShows = useSelector((store) => store.movies);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    // Get the first show's ID for fetching video
    const firstShowId = tvShows.popularTVShows?.[0]?.id;

    // Fetch video key for the featured show
    const { videoKey } = useShowVideo(firstShowId);

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
              videoKey: videoKey,
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

            {showGptSearch ? (
                <GptSearch />
            ) : (
                <>
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
                </>
            )}

            <Footer />
        </div>
    );
};

export default Shows;
