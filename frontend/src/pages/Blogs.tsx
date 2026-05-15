import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div>
                <div className="w-full">
                    <Appbar />
                </div>
                <div className="max-w-2xl mx-auto p-6 animate-pulse">

                    {/* Author Section */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                        <div className="space-y-2">
                            <div className="h-4 w-32 bg-slate-200 rounded"></div>
                            <div className="h-3 w-20 bg-slate-200 rounded"></div>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="h-8 w-3/4 bg-slate-200 rounded mb-4"></div>

                    {/* Content */}
                    <div className="space-y-3">
                        <div className="h-4 bg-slate-200 rounded"></div>
                        <div className="h-4 bg-slate-200 rounded"></div>
                        <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                        <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                    </div>    
                </div>

                <div className="max-w-2xl mx-auto p-6 animate-pulse">

                    {/* Author Section */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                        <div className="space-y-2">
                            <div className="h-4 w-32 bg-slate-200 rounded"></div>
                            <div className="h-3 w-20 bg-slate-200 rounded"></div>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="h-8 w-3/4 bg-slate-200 rounded mb-4"></div>

                    {/* Content */}
                    <div className="space-y-3">
                        <div className="h-4 bg-slate-200 rounded"></div>
                        <div className="h-4 bg-slate-200 rounded"></div>
                        <div className="h-4 w-5/6 bg-slate-200 rounded"></div>
                        <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                    </div>    
                </div>

            </div>
        )
    }

    return (
        <div>
            <div>
                <Appbar />
            </div>
            <div className="flex flex-col justify-center items-center h-full">

                {blogs.map((blog) => (
                    <BlogCard
                        id={blog.id}
                        key={blog.id}
                        authorname={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"15 May"}
                    />
                ))}

            </div>
        </div>
    )
}