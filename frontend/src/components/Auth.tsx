import type { SignupInputInfer } from "@dushyantsharma460/medium-common";
import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInputInfer>({
        email: "",
        password: "",
        name: ""
    });

    return (
        <div className="min-h-screen flex justify-center items-center px-4">

            <div className="w-full max-w-md">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        {type === "signup" ? "Create Account" : "Welcome Back"}
                    </h1>

                    <p className="text-gray-500 mt-3 text-sm">
                        {type === "signup"
                            ? "Already have an account?"
                            : "Don't have an account?"}

                        <Link
                            to={type === "signup" ? "/signin" : "/signup"}
                            className="text-black font-semibold underline ml-2 hover:text-gray-700 transition"
                        >
                            {type === "signup" ? "Login" : "Signup"}
                        </Link>
                    </p>
                </div>

                <div className="space-y-5">

                    {type === "signup" && (
                        <LabelledInput
                            label="Name"
                            placeholder="Enter your name"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                });
                            }}
                        />
                    )}

                    <LabelledInput
                        label="Email"
                        placeholder="Enter your email"
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value
                            });
                        }}
                    />

                    <LabelledInput
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            });
                        }}
                    />

                    <button className="w-full bg-black text-white py-3 rounded-xl font-semibold text-lg hover:bg-gray-900 transition-all duration-200">
                        {type === "signup" ? "Signup" : "Signin"}
                    </button>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({
    label,
    placeholder,
    onChange,
    type
}: LabelledInputType) {
    return (
        <div className="w-full">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
                {label}
            </label>

            <input
                type={type || "text"}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none transition-all duration-200 focus:border-black focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400"
            />
        </div>
    );
}