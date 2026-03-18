import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Building2 } from 'lucide-react';

const Certificates = () => {
    const [hoveredExp, setHoveredExp] = useState(null);

    const experiences = [
        {
            id: 1,
            year: "Nov’ 25",
            role: "Cybersecurity Analyst Job Simulation ",
            company: "Forage",
            description: "Cybersecurity",
            certificate: {
                title: "Cybersecurity Analyst",
                org: "Forage",
                date: "Nov 2025",
                image: "/Cybersec.png"
            }
        },
        {
            id: 2,
            year: "Oct' 25",
            role: "Privacy and Security in Online Social Media by NPTEL",
            company: "NPTEL",
            description: "A comprehensive course covering the technical and social aspects of protecting user data and mitigating security risks on modern social platforms.",
            certificate: {
                title: "Privacy and Security in Online Social Media",
                org: "NPTEL",
                date: "Oct 2025",
                image: "/NPTEL.png"
            }
        },
        {
            id: 3,
            year: "Sep' 23",
            role: "Legacy Responsive Web Design V8.0",
            company: "freeCodeCamp",
            description: "Built responsive, interactive user interfaces using React and modern CSS frameworks like Tailwind for high-profile clients.",
            certificate: {
                title: "Legacy Responsive Web Design V8.0",
                org: "freeCodeCamp",
                date: "Sep 2023",
                image: "/freecode.png"
            }
        }
    ];

    const hoveredExpData = experiences.find(exp => exp.id === hoveredExp);

    return (
        <section id="certificate" className="relative min-h-[800px] py-32 px-6 lg:px-16 flex items-center justify-center overflow-hidden bg-[#030303] border-t border-white/5">

            {/* Minimal Background Glows */}
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Certificates</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.5)]"></div>
                </motion.div>

                {/* Timeline Layout */}
                <div className="relative w-full max-w-3xl mx-auto border-l-2 border-white/10 pl-8 md:pl-12 space-y-16">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="relative group"
                            onMouseEnter={() => setHoveredExp(exp.id)}
                            onMouseLeave={() => setHoveredExp(null)}
                        >
                            {/* Animated Timeline Node */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 rounded-full bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.5)] border-4 border-[#030303] group-hover:bg-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-all duration-500 z-20"></div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative flex flex-col gap-6 w-full bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl cursor-pointer hover:-translate-y-2 hover:border-teal-400/50 hover:shadow-[0_15px_40px_rgba(45,212,191,0.1)] transition-all duration-500 z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-300 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-purple-400 font-semibold tracking-wide">
                                            <Building2 size={18} />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-fit shrink-0">
                                        <Calendar size={16} className="text-gray-400" />
                                        <span className="text-gray-300 font-mono text-sm tracking-widest font-bold">
                                            {exp.year}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed font-medium">
                                    {exp.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Centralized Global Certificate Modal overlay via React Portal to escape overflow-hidden constraints */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {hoveredExpData && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none"
                        >
                            {/* Darkened Blur Backdrop */}
                            <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-md"></div>

                            {/* Cinematic Floating Particles */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-teal-400/60 rounded-full blur-[2px] shadow-[0_0_10px_rgba(45,212,191,0.8)]"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                        }}
                                        animate={{
                                            y: [0, -150],
                                            opacity: [0, 1, 0],
                                            scale: [0, 1.5, 0]
                                        }}
                                        transition={{
                                            duration: Math.random() * 3 + 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Floating Certificate Card (takes about exactly 1/3 of typical ultra-wide or 1/2 of standard desktop) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.7, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 150 }}
                                className="relative z-10 w-[90%] md:w-[60%] lg:w-[35%] max-w-[600px] bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.4)]"
                            >
                                {/* Glassmorphism Inner Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/20 z-0 pointer-events-none"></div>

                                {/* Neon Glow Edges */}
                                <div className="absolute inset-0 border-[2px] border-transparent rounded-3xl pointer-events-none" style={{ boxShadow: 'inset 0 0 30px rgba(45,212,191,0.2)' }}></div>

                                {/* Certificate Image Banner */}
                                <div className="relative z-10 h-[280px] w-full bg-black overflow-hidden border-b border-white/10">
                                    <img
                                        src={hoveredExpData.certificate.image}
                                        alt="Certificate"
                                        className="w-full h-full object-contain p-4"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                        className="absolute top-5 right-5 bg-black/50 backdrop-blur-xl p-3.5 rounded-full border border-teal-500/50 text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.6)]"
                                    >
                                        <Award size={32} />
                                    </motion.div>
                                </div>

                                {/* Certificate Details */}
                                <div className="relative z-10 p-8 pt-4">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-500/20 to-purple-500/20 text-teal-300 text-xs font-black uppercase tracking-widest rounded-full border border-teal-500/30 mb-5 shadow-[0_0_15px_rgba(45,212,191,0.2)]"
                                    >
                                        Verified Credentials
                                    </motion.div>

                                    <motion.h4
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6 leading-tight drop-shadow-lg"
                                    >
                                        {hoveredExpData.certificate.title}
                                    </motion.h4>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex justify-between items-center text-base font-bold bg-white/5 p-4 rounded-2xl border border-white/10"
                                    >
                                        <span className="text-purple-400 flex items-center gap-2">
                                            <Building2 size={18} />
                                            {hoveredExpData.certificate.org}
                                        </span>
                                        <span className="text-teal-400 font-mono flex items-center gap-2 bg-teal-500/10 px-3 py-1.5 rounded-lg border border-teal-500/20">
                                            <Calendar size={16} />
                                            {hoveredExpData.certificate.date}
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}


        </section>
    );
};

export default Certificates;
