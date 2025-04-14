
import React from 'react';
import { ClockCountdown, Globe, Zap, Users } from 'lucide-react';

const VisionStatement = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="glass-panel p-8 md:p-12 rounded-xl relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cutover-neonBlue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cutover-purple/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">
              Our Vision for the Future of AI Orchestration
            </h2>
            
            <div className="text-cutover-lightGray text-lg md:text-xl leading-relaxed space-y-6 max-w-5xl mx-auto mb-10">
              <p>
                <span className="text-cutover-white font-semibold">At Cutover</span>, we envision a future where human creativity and AI capabilities 
                unite to solve the most complex operational challenges. Our mission is to pioneer this 
                fusion through intelligent orchestration platforms that empower organizations to achieve 
                unprecedented levels of efficiency, reliability, and innovation.
              </p>
              <p>
                We believe that the next generation of enterprise operations will be defined by 
                <span className="text-cutover-neonBlue"> seamless collaboration between human operators and AI agents</span>, 
                each contributing their unique strengths to create systems that are greater than the sum 
                of their parts.
              </p>
              <p>
                By 2030, we aim to become the foundational layer for all enterprise orchestration, 
                providing the intelligence and automation framework that powers the world's most 
                critical operations across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cutover-neonBlue/10 mb-4">
                  <ClockCountdown size={32} className="text-cutover-neonBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Execution Time</h3>
                <p className="text-cutover-lightGray">Reduce operational execution time by 90% through intelligent automation</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cutover-neonBlue/10 mb-4">
                  <Globe size={32} className="text-cutover-neonBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-cutover-lightGray">Transform enterprise operations in over 10,000 organizations worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cutover-neonBlue/10 mb-4">
                  <Zap size={32} className="text-cutover-neonBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-cutover-lightGray">Pioneer breakthrough AI orchestration techniques that become industry standards</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cutover-neonBlue/10 mb-4">
                  <Users size={32} className="text-cutover-neonBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-cutover-lightGray">Create the world's most effective human-AI collaboration framework</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
