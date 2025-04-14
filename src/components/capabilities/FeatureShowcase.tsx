
import React from 'react';
import { Code, LineChart, Bot, Braces, MessagesSquare, Recycle } from 'lucide-react';

const features = [
  {
    id: 'runbook-generation',
    title: 'Runbook Generation',
    description: 'Transform unstructured data into executable runbooks in minutes using our advanced AI models. Simply upload documentation, and our AI will analyze, structure, and generate complete runbooks.',
    icon: <Braces size={40} className="text-cutover-neonBlue" />,
    codeExample: `// Example Runbook Generation API
const generateRunbook = async (data) => {
  const response = await api.post('/ai/generate-runbook', {
    unstructuredData: data,
    format: 'executable',
    includeValidation: true
  });
  return response.data.runbook;
};`
  },
  {
    id: 'optimization-engine',
    title: 'Optimization Engine',
    description: 'Our AI optimization engine analyzes your runbooks to identify bottlenecks, suggest improvements, and predict potential issues before they occur.',
    icon: <LineChart size={40} className="text-cutover-neonBlue" />,
    codeExample: `// Example Optimization Analysis
const analyzeWorkflow = async (runbookId) => {
  const analysis = await api.get('/ai/analyze', {
    params: { runbookId, depth: 'comprehensive' }
  });
  return {
    bottlenecks: analysis.data.bottlenecks,
    suggestions: analysis.data.suggestions,
    predictedImprovements: analysis.data.metrics
  };
};`
  },
  {
    id: 'autonomous-agents',
    title: 'Autonomous Agents',
    description: 'Deploy self-learning AI agents that can execute complex tasks, adapt to changing conditions, and learn from past executions.',
    icon: <Bot size={40} className="text-cutover-neonBlue" />,
    codeExample: `// Deploying an Autonomous Agent
const deployAgent = async (config) => {
  const agent = await api.post('/agents/deploy', {
    capabilities: ['dataProcessing', 'errorHandling'],
    learningMode: 'active',
    runbookAccess: ['production-recovery', 'cloud-migration']
  });
  return agent.data.agentId;
};`
  },
  {
    id: 'future-capabilities',
    title: 'Natural Language Processing',
    description: 'Interact with your runbooks using natural language commands, queries, and instructions for a more intuitive operational experience.',
    icon: <MessagesSquare size={40} className="text-cutover-neonBlue" />,
    codeExample: `// Natural Language Query Example
const queryRunbook = async (question) => {
  const response = await api.post('/ai/query', {
    naturalLanguage: question,
    context: 'disaster-recovery',
    format: 'conversational'
  });
  return response.data.answer;
};`
  }
];

const FeatureShowcase = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            className={`flex flex-col lg:flex-row items-center gap-10 mb-32 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block p-3 bg-cutover-neonBlue/10 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p className="text-cutover-lightGray text-lg">{feature.description}</p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="glass-panel p-4 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between mb-2 px-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-cutover-lightGray">main.js</span>
                </div>
                <pre className="language-javascript overflow-x-auto p-4 text-sm font-roboto-mono bg-cutover-darkBlue/70 rounded">
                  <code>{feature.codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcase;
