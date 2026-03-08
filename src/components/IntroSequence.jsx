import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Terminal } from 'lucide-react';

const IntroSequence = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState('loading'); // loading -> explosion -> avatar -> exit

    // Stage 1: Loading
    useEffect(() => {
        if (stage !== 'loading') return;

        const startLoading = () => {
            let interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setStage('explosion'), 500);
                        return 100;
                    }
                    return Math.min(prev + Math.random() * 15, 100);
                });
            }, 80);
        };
        startLoading();
    }, [stage]);

    // Stage 2: Explosion transition to Avatar
    useEffect(() => {
        if (stage === 'explosion') {
            setTimeout(() => {
                setStage('avatar');
            }, 1000); // 1-second explosion flash
        }
    }, [stage]);

    // Exit transition
    const handleAvatarClick = () => {
        if (stage !== 'avatar') return;
        setStage('exit');
        setTimeout(() => {
            onComplete();
        }, 1200); // Wait for dissolve out
    };

    return (
        <AnimatePresence>
            {stage !== 'exit' && (
                <motion.div
                    key="intro-wrap"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden"
                >
                    {/* Stage 1: Loading Screen */}
                    <AnimatePresence>
                        {stage === 'loading' && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 1.1, filter: "brightness(2)" }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                {/* Glowing CyberGrid */}
                                <div className="absolute inset-0 pointer-events-none opacity-20"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                                        backgroundSize: '40px 40px',
                                        perspective: '1000px',
                                        transform: 'rotateX(60deg) scale(2) translateY(-20%)',
                                        transformOrigin: 'top center'
                                    }}
                                />
                                <div className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-purple-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] z-10">
                                    {Math.floor(progress)}%
                                </div>
                                <div className="mt-6 text-cyan-400 tracking-[0.4em] text-sm md:text-base font-bold animate-pulse z-10">
                                    SYS_INIT
                                </div>
                                <div className="w-64 md:w-96 h-1 bg-white/10 mt-6 overflow-hidden rounded-full z-10">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Stage 2 Explosion Effect */}
                    <AnimatePresence>
                        {stage === 'explosion' && (
                            <motion.div
                                key="explosion"
                                initial={{ opacity: 0, scale: 0.1 }}
                                animate={{ opacity: 1, scale: 10 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none"
                            >
                                <div className="w-[10vh] h-[10vh] rounded-full bg-cyan-300 blur-xl shadow-[0_0_100px_40px_rgba(168,85,247,0.8)] mix-blend-screen" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Stage 3: Avatar Reveal & Interactive Gate */}
                    <AnimatePresence>
                        {stage === 'avatar' && (
                            <motion.div
                                key="avatar-stage"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 z-30 flex items-center justify-center flex-col"
                            >
                                {/* Giant transparent outline text behind avatar */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.2 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <h1 className="text-[25vw] font-black tracking-widest text-transparent uppercase select-none"
                                        style={{ WebkitTextStroke: '2px rgba(34, 211, 238, 0.5)' }}>
                                        ARJIT
                                    </h1>
                                </motion.div>

                                {/* The zero-gravity wrapper (Interactive) */}
                                <motion.div
                                    className="relative flex justify-center items-center h-[500px] w-full cursor-pointer z-40 group hover:scale-[1.02] transition-transform duration-500"
                                    onClick={handleAvatarClick}
                                    initial={{ y: 50 }}
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {/* Central Aura */}
                                    <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-400/30 transition-colors" />

                                    {/* Concentric Orbit Rings */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border-[1px] border-cyan-500/30 rounded-full pointer-events-none shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] border-[2px] border-dashed border-purple-500/20 rounded-full pointer-events-none"
                                    />

                                    {/* Floating Tech Icons Orbiting */}
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] pointer-events-none flex items-center justify-center">
                                        <div className="absolute top-[-25px] flex items-center justify-center w-[50px] h-[50px] bg-[#0f172a] border border-cyan-400/40 rounded-xl">
                                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><Code className="text-cyan-400" /></motion.div>
                                        </div>
                                    </motion.div>
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] pointer-events-none flex items-center justify-center">
                                        <div className="absolute bottom-[-25px] flex items-center justify-center w-[50px] h-[50px] bg-[#2e1065] border border-purple-400/40 rounded-xl">
                                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><Terminal className="text-purple-400" /></motion.div>
                                        </div>
                                    </motion.div>
                                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] pointer-events-none flex items-center justify-center">
                                        <div className="absolute left-[-25px] flex items-center justify-center w-[50px] h-[50px] bg-[#064e3b] border border-green-400/40 rounded-xl">
                                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}><Database className="text-green-400" /></motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Avatar */}
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.5 }}
                                        className="relative z-20 h-full drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] pointer-events-none"
                                    >
                                        <img
                                            src={new URL('../assets/avatar_removed_bg.png', import.meta.url).href}
                                            alt="Developer"
                                            className="h-full w-auto object-contain filter contrast-110"
                                        />
                                    </motion.div>

                                </motion.div>

                                {/* Glowing instructions */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5, duration: 1 }}
                                    className="absolute bottom-16 text-center z-40 pointer-events-none"
                                >
                                    <p className="text-cyan-400 font-bold tracking-widest text-lg drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse">
                                        CLICK AVATAR TO ENTER
                                    </p>
                                </motion.div>

                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroSequence;
