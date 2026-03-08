import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Track raw mouse position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Apply spring physics for smooth trailing effect
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 20); // offset by half width/height (40px / 2) to center
            cursorY.set(e.clientY - 20);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        const handleElementHover = (e) => {
            const target = e.target;
            // Check if the target or any of its closest parents are interactive
            const isClickable = target.closest('a, button, [role="button"], input, select, textarea');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleElementHover);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Hide default cursor globally when this mounts
        document.body.style.cursor = 'none';

        // Ensure interactive elements style don't override generic cursor if possible,
        // but typically a in react we might need to apply cursor-none to interactive elements too.
        // For broad strokes, we rely on tailwind `cursor-none` on body or App.

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleElementHover);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.body.style.cursor = 'auto'; // restore on unmount
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-screen flex items-center justify-center transition-transform duration-300 ease-out"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
            }}
        >
            {/* Center Core: Glowing rotated square (diamond) */}
            <div className={`absolute w-2 h-2 rotate-45 transition-colors duration-300 ${isHovering ? 'bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)]' : 'bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,1)]'}`}></div>

            {/* Cyberpunk Outer Frame: Corner brackets rotating slowly */}
            <motion.div
                animate={{ rotate: isHovering ? [0, 180, 360] : [0, 90, 180, 270, 360] }}
                transition={{ duration: isHovering ? 2 : 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full text-purple-500"
            >
                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-colors duration-300 ${isHovering ? 'border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)]' : 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]'}`}></div>
                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 transition-colors duration-300 ${isHovering ? 'border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)]' : 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]'}`}></div>
                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 transition-colors duration-300 ${isHovering ? 'border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)]' : 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]'}`}></div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-colors duration-300 ${isHovering ? 'border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.8)]' : 'border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]'}`}></div>
            </motion.div>

            {/* Inner Pulsing Radar Diamond */}
            <motion.div
                animate={{
                    scale: isHovering ? [1, 1.2, 1] : [0.6, 1.4, 0.6],
                    opacity: isHovering ? [0.5, 1, 0.5] : [0.2, 0.8, 0.2]
                }}
                transition={{ duration: isHovering ? 0.8 : 1.5, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute rotate-45 transition-all duration-300 ${isHovering ? 'w-8 h-8 border-[1.5px] border-purple-500/80 shadow-[inset_0_0_15px_rgba(168,85,247,0.5)]' : 'w-6 h-6 border border-teal-500/60'}`}
            ></motion.div>
        </motion.div>
    );
};

export default CustomCursor;
