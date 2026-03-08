import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/40 border-b border-white/10"
        >
            <div className="text-2xl font-bold tracking-tighter text-white">
                ARJIT<span className="text-purple-500">.</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {['Home', 'About', 'Services', 'Projects'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">
                        {item}
                    </a>
                ))}
            </div>

            <a href="#contact" className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
                Let's Connect
            </a>
        </motion.nav>
    );
};

export default Navbar;
