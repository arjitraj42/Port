import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FloatingAvatar = () => {
    const { scrollYProgress } = useScroll(); // Use progress (0 to 1) for easier mapping across the whole page
    const [isMounted, setIsMounted] = useState(false);
    const [avatarSrc, setAvatarSrc] = useState('/avatar.png');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Scroll Logic thresholds (0 is top, 1 is bottom)
    // 0.00 -> 0.15: Hero Section (Idle / Arms Crossed, right side)
    // 0.15 -> 0.30: About Section Transition (Walking left -> Pointing Right)
    // 0.30 -> 0.50: Skills Section (Gesturing at floating skills)
    // 0.50 -> 0.70: Projects Section (Jumping slightly and pointing)
    // 0.70 -> 0.90: Experience Section (Looking upwards at timeline)
    // 0.90 -> 1.00: Contact Section (Waving)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.15) {
            setAvatarSrc('/avatar.png'); // Default idle
        } else if (latest >= 0.15 && latest < 0.25) {
            setAvatarSrc('/avatar_walk_left.png'); // Transitioning
        } else if (latest >= 0.25 && latest < 0.40) {
            setAvatarSrc('/avatar_point_right.png'); // About
        } else if (latest >= 0.40 && latest < 0.55) {
            setAvatarSrc('/avatar_gesture.png'); // Skills
        } else if (latest >= 0.55 && latest < 0.75) {
            setAvatarSrc('/avatar_jump.png'); // Projects
        } else if (latest >= 0.75 && latest < 0.92) {
            setAvatarSrc('/avatar_lookup.png'); // Experience
        } else {
            setAvatarSrc('/avatar_wave.png'); // Contact
        }
    });

    // -------------------------------------------------------------
    // Complex Scroll Animations mapped to overall page progress 
    // -------------------------------------------------------------

    // Scale: Big on Hero, smaller for rest of the page guide
    const scale = useTransform(
        scrollYProgress,
        [0, 0.10, 1],
        [1, 0.40, 0.40]
    );

    // X Position: 
    // Start Right (Hero), Walk Left to guide, then stay relative.
    const x = useTransform(
        scrollYProgress,
        [0, 0.10, 0.20, 0.25, 0.40, 0.55, 0.75, 0.95],
        ["15vw", "38vw", "30vw", "-35vw", "-35vw", "35vw", "-30vw", "35vw"]
    );

    // Y Position:
    // Move slightly up and down based on the section
    const y = useTransform(
        scrollYProgress,
        [0, 0.10, 1],
        ["0vh", "30vh", "30vh"] // Keep lower for the rest of the flow
    );

    // Rotation: Slight tilts to give life
    const rotate = useTransform(
        scrollYProgress,
        [0, 0.15, 0.25, 0.40, 0.55, 0.75, 0.95],
        [0, 5, -5, 0, 10, -10, 0]
    );

    // Opacity: Hide on Hero section so it doesn't overlap the Fireball character
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.05, 0.10],
        [0, 0, 1]
    );

    if (!isMounted) return null;

    return (
        <motion.div
            style={{
                scale,
                x,
                y,
                rotate,
                opacity
            }}
            className="fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-[100] w-80 h-80 md:w-[450px] md:h-[450px] pointer-events-none"
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full"
            >
                <img
                    src={avatarSrc}
                    alt="Interactive 3D Developer Avatar Guide"
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
            </motion.div>
        </motion.div>
    );
};

export default FloatingAvatar;
