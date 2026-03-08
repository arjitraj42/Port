import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StarParticles = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate random star particles on mount
        const generateStars = () => {
            const newStars = [];
            const numStars = window.innerWidth < 768 ? 50 : 100; // Less stars on mobile for performance

            for (let i = 0; i < numStars; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100, // 0-100vw
                    y: Math.random() * 100, // 0-100vh
                    size: Math.random() * 2 + 1, // 1px to 3px
                    duration: Math.random() * 20 + 20, // 20s to 40s float duration
                    delay: Math.random() * 10,
                    opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6 opacity
                });
            }
            setStars(newStars);
        };

        generateStars();
        window.addEventListener('resize', generateStars);
        return () => window.removeEventListener('resize', generateStars);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                    style={{
                        width: star.size,
                        height: star.size,
                        left: `${star.x}vw`,
                        top: `${star.y}vh`,
                        opacity: star.opacity
                    }}
                    animate={{
                        y: [`${star.y}vh`, `${star.y - 10}vh`, `${star.y}vh`], // Slowly drift up and down
                        opacity: [star.opacity, star.opacity * 2, star.opacity] // Twinkle
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Subtle giant ambient glowing orbs drifting in background */}
            <motion.div
                className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px]"
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[150px]"
                animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
};

export default StarParticles;
