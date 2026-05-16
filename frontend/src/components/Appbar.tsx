import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Appbar = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const [name, setName] = useState(
        localStorage.getItem("name") || ""
    );

    useEffect(() => {

        if (localStorage.getItem("name")) {
            return;
        }

        async function fetchUser() {
            try {
                const response = await axios.get(
                    `${BACKEND_URL}/api/v1/user/me`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setName(response.data.name);

                localStorage.setItem("name", response.data.name);

            } catch (e) {
                console.log(e);
            }
        }

        if (token) {
            fetchUser();
        }

    }, [token]);

    if (!token) {
        return null;
    }

    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to={"/blogs"}>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="relative flex items-center">
                            <div className="w-10 h-10 rounded-full bg-slate-900"></div>
                            <div className="w-6 h-6 rounded-full bg-slate-500 -ml-3"></div>
                        </div>

                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            Draftly
                        </span>
                    </div>
                </Link>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    <Link to={"/publish"}>
                        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-700 transition-all duration-200 shadow-sm">
                            Write
                        </button>
                    </Link>

                    <div className="relative group w-fit">
                        <Avatar name={name} size={10} />

                        <div className="absolute top-12 right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("name");
                                    navigate("/signin");
                                }}
                                className="bg-white border border-slate-200 shadow-lg px-4 py-2 rounded-lg text-sm hover:bg-slate-100 whitespace-nowrap"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};