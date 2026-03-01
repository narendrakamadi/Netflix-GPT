import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import { useState } from "react";

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const currentLang = useSelector((store) => store.config.lang);
    const [isOpen, setIsOpen] = useState(false);

    const languageData = {
        en: { label: "English", flag: "🇬🇧", code: "EN" },
        hi: { label: "हिंदी", flag: "🇮🇳", code: "HI" },
        spanish: { label: "Español", flag: "🇪🇸", code: "ES" },
    };

    const handleLanguageSelect = (code) => {
        dispatch(changeLanguage(code));
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Minimalist Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-white hover:text-red-500 transition-colors duration-200 cursor-pointer group"
            >
                {/* Flag */}
                <span className="text-base sm:text-lg transition-transform duration-300 group-hover:scale-110">
                    {languageData[currentLang].flag}
                </span>

                {/* Language Label - Hidden on very small screens */}
                <span className="hidden sm:inline text-xs sm:text-sm font-medium">
                    {languageData[currentLang].label}
                </span>

                {/* Chevron */}
                <svg
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown Container - Mobile Optimized */}
                    <div className="absolute right-0 sm:right-0 mt-2 w-36 sm:w-40 md:w-44 bg-black border border-red-600 rounded-md shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                        {/* Language Options - Compact */}
                        <div className="py-1">
                            {Object.entries(languageData).map(
                                ([code, data]) => (
                                    <button
                                        key={code}
                                        onClick={() =>
                                            handleLanguageSelect(code)
                                        }
                                        className={`w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 text-left transition-all duration-200 flex items-center gap-1.5 sm:gap-2 active:scale-95 ${
                                            currentLang === code
                                                ? "bg-red-600 text-white"
                                                : "text-gray-300 hover:bg-gray-900 hover:text-white"
                                        }`}
                                    >
                                        {/* Flag */}
                                        <span className="text-sm sm:text-base md:text-lg flex-shrink-0">
                                            {data.flag}
                                        </span>

                                        {/* Language Name */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs sm:text-sm font-semibold truncate">
                                                {data.label}
                                            </p>
                                            <p
                                                className={`text-xs hidden sm:block ${
                                                    currentLang === code
                                                        ? "text-red-100"
                                                        : "text-gray-500"
                                                }`}
                                            >
                                                {data.code}
                                            </p>
                                        </div>

                                        {/* Checkmark */}
                                        {currentLang === code && (
                                            <svg
                                                className="w-3.5 h-3.5 sm:w-4 md:w-5 md:h-5 flex-shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                ),
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSelector;
