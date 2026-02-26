import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                {/* Netflix Logo */}
                <img
                    className="w-32 mx-auto mb-8"
                    src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
                    alt="Netflix Logo"
                />

                {/* Error Code */}
                <div className="mb-6">
                    <h1 className="text-9xl font-black text-red-600 mb-4">404</h1>
                    <p className="text-3xl font-bold text-white mb-2">
                        Page Not Found
                    </p>
                    <p className="text-gray-400 text-lg">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent my-8"></div>

                {/* Error Message */}
                <p className="text-gray-300 mb-8">
                    It looks like you've ventured into the unknown. Let's get you back on track!
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 flex-col sm:flex-row justify-center">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition duration-300 transform hover:scale-105"
                    >
                        Go Home
                    </button>
                    <button
                        onClick={() => navigate("/browse")}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded transition duration-300 transform hover:scale-105"
                    >
                        Back to Browse
                    </button>
                </div>

                {/* Fun Message */}
                <p className="text-gray-500 text-sm mt-12">
                    Error Code: 404 | Page Not Found
                </p>
            </div>
        </div>
    );
};

export default Error;
