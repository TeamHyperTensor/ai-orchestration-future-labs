
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-primary-gradient opacity-70 z-[-5]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 pt-32 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-block px-4 py-2 rounded-full bg-cutover-white/10 backdrop-blur-sm border border-cutover-white/20">
              <span className="text-cutover-neonBlue font-medium">The future of AI orchestration</span>
            </div>
          </div>
          
          <h1 className="mb-6 animate-fade-in">
            <span className="block">Unlocking the Future of</span>
            <span className="gradient-text">AI Orchestration</span>
          </h1>
          
          <p className="text-cutover-lightGray text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Pioneering human-machine collaboration through AI-driven runbooks that transform how enterprises operate.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/capabilities" className="btn-primary group">
              Explore AI Capabilities
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link to="/demos" className="btn-secondary">
              Interactive Demos
            </Link>
          </div>
          
          {/* Floating elements */}
          <div className="relative mt-20 h-60 md:h-80">
            <div className="absolute left-0 top-0 w-24 h-24 md:w-32 md:h-32 glass-panel rounded-2xl animate-float" style={{animationDelay: '0.3s', transform: 'rotate(-10deg)'}}>
              <div className="w-full h-full flex items-center justify-center text-cutover-neonBlue">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
            </div>
            
            <div className="absolute right-0 bottom-0 w-24 h-24 md:w-32 md:h-32 glass-panel rounded-2xl animate-float" style={{animationDelay: '0.5s', transform: 'rotate(10deg)'}}>
              <div className="w-full h-full flex items-center justify-center text-cutover-purple">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v19" />
                  <path d="M5 8l14 8" />
                  <path d="M5 16l14-8" />
                </svg>
              </div>
            </div>
            
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 glass-panel rounded-full animate-float" style={{animationDelay: '0s'}}>
              <div className="w-full h-full flex items-center justify-center text-cutover-neonBlue">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                  <path d="M12 22.08V12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-glow">
        <span className="text-cutover-white mb-2">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
