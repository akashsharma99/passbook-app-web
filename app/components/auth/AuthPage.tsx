'use client';
import { useState } from "react";

export default function AuthPage() {
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    return (
        <>
            <h1 className="text-3xl font-bold text-center">Welcome to Passbook</h1>
            <div className="mt-8 bg-white py-8 px-6 shadow rounded-lg sm:px-10 sm:max-w-md marker:sm:w-full">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <div className="mt-1">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            autoComplete="username"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="buttons mt-5">
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-950 disabled:hover:bg-indigo-95">
                        Log In
                    </button>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Need an Account?
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={(e) => {
                            e.preventDefault();
                        }}>
                        Sign Up
                    </a>
                </p>
            </div>

        </>
    )
}