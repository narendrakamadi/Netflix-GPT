import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Support = () => {
    const [activeCategory, setActiveCategory] = useState("getting-started");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = [
        { id: "getting-started", name: "Getting Started", icon: "🚀" },
        { id: "account", name: "Account & Billing", icon: "👤" },
        { id: "playback", name: "Playback Issues", icon: "▶️" },
        { id: "features", name: "Features", icon: "⭐" },
        { id: "troubleshooting", name: "Troubleshooting", icon: "🔧" },
    ];

    const faqs = {
        "getting-started": [
            {
                question: "What is Netflix-GPT?",
                answer: "Netflix-GPT is an AI-powered movie recommendation platform that helps you discover movies based on your preferences using advanced GPT technology."
            },
            {
                question: "How do I create an account?",
                answer: "Click on 'Sign In' on the homepage, then select 'Sign up now'. Fill in your email, password, and name to create your account."
            },
            {
                question: "Is Netflix-GPT free?",
                answer: "Yes, Netflix-GPT is currently free to use. Simply create an account to start exploring movie recommendations."
            },
            {
                question: "How do I get movie recommendations?",
                answer: "Once logged in, you can browse curated lists or use the GPT-powered search to get personalized movie recommendations based on your preferences."
            }
        ],
        "account": [
            {
                question: "How do I reset my password?",
                answer: "Click on 'Forgot Password' on the login page. Enter your email address and you'll receive instructions to reset your password."
            },
            {
                question: "How do I update my profile information?",
                answer: "Go to your Profile page by clicking on your avatar in the top right corner, then select 'Account' to update your information."
            },
            {
                question: "How do I delete my account?",
                answer: "Navigate to Account Settings > Privacy > Delete Account. Please note this action is permanent and cannot be undone."
            },
            {
                question: "Can I change my email address?",
                answer: "Yes, go to Account Settings and update your email address. You'll need to verify the new email before the change takes effect."
            }
        ],
        "playback": [
            {
                question: "Why won't the trailer play?",
                answer: "Check your internet connection and ensure your browser is up to date. If the issue persists, try clearing your browser cache or using a different browser."
            },
            {
                question: "The video is buffering constantly",
                answer: "This is usually due to slow internet connection. Try refreshing the page, closing other tabs, or checking your network speed."
            },
            {
                question: "I can't hear any sound",
                answer: "Check your device's volume settings and ensure the video player isn't muted. Also verify that your browser has permission to play audio."
            },
            {
                question: "Video quality is poor",
                answer: "Video quality depends on your internet speed. The player automatically adjusts quality based on your connection. For better quality, ensure you have a stable, high-speed connection."
            }
        ],
        "features": [
            {
                question: "How does the AI recommendation work?",
                answer: "Our AI analyzes your search queries and preferences to suggest movies that match your taste. The more you use it, the better it gets at understanding your preferences."
            },
            {
                question: "Can I save movies to watch later?",
                answer: "This feature is coming soon! You'll be able to create custom watchlists and save your favorite movies."
            },
            {
                question: "How are movies categorized?",
                answer: "Movies are categorized by genre, popularity, release date, and trending status. We also feature Now Playing and Top Rated sections."
            },
            {
                question: "Can I share movie recommendations?",
                answer: "Sharing features are currently in development. Soon you'll be able to share your favorite discoveries with friends!"
            }
        ],
        "troubleshooting": [
            {
                question: "The page won't load",
                answer: "Try refreshing the page, clearing your browser cache, or checking your internet connection. If the problem persists, try a different browser."
            },
            {
                question: "I'm getting an error message",
                answer: "Note the error message and try logging out and back in. If the issue continues, contact support with details about the error."
            },
            {
                question: "Features are not working properly",
                answer: "Ensure you're using an up-to-date browser (Chrome, Firefox, Safari, or Edge). Clear your cache and cookies, then try again."
            },
            {
                question: "I can't sign in",
                answer: "Verify you're using the correct email and password. If you've forgotten your password, use the 'Forgot Password' option. Ensure cookies are enabled in your browser."
            }
        ]
    };

    const filteredFaqs = searchQuery
        ? Object.values(faqs).flat().filter(
            faq =>
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : faqs[activeCategory];

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black pt-32 pb-12">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-3">Help Center</h1>
                        <p className="text-lg text-gray-400 mb-8">How can we help you today?</p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search for help..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-5 py-3 rounded bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Categories */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setSearchQuery("");
                                }}
                                className={`px-4 py-3 rounded text-sm font-medium transition-all ${
                                    activeCategory === category.id && !searchQuery
                                        ? "bg-white text-black"
                                        : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                                }`}
                            >
                                <div className="text-2xl mb-1">{category.icon}</div>
                                <div>{category.name}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Content */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        {searchQuery
                            ? `Search Results (${filteredFaqs.length})`
                            : categories.find(c => c.id === activeCategory)?.name}
                    </h2>

                    {filteredFaqs.length > 0 ? (
                        <div className="space-y-3">
                            {filteredFaqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="bg-gray-900 rounded p-5 cursor-pointer group hover:bg-gray-800 transition-colors"
                                >
                                    <summary className="font-medium flex justify-between items-center list-none">
                                        <span>{faq.question}</span>
                                        <span className="text-gray-400 text-sm ml-4 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-gray-900 rounded">
                            <p className="text-gray-400">No results found for "{searchQuery}"</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-4 text-gray-300 hover:text-white underline"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>

                {/* Contact Support */}
                <div className="mt-16 text-center bg-gray-900 rounded-lg p-8">
                    <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
                    <p className="text-gray-400 mb-6">Our support team is here to assist you</p>
                    <button className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200 transition-colors">
                        Contact Support
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Support;
