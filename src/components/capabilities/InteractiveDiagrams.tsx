
import React from 'react';
import { Bot, BrainCircuit, MessagesSquare, GitCompare } from 'lucide-react';

const InteractiveDiagrams = () => {
  return (
    <section className="py-20 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Interactive Diagrams</h2>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Explore visual representations of our AI technologies and how they work together to power the future of orchestration.
          </p>
        </div>
        
        <div className="glass-panel p-8 rounded-xl mb-16">
          <h3 className="text-xl mb-6 text-center">AI Agent Architecture</h3>
          <div className="relative h-[400px] w-full">
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-gradient p-5 rounded-full shadow-glow">
              <BrainCircuit size={50} className="text-cutover-white" />
            </div>
            
            {/* Connected Nodes */}
            <div className="absolute top-[20%] left-[25%] bg-cutover-darkBlue/80 p-4 rounded-lg border border-cutover-neonBlue/30">
              <div className="flex items-center gap-3 mb-2">
                <Bot size={24} className="text-cutover-neonBlue" />
                <h4 className="text-lg font-medium">Autonomous Execution</h4>
              </div>
              <p className="text-cutover-lightGray text-sm">Self-governing task execution with adaptive learning capabilities</p>
            </div>
            
            <div className="absolute top-[20%] right-[25%] bg-cutover-darkBlue/80 p-4 rounded-lg border border-cutover-neonBlue/30">
              <div className="flex items-center gap-3 mb-2">
                <GitCompare size={24} className="text-cutover-neonBlue" />
                <h4 className="text-lg font-medium">Continuous Improvement</h4>
              </div>
              <p className="text-cutover-lightGray text-sm">Iterative optimization based on historical performance data</p>
            </div>
            
            <div className="absolute bottom-[20%] left-[25%] bg-cutover-darkBlue/80 p-4 rounded-lg border border-cutover-neonBlue/30">
              <div className="flex items-center gap-3 mb-2">
                <MessagesSquare size={24} className="text-cutover-neonBlue" />
                <h4 className="text-lg font-medium">Natural Language Interface</h4>
              </div>
              <p className="text-cutover-lightGray text-sm">Human-like interaction through conversational AI</p>
            </div>
            
            <div className="absolute bottom-[20%] right-[25%] bg-cutover-darkBlue/80 p-4 rounded-lg border border-cutover-neonBlue/30">
              <div className="flex items-center gap-3 mb-2">
                <BrainCircuit size={24} className="text-cutover-neonBlue" />
                <h4 className="text-lg font-medium">Predictive Analysis</h4>
              </div>
              <p className="text-cutover-lightGray text-sm">Forward-looking insights based on operational patterns</p>
            </div>
            
            {/* Connection Lines (CSS) using pseudo-elements would be implemented with custom CSS */}
            <svg className="absolute inset-0 w-full h-full z-[-1]" xmlns="http://www.w3.org/2000/svg">
              <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#00F5FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" />
              <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="#00F5FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" />
              <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#00F5FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" />
              <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#00F5FF" strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.6" />
            </svg>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">Explore More Diagrams</button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDiagrams;
