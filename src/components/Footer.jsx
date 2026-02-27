import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Social Links */}
                <div className="flex gap-6 mb-8">
                    <a
                        href="#"
                        className="hover:text-white transition-colors"
                        aria-label="Facebook"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-colors"
                        aria-label="Twitter"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <circle
                                cx="17.5"
                                cy="6.5"
                                r="1.5"
                                fill="currentColor"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="hover:text-white transition-colors"
                        aria-label="YouTube"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </a>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">
                            Features
                        </h3>
                        <ul className="space-y-2 text-sm font-normal tracking-wide">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    AI Recommendations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Watchlist
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    My List
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Trending Now
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">
                            Browse
                        </h3>
                        <ul className="space-y-2 text-sm font-normal tracking-wide">
                            <li className="hover:text-white transition-colors">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Movies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Shows
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    New & Popular
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">
                            Information
                        </h3>
                        <ul className="space-y-2 text-sm font-normal tracking-wide">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Cookie Settings
                                </a>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <Link to={"/support"}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm">More</h3>
                        <ul className="space-y-2 text-sm font-normal tracking-wide">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Download
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Gift Cards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Feedback
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-sm mb-4 font-normal">
                        Experience entertainment like never before with Netflix
                        GPT. Our AI-powered platform learns your preferences and
                        delivers personalized movie and TV show recommendations
                        tailored just for you.
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <p className="text-xs font-normal">
                            © 2026 Netflix GPT. All rights reserved.
                        </p>
                        <p className="text-xs font-normal">
                            Made with ❤️ by Narendra Kamadi
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
