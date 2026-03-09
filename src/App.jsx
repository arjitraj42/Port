import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FloatingAvatar from './components/FloatingAvatar';
import Hero from './components/Hero';
import RibbonBanner from './components/RibbonBanner';
import About from './components/About';
import CVSection from './components/CVSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Training from './components/Training';
import Contact from './components/Contact';
import IntroSequence from './components/IntroSequence';
import CustomCursor from './components/CustomCursor';
import ScrollIndicator from './components/ScrollIndicator';
import StarParticles from './components/StarParticles';

function App() {
    const [isIntroComplete, setIsIntroComplete] = useState(false);

    return (
        <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-teal-500/30 overflow-x-hidden font-sans cursor-none">
            <CustomCursor />
            <ScrollIndicator />
            <StarParticles />

            {/* Cinematic Overlay Gate */}
            {!isIntroComplete && <IntroSequence onComplete={() => setIsIntroComplete(true)} />}

            {/* Main Portfolio Content */}
            <div className={`transition-opacity duration-1000 ${isIntroComplete ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden pointer-events-none'}`}>
                <Navbar />
                <main className="relative w-full">
                    <Hero />
                    <RibbonBanner />
                    <About />
                    <Skills />
                    <CVSection />
                    <Projects />
                    <Certificates />
                    <Training />
                    <Contact />
                </main>
            </div>
        </div>
    );
}

export default App;
