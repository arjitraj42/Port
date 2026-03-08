import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();

    // Apply spring physics for smoother progress bar filling
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 right-0 w-1.5 md:w-2 h-full bg-white/5 z-[90] origin-top mix-blend-screen overflow-hidden">
            <motion.div
                className="w-full h-full bg-gradient-to-b from-purple-500 via-teal-400 to-purple-600 origin-top shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                style={{ scaleY }}
            />
        </div>
    );
};

export default ScrollIndicator;
