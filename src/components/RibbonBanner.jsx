import React from 'react';

const RibbonBanner = () => {
    const items = [
        "UI/UX", "Web Design", "Interactive Experiences", "Design Systems", "Development"
    ];

    // Duplicate items for seamless continuous scrolling
    const scrollItems = [...items, ...items, ...items, ...items];

    return (
        <div className="relative py-4 -mx-4 sm:mx-0 overflow-hidden transform -rotate-2 select-none z-30">

            {/* Background colored band */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500 shadow-[0_0_30px_rgba(99,102,241,0.4)]"></div>

            {/* Scrolling Content */}
            <div className="relative flex whitespace-nowrap animate-scroll">
                <div className="flex items-center gap-12 px-6">
                    {scrollItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-12">
                            <span className="text-xl md:text-2xl font-black tracking-widest text-white uppercase">{item}</span>
                            <span className="text-white/50 text-2xl">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RibbonBanner;
