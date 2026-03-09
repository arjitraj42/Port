import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Web3Forms integration - using fetch API directly
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "cbd967c9-4670-4e8e-b55d-cdb24acccc39",
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-32 relative z-10 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">

                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 pr-0 lg:pr-12"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                            GET IN <span className="text-teal-400">TOUCH</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Have a project in mind or just want to say hi? Let's connect and build something amazing together.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white mt-1">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Located at</h4>
                                    <p className="text-gray-400 text-sm">Patna, Bihar, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white mt-1">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email me</h4>
                                    <a href="mailto:arjitraj00@gmailcom" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">arjitraj00@gmailcom</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white mt-1">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">GitHub</h4>
                                    <a href="https://github.com/arjit42" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">github.com/arjit42</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white mt-1">
                                    <Linkedin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/arjitraj42/" target="_blank" rel="noreferrer" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">arjitraj42</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Glassmorphism Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-7/12"
                    >
                        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">

                            {/* Subtle form glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                            <h3 className="text-2xl font-bold text-white mb-8">SEND A MESSAGE</h3>

                            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Name <span className="text-teal-400">*</span></label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Phone No. <span className="text-teal-400">*</span></label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 (555) 000-0000" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email <span className="text-teal-400">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message <span className="text-teal-400">*</span></label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="How can I help you?" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"></textarea>
                                </div>

                                <button type="submit" disabled={status === 'loading'} className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold text-lg tracking-wide hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-teal-400 mt-4 text-center font-medium">
                                        Message sent successfully!
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 mt-4 text-center font-medium">
                                        Failed to send message. Please try again later.
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
