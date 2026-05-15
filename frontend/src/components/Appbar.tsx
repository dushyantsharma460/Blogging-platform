import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to={'/blogs'}>
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

                    <Avatar name="Dushyant" size={10} />

                </div>
            </div>
        </div>
    )
}