import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Terminal, Cpu } from 'lucide-react';

const OrbitalTech = () => {
    const orbitRadius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 250;

    const icons = [
        { Icon: Code2, color: "text-blue-400" },
        { Icon: Database, color: "text-green-400" },
        { Icon: Layout, color: "text-purple-400" },
        { Icon: Server, color: "text-red-400" },
        { Icon: Terminal, color: "text-yellow-400" },
        { Icon: Cpu, color: "text-teal-400" }
    ];

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 hidden lg:flex items-center justify-center">

            {/* The rotating container */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* 
                  Plot icons randomly or evenly on the circumference.
                  We have 6 icons, so 360 / 6 = 60 degrees apart.
                */}
                {icons.map((item, index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const x = Math.cos(angle) * orbitRadius;
                    const y = Math.sin(angle) * orbitRadius;

                    return (
                        <motion.div
                            key={index}
                            className={`absolute flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 ${item.color} shadow-[0_0_20px_rgba(255,255,255,0.05)]`}
                            style={{ x, y }}
                            // Counter-rotate the individual icons so they always stay upright
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        >
                            <item.Icon size={32} strokeWidth={1.5} />
                        </motion.div>
                    );
                })}

                {/* Orbital Ring lines just for aesthetics */}
                <div className="absolute rounded-full border border-white/5" style={{ width: orbitRadius * 2, height: orbitRadius * 2 }}></div>
                <div className="absolute rounded-full border border-dashed border-white/5" style={{ width: orbitRadius * 2 + 100, height: orbitRadius * 2 + 100 }}></div>

            </motion.div>
        </div>
    );
};

export default OrbitalTech;
