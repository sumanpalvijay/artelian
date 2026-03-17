"use client";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyOtp() {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputs = useRef<(HTMLInputElement | null)[]>([]);
    const router = useRouter();
    const params = useSearchParams();
    const phone = params.get("phone");

    const handleChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    const verifyOtp = async () => {
        const finalOtp = otp.join("");

        const res = await fetch("/api/verify-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone, otp: finalOtp }),
        });

        const data = await res.json();

        if (data?.success) {
            // ✅ Save phone securely
            sessionStorage.setItem("phone", phone || "");
            router.push("/change-password");
        } else {
            alert("Invalid OTP");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

                <div className="flex gap-2 mb-4 justify-center">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputs.current[index] = el;
                            }}
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="w-10 h-10 border text-center rounded"
                        />
                    ))}
                </div>

                <button
                    onClick={verifyOtp}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Verify OTP
                </button>
            </div>
        </div>
    );
}