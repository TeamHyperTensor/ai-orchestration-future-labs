
import { CogIcon, BrainCircuit, Bot, LineChart, MessageSquareText, RefreshCcw } from 'lucide-react';

const features = [
  {
    icon: <CogIcon size={40} className="text-cutover-neonBlue" />,
    title: "AI Runbook Generation",
    description: "Transform unstructured data into executable runbooks in minutes instead of hours."
  },
  {
    icon: <BrainCircuit size={40} className="text-cutover-neonBlue" />,
    title: "Intelligent Optimization",
    description: "AI-powered workflow optimization that identifies bottlenecks and suggests improvements."
  },
  {
    icon: <Bot size={40} className="text-cutover-neonBlue" />,
    title: "Autonomous Agents",
    description: "Self-learning AI agents that execute complex tasks and adapt to changing conditions."
  },
  {
    icon: <LineChart size={40} className="text-cutover-neonBlue" />,
    title: "Predictive Analytics",
    description: "Future-state prediction and planning for proactive operational management."
  },
  {
    icon: <MessageSquareText size={40} className="text-cutover-neonBlue" />,
    title: "Natural Language Processing",
    description: "Human-like interaction with runbooks using natural language commands and queries."
  },
  {
    icon: <RefreshCcw size={40} className="text-cutover-neonBlue" />,
    title: "Continuous Learning",
    description: "Self-improving AI systems that get better with each execution cycle."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Advanced AI Capabilities</h2>
          <p className="text-cutover-lightGray text-xl max-w-3xl mx-auto">
            Our platform combines cutting-edge AI with enterprise-grade orchestration to deliver powerful automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <div 
      className="card group hover:scale-105 transition-all duration-500"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animationFillMode: 'both',
        animation: 'fade-in 0.6s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl mb-3 group-hover:text-cutover-neonBlue transition-colors duration-300">{title}</h3>
      <p className="text-cutover-lightGray">{description}</p>
    </div>
  );
};

export default FeaturesGrid;
