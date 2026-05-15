import { Appbar } from "../components/Appbar";
import { BlogPost } from "../components/BlogPost";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {

    const { id } = useParams();

    const { loading, blog } = useBlog({
        id: id || ""
    });

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="min-h-screen bg-white px-6 py-12 animate-pulse">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">

                        {/* Left Side Skeleton */}
                        <div className="col-span-8">

                            {/* Title */}
                            <div className="h-14 bg-slate-200 rounded w-3/4 mb-4"></div>
                            <div className="h-14 bg-slate-200 rounded w-2/3"></div>

                            {/* Date */}
                            <div className="h-4 bg-slate-200 rounded w-40 mt-6"></div>

                            {/* Content */}
                            <div className="mt-10 space-y-4">
                                <div className="h-5 bg-slate-200 rounded w-full"></div>
                                <div className="h-5 bg-slate-200 rounded w-full"></div>
                                <div className="h-5 bg-slate-200 rounded w-5/6"></div>
                                <div className="h-5 bg-slate-200 rounded w-full"></div>
                                <div className="h-5 bg-slate-200 rounded w-4/5"></div>
                                <div className="h-5 bg-slate-200 rounded w-full"></div>
                                <div className="h-5 bg-slate-200 rounded w-2/3"></div>
                            </div>

                        </div>

                        {/* Right Side Skeleton */}
                        <div className="col-span-4">

                            <div className="sticky top-10">

                                <div className="h-4 bg-slate-200 rounded w-16 mb-6"></div>

                                <div className="flex items-center gap-4">

                                    {/* Avatar */}
                                    <div className="w-14 h-14 rounded-full bg-slate-200"></div>

                                    <div className="flex-1">
                                        <div className="h-6 bg-slate-200 rounded w-40 mb-3"></div>
                                        <div className="h-4 bg-slate-200 rounded w-52"></div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <BlogPost blog={blog} />
        </div>
    )
}