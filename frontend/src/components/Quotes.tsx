export const Quotes = () => {
    return (
        <div className="h-screen bg-slate-100 flex items-center justify-center px-16">

            <div className="max-w-2xl">

                <div className="text-7xl text-slate-300 font-serif leading-none mb-4">
                    “
                </div>

                <p className="text-4xl font-bold leading-[1.4] text-slate-900 tracking-tight">
                    The customer service I received was exceptional.
                    The support team went above and beyond to address
                    my concerns.
                </p>

                <div className="mt-10 border-l-4 border-slate-300 pl-5">
                    <h3 className="text-xl font-semibold text-slate-900">
                        Jules Winnfield
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                        CEO • Acme Corp
                    </p>
                </div>

            </div>

        </div>
    );
};