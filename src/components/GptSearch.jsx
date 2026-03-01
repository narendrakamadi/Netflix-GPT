import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            {/* Background Image with Overlay */}
            <div className="fixed inset-0 -z-10">
                <img
                    src={BG_IMG}
                    alt="Background"
                    className="h-full w-full object-cover object-center"
                />
                {/* Dark gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 min-h-screen flex flex-col pt-20 md:pt-24 pb-24 md:pb-32">
                {/* Hero Section with Search */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
                    <div className="w-full max-w-5xl mx-auto">
                        {/* Title Section */}
                        <div className="text-center mb-8 md:mb-12 animate-fade-in">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                                Discover Your Next Watch
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
                                Tell us what you're in the mood for, and we'll find the perfect match
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="w-full">
                            <GptSearchBar />
                        </div>

                        {/* Movie Suggestions */}
                        <div className="w-full mt-12 md:mt-16">
                            <GptMovieSuggestions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GptSearch;