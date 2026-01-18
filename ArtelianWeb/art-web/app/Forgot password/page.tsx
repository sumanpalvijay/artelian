"use client";

import { useState, FormEvent } from "react";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email) {
            setError("Email cannot be blank");
            return;
        }

        setError("");
        // 🔗 Call reset password API / Supabase here
        alert("Password reset link sent!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3ede3]">
            <div className="w-[420px] text-center">

                {/* Title */}
                <h1 className="text-4xl font-serif text-gray-300 mb-3">
                    Reset password
                </h1>

                <p className="text-sm text-gray-400 mb-10">
                    Enter your login email and we&apos;ll send you a link to
                    <br />
                    reset your password.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="text-left mb-2">
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full bg-transparent border-b px-1 py-2 outline-none ${error ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-left text-xs text-red-600 mb-6">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-[#b32017] text-white py-3 mt-6 font-medium"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
