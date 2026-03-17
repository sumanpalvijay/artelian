"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [phone, setPhone] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedPhone = sessionStorage.getItem("phone");

        if (!storedPhone) {
            router.push("/forgot-password"); // ❌ block direct access
        } else {
            setPhone(storedPhone);
        }
    }, []);

    const changePassword = async () => {
        if (!password || !confirmPassword) {
            return alert("Fill all fields");
        }

        if (password !== confirmPassword) {
            return alert("Passwords do not match");
        }

        const res = await fetch("/api/change-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone, password }),
        });

        const data = await res.json();

        if (data?.success) {
            alert("Password updated successfully");

            sessionStorage.removeItem("phone"); // cleanup
            router.push("/login");
        }
    };

    if (!phone) return null;

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
                <h2 className="text-xl font-bold text-center mb-4">
                    Change Password
                </h2>

                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-3"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-3"
                />

                <button
                    onClick={changePassword}
                    className="w-full bg-blue-600 text-white py-2 rounded"
                >
                    Update Password
                </button>
            </div>
        </div>
    );
}