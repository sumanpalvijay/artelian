"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {

    const router = useRouter();

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    /* Timer countdown */
    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    /* Handle typing */
    const handleChange = (value: string, index: number) => {

        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputs.current[index + 1]?.focus();
        }
    };

    /* Handle backspace */
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {

        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    /* Verify OTP */
    const verifyOtp = () => {

        const enteredOtp = otp.join("");

        if (enteredOtp.length === 6) {
            router.push("/change-password");
        } else {
            alert("Enter valid OTP");
        }
    };

    /* Resend OTP */
    const resendOtp = () => {
        setTimer(30);
        alert("OTP Resent");
    };

    return (
        <main className="pt-32 flex justify-center items-center min-h-screen bg-gray-200">

            <div className="bg-[#e8e0d6] p-10 w-[420px] shadow-lg">

                <h2 className="text-3xl text-center mb-6">
                    OTP Verification
                </h2>

                <p className="text-center mb-6">
                    Enter the 6 digit OTP sent to your phone
                </p>

                {/* OTP BOXES */}
                <div className="flex justify-between mb-6">

                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputs.current[index] = el; }}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            maxLength={1}
                            className="w-12 h-12 text-center text-xl border"
                        />
                    ))}

                </div>

                {/* VERIFY BUTTON */}
                <button
                    onClick={verifyOtp}
                    className="w-full bg-[#8b3a32] text-white py-3"
                >
                    Verify OTP
                </button>

                {/* TIMER */}
                <div className="text-center mt-4">

                    {timer > 0 ? (
                        <p>Resend OTP in {timer}s</p>
                    ) : (
                        <button
                            onClick={resendOtp}
                            className="text-red-500"
                        >
                            Resend OTP
                        </button>
                    )}

                </div>

            </div>

        </main>
    );
}