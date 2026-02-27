import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Account = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main className="pt-32 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-10">
                        <h1 className="text-4xl font-bold mb-2">Account</h1>
                        <p className="text-gray-400">
                            Manage your plan, billing, and security settings.
                        </p>
                    </header>

                    <section className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-gray-900 rounded-lg p-6">
                            <h2 className="text-sm uppercase tracking-wide text-gray-400">Plan</h2>
                            <p className="text-2xl font-semibold mt-2">Standard</p>
                            <p className="text-gray-400 mt-1">HD streaming on 2 devices</p>
                            <button className="mt-4 bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
                                Change Plan
                            </button>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-6">
                            <h2 className="text-sm uppercase tracking-wide text-gray-400">Billing</h2>
                            <p className="text-2xl font-semibold mt-2">$12.99 / month</p>
                            <p className="text-gray-400 mt-1">Next charge: Mar 15, 2026</p>
                            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                                View Invoices
                            </button>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-6">
                            <h2 className="text-sm uppercase tracking-wide text-gray-400">Security</h2>
                            <p className="text-2xl font-semibold mt-2">Protected</p>
                            <p className="text-gray-400 mt-1">2-factor auth: Off</p>
                            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                                Enable 2FA
                            </button>
                        </div>
                    </section>

                    <section className="bg-gray-900 rounded-lg p-6 mb-10">
                        <h2 className="text-xl font-semibold mb-4">Membership & Billing</h2>
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                                <p className="text-gray-400">Payment Method</p>
                                <p className="mt-1">Visa ending in 4242</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Billing Address</p>
                                <p className="mt-1">San Jose, CA, United States</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Billing Email</p>
                                <p className="mt-1">billing@example.com</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Next Billing Date</p>
                                <p className="mt-1">Mar 15, 2026</p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
                                Update Payment Method
                            </button>
                            <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                                Update Billing Email
                            </button>
                        </div>
                    </section>

                    <section className="bg-gray-900 rounded-lg p-6 mb-10">
                        <h2 className="text-xl font-semibold mb-4">Devices & Sessions</h2>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-gray-800 rounded p-4">
                                <p className="font-medium">MacBook Pro</p>
                                <p className="text-gray-400 mt-1">Last active: 2 hours ago</p>
                            </div>
                            <div className="bg-gray-800 rounded p-4">
                                <p className="font-medium">iPhone 15</p>
                                <p className="text-gray-400 mt-1">Last active: Yesterday</p>
                            </div>
                            <div className="bg-gray-800 rounded p-4">
                                <p className="font-medium">Living Room TV</p>
                                <p className="text-gray-400 mt-1">Last active: 3 days ago</p>
                            </div>
                        </div>
                        <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                            Sign Out of All Devices
                        </button>
                    </section>

                    <section className="bg-gray-900 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Privacy & Controls</h2>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Profile Visibility</p>
                                    <p className="text-gray-400">Visible to you only</p>
                                </div>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                                    Manage
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Data Download</p>
                                    <p className="text-gray-400">Export your viewing history</p>
                                </div>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors">
                                    Request
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Delete Account</p>
                                    <p className="text-gray-400">Permanently delete your account</p>
                                </div>
                                <button className="bg-red-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600 transition-colors">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Account;
