"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();

    return (

        <div className=" pt-45 min-h-screen flex items-center justify-center bg-black/40">
            <div className="relative w-[380px] bg-[#f3ede3] p-10 rounded-sm shadow-lg">

                {/* Close Button */}
                <button
                    onClick={() => router.push("/?signup=true")}
                    className="absolute top-4 right-4 text-2xl"
                >
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

                    <div className="flex items-center border border-gray-700">

                        <span className="px-3 bg-gray-100">+91</span>
                        <input
                            type="text"
                            placeholder="Phone number"
                            className="px-3 py-2 outline-none"
                        />
                    </div>

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
