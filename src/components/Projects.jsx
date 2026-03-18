import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Collab X",
        description: "A platform to communicate and collaboration between startups and corporate teams.",
        tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        image: "/colabx.png",
        github: "https://github.com/arjitraj42/CollabX",
        live: "https://collabx-frontend.onrender.com/"
    },
    {
        title: "EVENTIX",
        description: "A ticket booking platform with dynamic inventory.",
        tech: ["React", "Redux", "Razorpay", "Tailwind", "AWS"],
        image: "/EVENTIX.png",
        github: "https://github.com/arjitraj42/MovieTrix",
        live: "https://eventplatform1.onrender.com/"
    },
    {
        title: "Chit-Chat",
        description: "End-to-end encrypted messaging platform for enterprise teams.",
        tech: ["React", "Express", "WebRTC", "AES-256", "Socket.io"],
        image: "/Chit-Chat.png",
        github: "#",
        live: "https://chit-chat-five-indol.vercel.app/"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative w-full h-[450px] rounded-3xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 shadow-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:border-cyan-400/50 transition-all duration-500"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
            </div>

            {/* Default Content (Visible normally) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-md tracking-tight">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-cyan-500/20 text-cyan-300 text-[11px] rounded-full font-bold uppercase tracking-widest backdrop-blur-md border border-cyan-500/30">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Hover Overlay (Slides up and fades in) */}
            <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-transparent group-hover:border-purple-500/50 rounded-3xl z-10">
                <h3 className="text-3xl font-red font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">{project.title}</h3>

                <p className="text-gray-300 text-sm mb-8 leading-relaxed font-medium">
                    {project.description}
                </p>

                <div className="flex gap-2 justify-center flex-wrap mb-10 w-full">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-red-500/10 text-red-300 text-[10px] rounded-full font-bold uppercase tracking-widest border border-red-500/20">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 w-full">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-sm tracking-widest hover:scale-[1.03] transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                        <ExternalLink size={18} /> LIVE
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 font-bold text-sm tracking-widest hover:scale-[1.03] transition-all flex items-center justify-center gap-2">
                        <Github size={18} /> SOURCE
                    </a>
                </div>
            </div>

            {/* Edge Glow Overlay */}
            <div className="absolute inset-0 border border-transparent group-hover:border-t-cyan-400/50 group-hover:border-b-purple-500/50 rounded-3xl pointer-events-none transition-colors duration-500"></div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="relative min-h-screen py-32 bg-[#050505] overflow-hidden border-t border-white/5 flex flex-col justify-center">

            {/* Glowing Particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-blue-400/40 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * -100 - 50],
                            x: [0, Math.random() * 50 - 25],
                            opacity: [0, Math.random() + 0.3, 0],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                    />
                ))}
            </div>

            {/* Massive Ambient Background Glows */}
            <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
                        Explore a curated collection of my most recent work, showcasing robust full-stack engineering combined with high-performance immersive user interfaces.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.7)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
