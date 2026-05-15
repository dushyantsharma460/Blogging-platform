import { Link } from "react-router-dom";

interface BlogCardProps {
    id: string,
    authorname: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    id,
    authorname,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="max-w-2xl p-6 border-b border-slate-200 hover:bg-slate-50 transition-all cursor-pointer">

                <div className="flex items-center text-sm text-slate-600 mb-3">
                    <Avatar name={authorname} size={6} />

                    <div className="font-medium ml-2">
                        {authorname}
                    </div>

                    <div className="mx-2 text-slate-400">
                        •
                    </div>

                    <div>
                        {publishedDate}
                    </div>
                </div>

                <div className="text-2xl font-bold text-slate-900 leading-tight mb-2">
                    {title}
                </div>

                <div className="text-slate-700 text-base leading-7 mb-4">
                    {content.slice(0, 150) + "..."}
                </div>

                <div className="text-sm text-slate-500 font-medium">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </Link>
    );
};

export function Avatar({ name, size = 8 }: { name: string, size?: number }) {
    return (
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-slate-700 rounded-full`}>
            <span className="font-medium text-white">
                {name[0]}
            </span>
        </div>
    )
}