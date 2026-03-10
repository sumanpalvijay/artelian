"use client";

export default function ChangePassword() {
    return (
        <main className="pt-32 flex justify-center items-center min-h-screen bg-gray-200">

            <div className="bg-[#e8e0d6] p-10 w-[420px] shadow-lg">

                <h2 className="text-3xl text-center mb-6">Change Password</h2>

                <input
                    type="password"
                    placeholder="New Password"
                    className="w-full border p-3 mb-4"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border p-3 mb-6"
                />

                <button className="w-full bg-[#8b3a32] text-white py-3">
                    Update Password
                </button>

            </div>

        </main>
    );
}