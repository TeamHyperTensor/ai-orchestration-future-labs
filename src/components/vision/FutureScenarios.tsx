
import React, { useState } from 'react';
import { BrainCircuit, Bot, LineChart, Clock, ArrowRight } from 'lucide-react';

const timelineItems = [
  {
    year: 2023,
    title: "AI-Generated Runbooks",
    description: "Introduction of the first AI-powered runbook generation capabilities, reducing creation time by 70%.",
    current: false,
    completed: true
  },
  {
    year: 2024,
    title: "Agentic AI Integration",
    description: "Launch of self-learning AI agents that can execute complex tasks and adapt to changing conditions.",
    current: true,
    completed: false
  },
  {
    year: 2025,
    title: "Autonomous Operations Framework",
    description: "Development of a comprehensive framework for autonomous operational management with human oversight.",
    current: false,
    completed: false
  },
  {
    year: 2026,
    title: "Predictive Orchestration",
    description: "AI systems that can predict and prevent operational issues before they occur, reducing incidents by 85%.",
    current: false,
    completed: false
  },
  {
    year: 2028,
    title: "Cross-Industry Neural Network",
    description: "A shared intelligence layer that learns from operations across industries, creating universal best practices.",
    current: false,
    completed: false
  },
  {
    year: 2030,
    title: "Symbiotic Enterprise Systems",
    description: "True human-AI symbiosis where enterprise systems continuously evolve and improve without manual intervention.",
    current: false,
    completed: false
  }
];

const scenarios = [
  {
    id: "autonomous-recovery",
    title: "Autonomous Disaster Recovery",
    description: "AI agents that can detect, diagnose, and recover from system failures without human intervention, reducing recovery time from hours to minutes.",
    icon: <BrainCircuit size={40} className="text-cutover-neonBlue" />,
    image: "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
  },
  {
    id: "augmented-orchestration",
    title: "Augmented Orchestration",
    description: "Human operators with AI co-pilots that anticipate needs, suggest optimizations, and handle routine tasks automatically.",
    icon: <Bot size={40} className="text-cutover-neonBlue" />,
    image: "bg-gradient-to-br from-green-500/20 to-blue-600/20"
  },
  {
    id: "predictive-enterprise",
    title: "The Predictive Enterprise",
    description: "Operations that continuously model future states and preemptively adjust to maintain optimal performance and prevent issues.",
    icon: <LineChart size={40} className="text-cutover-neonBlue" />,
    image: "bg-gradient-to-br from-purple-500/20 to-pink-600/20"
  }
];

const FutureScenarios = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  
  return (
    <section className="py-20 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="mb-4">Timeline & Future Scenarios</h2>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Explore our vision for the evolution of AI orchestration technology and the transformative 
            scenarios it will enable.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative mb-32">
          <div className="absolute top-8 left-0 right-0 h-1 bg-cutover-white/10"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {timelineItems.map((item, index) => (
              <div key={item.year} className="relative pt-16 px-2">
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 
                  ${item.completed ? 'bg-cutover-neonBlue border-cutover-neonBlue' : 
                    item.current ? 'bg-cutover-darkBlue border-cutover-neonBlue' : 
                    'bg-cutover-darkBlue border-cutover-white/30'}`}>
                  {item.current && (
                    <div className="absolute inset-0 bg-cutover-neonBlue/30 rounded-full animate-ping"></div>
                  )}
                </div>
                
                <div className={`text-center ${item.current ? 'text-cutover-neonBlue' : 'text-cutover-white'}`}>
                  <h4 className="text-lg font-bold mb-1">{item.year}</h4>
                  <h3 className="text-md font-medium mb-2">{item.title}</h3>
                  <p className="text-cutover-lightGray text-sm">{item.description}</p>
                  
                  {item.current && (
                    <div className="absolute top-[4px] left-1/2 transform -translate-x-1/2 mt-6 bg-cutover-neonBlue/20 text-cutover-neonBlue text-xs px-2 py-1 rounded-full">
                      Current Focus
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Future Scenarios */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Explore Future Scenarios</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {scenarios.map(scenario => (
              <button
                key={scenario.id}
                className={`px-6 py-3 rounded-full transition-colors flex items-center gap-2 ${
                  activeScenario === scenario.id 
                    ? 'bg-cutover-neonBlue/20 text-cutover-neonBlue border border-cutover-neonBlue/50'
                    : 'bg-cutover-darkBlue/30 text-cutover-lightGray border border-cutover-white/10 hover:border-cutover-neonBlue/30'
                }`}
                onClick={() => setActiveScenario(scenario.id)}
              >
                {activeScenario === scenario.id && (
                  <Clock size={16} className="animate-spin" />
                )}
                {scenario.title}
              </button>
            ))}
          </div>
          
          {scenarios.map(scenario => (
            <div 
              key={scenario.id}
              className={`glass-panel rounded-xl overflow-hidden transition-all duration-500 ${
                activeScenario === scenario.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 hidden'
              }`}
            >
              <div className="flex flex-col lg:flex-row">
                <div className={`lg:w-1/2 h-60 lg:h-auto relative ${scenario.image}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {scenario.icon}
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cutover-neonBlue">
                    {scenario.title}
                  </h3>
                  
                  <p className="text-cutover-lightGray text-lg mb-8">
                    {scenario.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium">Key Technologies:</h4>
                    <ul className="space-y-2 text-cutover-lightGray">
                      <li className="flex gap-2">
                        <ArrowRight size={20} className="text-cutover-neonBlue flex-shrink-0 mt-1" />
                        <span>Advanced neural networks with operational domain expertise</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight size={20} className="text-cutover-neonBlue flex-shrink-0 mt-1" />
                        <span>Self-healing system architecture with predictive capabilities</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight size={20} className="text-cutover-neonBlue flex-shrink-0 mt-1" />
                        <span>Human-AI collaboration frameworks with intuitive interfaces</span>
                      </li>
                    </ul>
                  </div>
                  
                  <button className="btn-primary mt-8">
                    Explore Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-panel p-8 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-4">Share Your Vision</h3>
          <p className="text-cutover-lightGray mb-6">
            We believe in collaborative innovation. Share your ideas for the future of AI orchestration.
          </p>
          <button className="btn-primary">
            Submit Your Ideas
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureScenarios;
