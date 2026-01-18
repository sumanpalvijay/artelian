"use client";

import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black/40">
            <div className="relative w-[400px] bg-[#f3ede3] px-10 py-12 shadow-lg">

                {/* Close Button */}
                <button className="absolute top-4 right-4 text-xl font-bold">
                    ✕
                </button>

                {/* Heading */}
                <h1 className="text-3xl font-serif text-center mb-2">
                    LOG IN
                </h1>

                <p className="text-center text-sm mb-8">
                    New to this site?{" "}
                    <Link href="/signup" className="text-red-700 font-medium">
                        Sign Up
                    </Link>
                </p>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm mb-1">Email *</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-700 px-4 py-2 bg-transparent outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Password *</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-700 px-4 py-2 bg-transparent outline-none"
                        />
                        <Link
                            href="/forgot-password"
                            className="text-xs text-red-700 underline mt-1 inline-block"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-[#8b3a2f] text-white py-2 font-medium hover:opacity-90"
                    >
                        Log In
                    </button>
                </form>

                {/* Divider */}
                <div className="text-center my-6 text-sm">
                    or Log In with
                </div>

                {/* Google Login */}
                <button className="flex items-center justify-center w-full border border-gray-400 py-2">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                </button>
            </div>
        </div>
    );
}
