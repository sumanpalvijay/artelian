"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
    const [phone, setPhone] = useState<string>("");
    const router = useRouter();

    const sendOtp = async () => {
        if (!phone) return alert("Enter phone number");

        const res = await fetch("/api/send-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone }),
        });

        const data = await res.json();

        if (data?.success) {
            router.push(`/verify-otp?phone=${phone}`);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
                <h2 className="text-xl font-bold text-center mb-4">
                    Forgot Password
                </h2>

                <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border rounded-lg mb-4"
                />

                <button
                    onClick={sendOtp}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg"
                >
                    Send OTP
                </button>
            </div>
        </div>
    );
}