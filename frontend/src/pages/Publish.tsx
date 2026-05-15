import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">

            <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Write a New Blog
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Share your thoughts with the world.
                    </p>
                </div>

                {/* Title Input */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Blog title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-slate-800"
                    />
                </div>

                {/* Content Input */}
                <div className="mb-6">
                    <textarea
                        placeholder="Start writing your blog..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="w-full border border-slate-300 rounded-xl px-4 py-4 text-base leading-7 resize-none focus:outline-none focus:ring-2 focus:ring-slate-800"
                    />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">

                    <div className="text-sm text-slate-500">
                        {content.length} characters
                    </div>

                    <button
                        onClick={async () => {
                            if (!title.trim() || !content.trim()) {
                                alert("Title and content are required");
                                return;
                            }

                            try {
                                const response = await axios.post(
                                    `${BACKEND_URL}/api/v1/blog`,
                                    {
                                        title,
                                        content
                                    },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("token")}`
                                        }
                                    }
                                );

                                navigate(`/blog/${response.data.id}`);
                            } catch (error) {
                                alert("Failed to publish blog");
                            }
                        }}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium transition"
                    >
                        Publish
                    </button>

                </div>

            </div>

        </div>
    )
}