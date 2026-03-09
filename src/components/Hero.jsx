import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/portfolio image.png';

const Hero = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#070710]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0 flex items-center justify-center w-full h-full"
            >
                {/* Deep Ambient Background Glows matching photo */}
                <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#0a0a1a] to-transparent pointer-events-none"></div>
                <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-indigo-900/30 rounded-full blur-[180px] pointer-events-none"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>

                {/* Giant Outline Background Typography */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 pointer-events-none select-none"
                >
                    <h1 className="text-[18vw] sm:text-[20vw] md:text-[22vw] lg:text-[24vw] font-black tracking-tighter text-transparent uppercase opacity-30"
                        style={{
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)'
                        }}>
                        ARJIT
                    </h1>
                </motion.div>

                {/* Main Content Layout */}
                <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-0 h-full flex flex-col lg:flex-row items-center justify-between">

                    {/* LEFT SIDE: Clean Typography matching photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col justify-center text-left relative z-30"
                    >
                        <motion.div
                            className="mb-6 relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full p-1 bg-gradient-to-tr from-[#8b5cf6] to-[#0ea5e9] shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsImageOpen(true)}
                        >
                            <img
                                src={profileImg}
                                alt="Arjit Raj"
                                className="w-full h-full object-cover rounded-full border-2 border-[#070710] transition-opacity duration-300 group-hover:opacity-90"
                            />
                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </motion.div>
                        <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold text-white mb-2 tracking-tight leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            ARJIT RAJ
                        </h1>
                        <div className="text-2xl md:text-[2rem] lg:text-[2.2rem] font-medium leading-[1.3] mb-12 tracking-wide">
                            <p className="text-[#a855f7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                MERN Stack Developer
                            </p>
                            <p className="text-[#2dd4bf] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pt-1">
                                Cyber Security & Networking
                            </p>
                        </div>

                        <div className="flex">
                            <a href="#projects" className="inline-block px-10 py-[16px] rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#0ea5e9] text-white/90 font-medium text-lg tracking-wide hover:opacity-90 hover:scale-[1.02] transition-all shadow-[0_10px_30px_rgba(139,92,246,0.3)]">
                                View Projects
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: 3D Avatar with floor shadow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="relative w-full lg:w-1/2 h-[50vh] lg:h-full flex justify-center lg:justify-end items-end pb-0 lg:pb-[5vh] z-20"
                    >
                        <div className="relative w-full h-[90%] md:h-[95%] lg:h-[95%] max-w-[600px] flex flex-col items-center justify-end">

                            {/* Floor Pink shadow directly beneath shoes */}
                            <div className="absolute bottom-[2%] lg:bottom-[0%] w-[180px] h-[15px] bg-[#d946ef] rounded-[100%] blur-[12px] opacity-80 z-10"></div>

                            <img
                                src={new URL('../assets/avatar_removed_bg.png', import.meta.url).href}
                                alt="3D Developer Avatar"
                                className="relative z-20 w-auto h-full object-contain filter contrast-[1.10] brightness-[1.05]"
                            />
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            {/* Image Modal Overlay */}
            <AnimatePresence>
                {isImageOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
                        onClick={() => setIsImageOpen(false)}
                    >
                        {/* Close button */}
                        <motion.button
                            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsImageOpen(false);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative max-w-[33vw] min-w-[300px] aspect-square rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.5)] border border-white/10 cursor-default"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
                        >
                            <img
                                src={profileImg}
                                alt="Arjit Raj - Full Size"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
