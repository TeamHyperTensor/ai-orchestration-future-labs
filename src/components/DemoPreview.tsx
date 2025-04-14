
import { Play, Maximize2 } from 'lucide-react';
import { useState } from 'react';

const DemoPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="py-20 bg-primary-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">See AI Orchestration in Action</h2>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Experience how Cutover's AI capabilities transform complex IT operations with our interactive demos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,245,255,0.2)]">
          {/* Video background with gradient overlay */}
          <div className="relative aspect-video">
            {!isPlaying ? (
              <>
                {/* Thumbnail with play button */}
                <div className="absolute inset-0 bg-cutover-darkBlue flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="AI Orchestration Demo"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cutover-darkBlue/80 to-cutover-purple/50"></div>
                  
                  <button 
                    onClick={handlePlay}
                    className="absolute inset-0 w-full h-full flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-cutover-neonBlue/90 
                      text-cutover-darkBlue group-hover:bg-cutover-neonBlue transition-all duration-300
                      group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]"
                    >
                      <Play size={36} fill="currentColor" />
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Video player */}
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  src="#" // Replace with actual video source
                >
                  Your browser does not support the video tag.
                </video>
              </>
            )}
            
            {/* Fullscreen button */}
            <button
              className="absolute bottom-4 right-4 p-2 rounded-full bg-cutover-darkBlue/50 
                text-cutover-white hover:bg-cutover-neonBlue/80 transition-colors duration-200"
              onClick={handleFullscreen}
            >
              <Maximize2 size={20} />
            </button>
            
            {/* Progress bar (visible when not playing) */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-cutover-white/20">
                <div className="h-full w-1/3 bg-cutover-neonBlue"></div>
              </div>
            )}
          </div>
          
          {/* Demo description */}
          <div className="bg-cutover-darkBlue/90 backdrop-blur-sm py-6 px-8">
            <h4 className="text-cutover-neonBlue mb-2">Runbook Generation Demo</h4>
            <p className="text-cutover-lightGray">
              Watch as our AI transforms unstructured documentation into executable runbooks in minutes, 
              with step-by-step validation and optimization suggestions.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/demos" 
            className="btn-secondary inline-flex items-center"
          >
            View All Demos
            <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;
