import React, { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Link } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    }),
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error);
                navigate("/error");
            });
    };

    return (
        <div className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-sm">
            <div className="flex items-center px-6 py-3">
                <Link to="/">
                    <img
                        className="w-24 cursor-pointer hover:opacity-80"
                        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
                        alt="Netflix Logo"
                    />
                </Link>

                {/* Navigation Menu */}
                {user && (
                    <nav className="hidden md:flex gap-6 text-white text-xs font-normal tracking-wide ml-8">
                        <a href="#" className="hover:text-gray-400 transition">
                            Home
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            Shows
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            Movies
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            Games
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            New & Popular
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            My List
                        </a>
                        <a href="#" className="hover:text-gray-400 transition">
                            Browse by Languages
                        </a>
                    </nav>
                )}

                {/* Right Section - Search, Children Toggle, Bell, Profile */}
                {user && (
                    <div className="flex items-center gap-5 ml-auto">
                        <button className="text-white hover:opacity-60 transition">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Children Button */}
                        <button className="text-white text-xs hover:opacity-60 transition">
                            {user?.displayName ? user.displayName : "User"}
                        </button>

                        {/* Bell Icon */}
                        <button className="text-white hover:opacity-60 transition">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 hover:opacity-60 transition"
                            >
                                <div className="w-7 h-7 rounded bg-yellow-500 flex items-center justify-center text-xs font-bold">
                                    {user?.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="User"
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-lg">👤</span>
                                    )}
                                </div>
                                <svg
                                    className="w-3 h-3 text-white"
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
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-3 w-44 bg-black/95 rounded-lg py-2 shadow-2xl">
                                    <div className="px-3 py-2 border-b border-gray-600/50 flex items-center gap-2">
                                        <span className="text-xs">👤</span>
                                        <p className="text-white text-xs font-medium">
                                            Seema
                                        </p>
                                    </div>
                                    <button className="w-full text-left px-3 py-2 text-white text-xs hover:bg-gray-800/50 transition flex items-center gap-2">
                                        <span>✏️</span>
                                        <span>Manage Profiles</span>
                                    </button>
                                    <button className="w-full text-left px-3 py-2 text-white text-xs hover:bg-gray-800/50 transition flex items-center gap-2">
                                        <span>📱</span>
                                        <span>Transfer Profile</span>
                                    </button>
                                    <button className="w-full text-left px-3 py-2 text-white text-xs hover:bg-gray-800/50 transition flex items-center gap-2">
                                        <span>👤</span>
                                        <span>Account</span>
                                    </button>
                                    <button className="w-full text-left px-3 py-2 text-white text-xs hover:bg-gray-800/50 transition flex items-center gap-2">
                                        <span>❓</span>
                                        <span>Help Centre</span>
                                    </button>
                                    <div className="border-t border-gray-600/50 mt-2 pt-2">
                                        <button
                                            onClick={handleSignOut}
                                            className="w-full text-left px-3 py-2 text-white text-xs hover:bg-gray-800/50 transition"
                                        >
                                            Sign out of Netflix
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
