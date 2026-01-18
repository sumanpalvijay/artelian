"use client";

import Link from "next/link";

export default function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black/40">
            <div className="relative w-[380px] bg-[#f3ede3] p-10 rounded-sm shadow-lg">

                {/* Close Button */}
                <button className="absolute top-4 left-4 text-xl font-bold">
                    ✕
                </button>

                {/* Title */}
                <h1 className="text-3xl font-serif text-center mb-8">
                    Sign Up
                </h1>

                {/* Form */}
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="First name"
                        className="w-full border border-gray-700 px-4 py-2 bg-transparent outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Last name"
                        className="w-full border border-gray-700 px-4 py-2 bg-transparent outline-none"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-700 px-4 py-2 bg-transparent outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-700 px-4 py-2 bg-transparent outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full mt-4 bg-[#8b3a2f] text-white py-2 font-medium hover:opacity-90"
                    >
                        Sign up
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-4 text-sm">
                    Already a member?{" "}
                    <Link href="/login" className="font-semibold underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
}
