import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Building2, GraduationCap, ArrowRight, X } from 'lucide-react';

const Training = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const trainings = [
        {
            id: 1,
            title: "Full Stack Web Development",
            org: "Udemy",
            duration: "6 Months",
            description: "Comprehensive bootcamp covering MongoDB, Express, React, and Node.js. Built multiple real-world projects and RESTful APIs.",
            certificate: {
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
            }
        }


    ];

    const selectedTraining = trainings.find(t => t.id === selectedCert);

    return (
        <section id="training" className="relative min-h-[800px] py-32 px-6 lg:px-16 flex items-center justify-center overflow-hidden bg-[#050505] border-t border-white/5">
            {/* Background Decor */}

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Training
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Full-width Training Display */}
                <div className="w-full flex justify-center">
                    {trainings.map((training) => (
                        <motion.div
                            key={training.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7 }}
                            className="group relative w-full bg-[#111111] border border-white/10 p-8 md:p-12 lg:p-16 rounded-[2rem] hover:border-white/30 transition-all duration-500 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 overflow-hidden"
                        >
                            {/* Inner ambient glow */}
                            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Certificate Preview / Graphic Side */}
                            <div className="w-full lg:w-5/12 relative rounded-[1.5rem] overflow-hidden shrink-0 group-hover:scale-[1.02] transition-transform duration-700">
                                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
                                <img src={training.certificate.image} alt={training.title} className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px] opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full">
                                    <Award size={18} className="text-gray-300" />
                                    <span className="text-gray-200 text-xs font-medium uppercase tracking-wider">Verified Credential</span>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-7/12 flex flex-col justify-center relative z-10">
                                <div className="w-16 h-16 rounded-[1rem] bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                                    <GraduationCap className="text-white" size={32} />
                                </div>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-500 leading-tight">
                                    {training.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 text-base md:text-lg">
                                    <div className="flex items-center gap-3 text-gray-200 font-medium bg-white/10 px-4 py-2 rounded-xl border border-white/20">
                                        <Building2 size={20} />
                                        <span>{training.org}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400 font-medium px-4 py-2">
                                        <Calendar size={20} />
                                        <span>{training.duration}</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
                                    {training.description}
                                </p>

                                <button
                                    onClick={() => setSelectedCert(training.id)}
                                    className="flex items-center gap-4 w-fit px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-all hover:-translate-y-1 group/btn"
                                >
                                    <span>View Official Certificate</span>
                                    <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {selectedTraining && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
                        >
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                                onClick={() => setSelectedCert(null)}
                            ></motion.div>

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative z-10 w-full max-w-5xl bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 shrink-0">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                            {selectedTraining.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">{selectedTraining.org}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Image Frame */}
                                <div className="relative w-full bg-[#111] p-4 md:p-8 flex items-center justify-center overflow-y-auto max-h-[70vh]">
                                    <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
                                    <img
                                        src={selectedTraining.certificate.image}
                                        alt={`${selectedTraining.title} Certificate`}
                                        className="max-w-full h-auto object-contain rounded-lg shadow-2xl relative z-10 border border-white/5"
                                    />
                                    {/* Subtitle tag */}
                                    <div className="absolute bottom-6 right-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                                        <Award className="text-white" size={16} />
                                        <span className="text-white text-xs font-semibold uppercase tracking-wider">Verified Certificate</span>
                                    </div>
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

export default Training;
