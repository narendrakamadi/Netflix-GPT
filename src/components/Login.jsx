import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div className="relative min-h-screen bg-black">
            <Header />
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_small.jpg"
                    alt="Bg Image"
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:py-16">
                <form className="mx-auto w-full max-w-md rounded-lg bg-black/80 p-6 text-white sm:p-10 md:max-w-lg">
                    <h1 className="py-4 text-2xl font-bold sm:text-3xl">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="my-3 w-full rounded-lg bg-gray-700 p-4 text-base placeholder:text-gray-400"
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="my-3 w-full rounded-lg bg-gray-700 p-4 text-base placeholder:text-gray-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="my-3 w-full rounded-lg bg-gray-700 p-4 text-base placeholder:text-gray-400"
                    />
                    <button className="my-6 w-full rounded-lg bg-red-700 p-4 text-base">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p
                        className="m-2 cursor-pointer p-2 text-sm text-gray-200 sm:text-base"
                        onClick={toggleSignInForm}
                    >
                        {isSignInForm
                            ? "New to Netflix? Sign Up Now"
                            : "Already Registered? Sign in Now"}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
