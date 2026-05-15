import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const BlogPost = ({ blog }: { blog: Blog }) => {

    if (!blog) {
        return <div>No blog found</div>
    }

    return (
        <div>
            <Appbar />
            <div className="min-h-screen bg-white px-6 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">

                    {/* Left Side */}
                    <div className="col-span-8">

                        <h1 className="text-5xl font-extrabold leading-tight text-slate-900">
                            {blog.title}
                        </h1>

                        <div className="mt-3 text-slate-500 text-sm">
                            Posted on May 15, 2026
                        </div>

                        <div className="mt-8 text-lg leading-9 text-slate-700 whitespace-pre-line">
                            {blog.content}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-span-4">

                        <div className="sticky top-10">

                            <div className="text-slate-500 text-sm mb-3">
                                Author
                            </div>

                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-white text-xl font-bold">
                                    {blog.author?.name?.[0]}
                                </div>

                                <div>
                                    <div className="text-2xl font-bold text-slate-900">
                                        {blog.author?.name}
                                    </div>

                                    <div className="text-slate-500 mt-1">
                                        Passionate writer and developer.
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}