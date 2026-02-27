import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, updatePassword, updateEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import Footer from "./Footer";

const Profile = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const [formData, setFormData] = useState({
        displayName: "",
        email: "",
        photoURL: "",
        newPassword: "",
        confirmPassword: "",
    });

    const fileInputRef = useRef(null);

    // Update formData when user data changes (only if not editing)
    useEffect(() => {
        if (user && !isEditing) {
            setFormData({
                displayName: user.displayName || "",
                email: user.email || "",
                photoURL: user.photoURL || "",
                newPassword: "",
                confirmPassword: "",
            });
        }
    }, [user, isEditing]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setMessage({ type: "", text: "" });
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // For demo purposes, using a placeholder URL
            // In production, upload to Firebase Storage or your preferred service
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, photoURL: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        if (!formData.displayName.trim()) {
            setMessage({ type: "error", text: "Name cannot be empty" });
            return false;
        }

        if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
            setMessage({ type: "error", text: "Passwords do not match" });
            return false;
        }

        if (formData.newPassword && formData.newPassword.length < 6) {
            setMessage({ type: "error", text: "Password must be at least 6 characters" });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const currentUser = auth.currentUser;

            // Update profile (name and photo)
            if (formData.displayName !== user?.displayName || formData.photoURL !== user?.photoURL) {
                await updateProfile(currentUser, {
                    displayName: formData.displayName,
                    photoURL: formData.photoURL,
                });
            }

            // Update email if changed
            if (formData.email !== user?.email) {
                await updateEmail(currentUser, formData.email);
            }

            // Update password if provided
            if (formData.newPassword) {
                await updatePassword(currentUser, formData.newPassword);
                setFormData(prev => ({ ...prev, newPassword: "", confirmPassword: "" }));
            }

            // Update Redux store
            dispatch(addUser({
                uid: currentUser.uid,
                email: currentUser.email,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
            }));

            setMessage({ type: "success", text: "Profile updated successfully!" });
            setIsEditing(false);
        } catch (error) {
            setMessage({ type: "error", text: error.message || "Failed to update profile" });
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        if (user) {
            setFormData({
                displayName: user.displayName || "",
                email: user.email || "",
                photoURL: user.photoURL || "",
                newPassword: "",
                confirmPassword: "",
            });
        }
        setIsEditing(false);
        setMessage({ type: "", text: "" });
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <div className="pt-32 pb-16 px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-2">Profile</h1>
                        <p className="text-gray-400">Manage your account information</p>
                    </div>

                    {/* Message Display */}
                    {message.text && (
                        <div className={`mb-6 p-4 rounded ${
                            message.type === "success" 
                                ? "bg-green-900/30 border border-green-600 text-green-400" 
                                : "bg-red-900/30 border border-red-600 text-red-400"
                        }`}>
                            {message.text}
                        </div>
                    )}

                    {/* Profile Form */}
                    <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-8">
                        {/* Profile Picture */}
                        <div className="mb-8 text-center">
                            <div className="inline-block relative">
                                <img
                                    src={formData.photoURL || "https://ui-avatars.com/api/?name=" + encodeURIComponent(formData.displayName || "User")}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
                                />
                                {isEditing && (
                                    <button
                                        type="button"
                                        onClick={handleImageClick}
                                        className="absolute bottom-0 right-0 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            {isEditing && (
                                <p className="mt-2 text-sm text-gray-400">Click the camera icon to change photo</p>
                            )}
                        </div>

                        {/* Full Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                                className={`w-full px-4 py-3 rounded border focus:outline-none transition-colors ${
                                    isEditing
                                        ? "bg-gray-800 border-gray-600 focus:border-white"
                                        : "bg-gray-800 border-gray-700 cursor-not-allowed opacity-60"
                                }`}
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                                className={`w-full px-4 py-3 rounded border focus:outline-none transition-colors ${
                                    isEditing
                                        ? "bg-gray-800 border-gray-600 focus:border-white"
                                        : "bg-gray-800 border-gray-700 cursor-not-allowed opacity-60"
                                }`}
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Photo URL (Optional)</label>
                            <input
                                type="url"
                                name="photoURL"
                                value={formData.photoURL}
                                onChange={handleInputChange}
                                readOnly={!isEditing}
                                className={`w-full px-4 py-3 rounded border focus:outline-none transition-colors ${
                                    isEditing
                                        ? "bg-gray-800 border-gray-600 focus:border-white"
                                        : "bg-gray-800 border-gray-700 cursor-not-allowed opacity-60"
                                }`}
                                placeholder="https://example.com/photo.jpg"
                            />
                        </div>

                        {/* Change Password Section */}
                        {isEditing && (
                            <div className="border-t border-gray-700 pt-6 mt-6">
                                <h3 className="text-lg font-semibold mb-4">Change Password</h3>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
                                        placeholder="Leave blank to keep current password"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
                                        placeholder="Confirm your new password"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-8">
                            {!isEditing ? (
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="flex-1 bg-white cursor-pointer text-black py-3 rounded font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Edit Profile
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-white text-black py-3 rounded font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? "Saving..." : "Save Changes"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCancel}
                                        disabled={loading}
                                        className="flex-1 bg-gray-700 text-white py-3 rounded font-medium hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                    </form>

                    {/* Account Information */}
                    <div className="mt-8 bg-gray-900 rounded-lg p-8">
                        <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">User ID:</span>
                                <span className="text-gray-300 font-mono">{user?.uid?.slice(0, 20)}...</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Account Created:</span>
                                <span className="text-gray-300">Member since 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Status:</span>
                                <span className="text-green-400">Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Profile;
