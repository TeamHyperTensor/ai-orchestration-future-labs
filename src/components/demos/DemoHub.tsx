
import React, { useState } from 'react';
import { Search, MessageSquare, FileCode, LineChart, Filter } from 'lucide-react';

const demoCategories = ["All", "AI Chat", "Runbook Builder", "Optimization"];

const demos = [
  {
    id: 'ai-chat',
    title: 'AI Conversation Interface',
    description: 'Experience our natural language processing capabilities through an interactive chat interface.',
    category: 'AI Chat',
    image: 'bg-gradient-to-br from-blue-500/20 to-purple-600/20',
    icon: <MessageSquare size={36} className="text-cutover-neonBlue" />
  },
  {
    id: 'runbook-builder',
    title: 'Runbook Builder',
    description: 'Create and customize AI-powered runbooks with our drag-and-drop interface.',
    category: 'Runbook Builder',
    image: 'bg-gradient-to-br from-green-500/20 to-blue-600/20',
    icon: <FileCode size={36} className="text-cutover-neonBlue" />
  },
  {
    id: 'optimization-demo',
    title: 'Workflow Optimization',
    description: 'See how our AI analyzes and optimizes complex workflows in real-time.',
    category: 'Optimization',
    image: 'bg-gradient-to-br from-orange-500/20 to-red-600/20',
    icon: <LineChart size={36} className="text-cutover-neonBlue" />
  },
  {
    id: 'nlp-queries',
    title: 'Natural Language Queries',
    description: 'Query your runbooks and operations using natural language.',
    category: 'AI Chat',
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20',
    icon: <MessageSquare size={36} className="text-cutover-neonBlue" />
  },
  {
    id: 'parameter-tuning',
    title: 'Parameter Tuning Simulator',
    description: 'Adjust parameters and see real-time performance impacts on your workflows.',
    category: 'Optimization',
    image: 'bg-gradient-to-br from-teal-500/20 to-blue-600/20',
    icon: <LineChart size={36} className="text-cutover-neonBlue" />
  },
  {
    id: 'template-library',
    title: 'Runbook Template Library',
    description: 'Browse and customize pre-built AI-generated runbook templates.',
    category: 'Runbook Builder',
    image: 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20',
    icon: <FileCode size={36} className="text-cutover-neonBlue" />
  }
];

const DemoHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredDemos = demos.filter(demo => {
    const matchesSearch = demo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          demo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || demo.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="pb-20">
      <div className="mb-10 glass-panel p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cutover-lightGray" size={18} />
          <input
            type="text"
            placeholder="Search demos..."
            className="w-full bg-cutover-darkBlue/50 rounded-md pl-10 pr-4 py-2 border border-cutover-white/10 focus:border-cutover-neonBlue transition-colors focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter size={18} className="text-cutover-lightGray" />
          <div className="flex gap-2 overflow-x-auto flex-nowrap pb-2 md:pb-0 w-full md:w-auto">
            {demoCategories.map(category => (
              <button
                key={category}
                className={`px-4 py-1 rounded-full whitespace-nowrap text-sm transition-colors ${
                  selectedCategory === category 
                    ? 'bg-cutover-neonBlue/20 text-cutover-neonBlue border border-cutover-neonBlue/50'
                    : 'bg-cutover-darkBlue/30 text-cutover-lightGray border border-cutover-white/10 hover:border-cutover-neonBlue/30'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDemos.map(demo => (
          <div 
            key={demo.id}
            className="card hover:translate-y-[-8px] transition-all duration-300 group overflow-hidden"
          >
            <div className={`h-48 w-full rounded-t-lg ${demo.image} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                {demo.icon}
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="bg-cutover-darkBlue/70 text-cutover-lightGray text-xs px-3 py-1 rounded-full">
                  {demo.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl mb-3 group-hover:text-cutover-neonBlue transition-colors">
                {demo.title}
              </h3>
              <p className="text-cutover-lightGray mb-6">
                {demo.description}
              </p>
              <button className="btn-primary w-full">
                Launch Demo
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredDemos.length === 0 && (
        <div className="text-center py-20">
          <p className="text-cutover-lightGray text-lg">No demos found matching your criteria.</p>
          <button 
            className="mt-4 text-cutover-neonBlue hover:underline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};

export default DemoHub;
