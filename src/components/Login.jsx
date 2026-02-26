import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/Validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        // Validate the form data here
        // Only validate fullName if in signup mode
        const fullNameValue = isSignInForm ? null : fullName.current.value;
        const message = checkValidData(
            email.current.value,
            password.current.value,
            fullNameValue,
        );
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: fullName.current.value,
                        photoURL:
                            "https://avatars.githubusercontent.com/u/6338797?v=4",
                    })
                        .then(() => {
                            const user = auth.currentUser;
                            dispatch(addUser(user));
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value,
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
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
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mx-auto w-full max-w-md rounded-lg bg-black/80 p-6 text-white sm:p-10 md:max-w-lg"
                >
                    <h1 className="py-4 text-2xl font-bold sm:text-3xl">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            ref={fullName}
                            type="text"
                            placeholder="Full Name"
                            className="my-3 w-full rounded-lg bg-gray-700 p-4 text-base placeholder:text-gray-400"
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="my-3 w-full rounded-lg bg-gray-700 p-4 text-base placeholder:text-gray-400"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="my-3 w-full rounded-lg bg-gray-700 p-4 text-base placeholder:text-gray-400"
                    />
                    {errorMessage && (
                        <div className="mt-4 rounded-lg bg-gray-900 border-l-4 border-red-600 p-4 text-red-400">
                            <p className="text-sm">{errorMessage}</p>
                        </div>
                    )}
                    <button
                        className="my-6 w-full rounded-lg bg-red-700 p-4 text-base cursor-pointer"
                        onClick={handleButtonClick}
                    >
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
