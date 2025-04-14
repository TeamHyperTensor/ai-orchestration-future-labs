
import React, { useState } from 'react';
import { Calendar, Tag, User, Search, ChevronRight } from 'lucide-react';

const categories = [
  "All", 
  "AI Innovation", 
  "Future of Orchestration", 
  "Agentic AI", 
  "Technical Deep Dives", 
  "Industry Insights"
];

const blogPosts = [
  {
    id: 'post-1',
    title: 'The Rise of Agentic AI in Enterprise Orchestration',
    excerpt: 'How autonomous AI agents are transforming the way enterprises manage complex operations and workflows.',
    category: 'Agentic AI',
    author: 'Dr. Sophia Chen',
    date: 'April 10, 2025',
    readTime: '8 min read',
    image: 'bg-gradient-to-br from-blue-500/20 to-purple-600/20',
    featured: true
  },
  {
    id: 'post-2',
    title: 'Building Resilient Runbooks with AI-Powered Error Handling',
    excerpt: 'Techniques for designing self-healing runbooks that can automatically detect and recover from failures.',
    category: 'Technical Deep Dives',
    author: 'Marcus Johnson',
    date: 'April 5, 2025',
    readTime: '6 min read',
    image: 'bg-gradient-to-br from-green-500/20 to-blue-600/20'
  },
  {
    id: 'post-3',
    title: 'The Future of Human-AI Collaboration in IT Operations',
    excerpt: 'Exploring the evolving relationship between human operators and AI assistants in managing critical IT systems.',
    category: 'Future of Orchestration',
    author: 'Aisha Patel',
    date: 'March 28, 2025',
    readTime: '10 min read',
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20'
  },
  {
    id: 'post-4',
    title: 'Leveraging Natural Language Processing for Operational Excellence',
    excerpt: 'How NLP is transforming the way teams interact with complex systems through conversational interfaces.',
    category: 'AI Innovation',
    author: 'James Wilson',
    date: 'March 22, 2025',
    readTime: '7 min read',
    image: 'bg-gradient-to-br from-yellow-500/20 to-orange-600/20'
  },
  {
    id: 'post-5',
    title: 'Case Study: How Financial Services Firm Reduced Incident Response Time by 70%',
    excerpt: 'An in-depth look at how a major financial institution transformed their incident management with AI-powered runbooks.',
    category: 'Industry Insights',
    author: 'Elena Rodriguez',
    date: 'March 15, 2025',
    readTime: '12 min read',
    image: 'bg-gradient-to-br from-red-500/20 to-purple-600/20'
  },
  {
    id: 'post-6',
    title: 'The Technical Architecture Behind Autonomous Orchestration Agents',
    excerpt: 'A deep dive into the systems and technologies that power our self-learning orchestration agents.',
    category: 'Technical Deep Dives',
    author: 'Dr. Robert Chang',
    date: 'March 8, 2025',
    readTime: '15 min read',
    image: 'bg-gradient-to-br from-teal-500/20 to-blue-600/20'
  }
];

const BlogOverview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section className="pb-20">
      {/* Search and Filter */}
      <div className="mb-10 glass-panel p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-auto flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cutover-lightGray" size={18} />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-cutover-darkBlue/50 rounded-md pl-10 pr-4 py-2 border border-cutover-white/10 focus:border-cutover-neonBlue transition-colors focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Tag size={18} className="text-cutover-lightGray" />
          <div className="flex gap-2 overflow-x-auto flex-nowrap pb-2 md:pb-0 w-full md:w-auto">
            {categories.map(category => (
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
      
      {/* Featured Post */}
      {featuredPost && (selectedCategory === 'All' || selectedCategory === featuredPost.category) && searchTerm === '' && (
        <div className="mb-16 glass-panel rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className={`lg:w-1/2 h-60 lg:h-auto ${featuredPost.image}`}>
            </div>
            <div className="lg:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-cutover-neonBlue/20 text-cutover-neonBlue text-xs px-3 py-1 rounded-full border border-cutover-neonBlue/30">
                  Featured
                </span>
                <span className="mx-2 text-cutover-lightGray">•</span>
                <span className="text-cutover-lightGray text-sm">{featuredPost.category}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 hover:text-cutover-neonBlue transition-colors">
                {featuredPost.title}
              </h3>
              
              <p className="text-cutover-lightGray mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center text-cutover-lightGray text-sm mb-6">
                <User size={14} className="mr-1" />
                <span className="mr-4">{featuredPost.author}</span>
                <Calendar size={14} className="mr-1" />
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              
              <button className="flex items-center text-cutover-neonBlue hover:underline">
                Read Article <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts
          .filter(post => !post.featured || (searchTerm !== '' || selectedCategory !== 'All'))
          .map(post => (
          <div 
            key={post.id}
            className="card hover:translate-y-[-8px] transition-all duration-300 overflow-hidden"
          >
            <div className={`h-48 w-full rounded-t-lg ${post.image}`}></div>
            
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-cutover-lightGray text-xs">{post.category}</span>
                <span className="mx-2 text-cutover-lightGray">•</span>
                <span className="text-cutover-lightGray text-xs">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl mb-3 hover:text-cutover-neonBlue transition-colors">
                {post.title}
              </h3>
              
              <p className="text-cutover-lightGray mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-cutover-lightGray text-xs mb-4">
                <User size={12} className="mr-1" />
                <span className="mr-3">{post.author}</span>
                <Calendar size={12} className="mr-1" />
                <span>{post.date}</span>
              </div>
              
              <button className="flex items-center text-cutover-neonBlue hover:underline text-sm">
                Read Article <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-cutover-lightGray text-lg">No articles found matching your criteria.</p>
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
      
      <div className="text-center mt-16">
        <button className="btn-primary">Load More Articles</button>
      </div>
    </section>
  );
};

export default BlogOverview;
