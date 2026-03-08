import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 relative z-10 px-6 overflow-hidden">

            {/* Background large subtle text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-5 pointer-events-none select-none overflow-hidden w-full">
                <h2 className="text-[12vw] font-black leading-none whitespace-nowrap text-white text-outline">
                    ABOUT DEVELOPER
                </h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

                {/* Left Side: Large Bold Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-white mb-6">
                        Building<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                            Modern Web
                        </span><br />
                        Experiences.
                    </h2>
                </motion.div>

                {/* Right Side: Description */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 space-y-6 text-gray-300 text-lg md:text-xl font-light leading-relaxed"
                >
                    <p>
                        Hi, I'm Arjit. I’m a developer passionate about crafting high-end interactive experiences, focusing heavily on the <strong className="text-white">MERN stack</strong>.
                    </p>
                    <p>
                        Beyond creating beautiful, buttery-smooth frontend interfaces, my interests dive deep into the world of <strong className="text-white">Cyber Security</strong> and <strong className="text-white">Networking</strong>. I believe great products aren't just fast and beautiful—they are secure by design.
                    </p>
                    <div className="pt-8">
                        <a href="#projects" className="inline-block border-b-2 border-teal-500 pb-1 text-white font-bold hover:text-teal-400 transition-colors">
                            Discover My Work ↗
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
