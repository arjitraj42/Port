import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Download, X } from 'lucide-react';

const CVSection = () => {
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);

    // Provide a valid path to your actual CV PDF here
    const cvUrl = "/Arjit_CV.pdf";

    return (
        <section id="cv" className="relative py-24 px-6 lg:px-16 flex items-center justify-center overflow-hidden bg-[#0a0a0a] border-y border-white/5">
            {/* Background Decor */}
            <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Curriculum Vitae
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore my professional background, skills, and experience in detail. You can view it directly here or download a copy for your records.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <button
                        onClick={() => setIsCvModalOpen(true)}
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg group w-full sm:w-auto min-w-[200px]"
                    >
                        <Eye size={22} className="group-hover:text-blue-600 transition-colors" />
                        <span>View CV</span>
                    </button>

                    <a
                        href={cvUrl}
                        download="Arjit_Developer_CV.pdf"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all hover:scale-105 hover:border-white/50 w-full sm:w-auto min-w-[200px]"
                    >
                        <Download size={22} />
                        <span>Download CV</span>
                    </a>
                </motion.div>
            </div>

            {/* CV Preview Modal */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence>
                    {isCvModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
                        >
                            {/* Dimmed Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                                onClick={() => setIsCvModalOpen(false)}
                            ></motion.div>

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative z-10 w-full max-w-5xl h-[85vh] bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#1a1a1a] shrink-0">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Eye size={20} className="text-blue-400" />
                                        CV Preview
                                    </h3>

                                    <div className="flex items-center gap-4">
                                        {/* Quick Download Header Button */}
                                        <a
                                            href={cvUrl}
                                            download="Arjit_Developer_CV.pdf"
                                            className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <Download size={16} />
                                            Download
                                        </a>

                                        <button
                                            onClick={() => setIsCvModalOpen(false)}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* PDF Viewer Body */}
                                <div className="relative flex-grow w-full bg-[#0a0a0a] flex items-center justify-center">
                                    {/* Using object tag as a native way to display PDFs with styling control */}
                                    <object
                                        data={cvUrl}
                                        type="application/pdf"
                                        className="w-full h-full overflow-auto"
                                    >
                                        {/* Fallback for browsers that don't support inline PDFs */}
                                        <div className="flex flex-col items-center justify-center p-8 text-center h-full">
                                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                                <Download size={32} className="text-gray-400" />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-4">PDF viewer preview not available</h4>
                                            <p className="text-gray-400 mb-8 max-w-md">
                                                It appears your browser doesn't support embedding PDFs directly. You can still download the file to view it locally.
                                            </p>
                                            <a
                                                href={cvUrl}
                                                download="Arjit_Developer_CV.pdf"
                                                className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-colors"
                                            >
                                                Download PDF Instead
                                            </a>
                                        </div>
                                    </object>
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

export default CVSection;
