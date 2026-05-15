interface BlogCardProps {
    authorname: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorname,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <div className="max-w-2xl p-6 border-b border-slate-200 hover:bg-slate-50 transition-all cursor-pointer">
            
            <div className="flex items-center text-sm text-slate-600 mb-3">
                <Avatar name={authorname} />

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
    );
};

function Avatar({ name }: { name: string }) {
    return (
        <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            {name[0].toUpperCase()}
        </div>
    );
}