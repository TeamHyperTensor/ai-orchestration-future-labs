
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Maximize2, Minimize2, ArrowRight } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Hello! I'm Cutover AI assistant. How can I help you learn more about our AI orchestration capabilities?",
    timestamp: new Date()
  }
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: message,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: getBotResponse(message),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const getBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('capabilities') || lowerCaseMessage.includes('features')) {
      return "Cutover offers AI-powered capabilities including runbook generation, workflow optimization, autonomous agents, predictive analytics, and natural language processing. Would you like to learn more about any specific capability?";
    } else if (lowerCaseMessage.includes('demo') || lowerCaseMessage.includes('examples')) {
      return "We have several interactive demos available that showcase our AI orchestration capabilities. You can view our demo library at cutover.ai/demos or I can walk you through a specific demo here. What would you like to see?";
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('talk to') || lowerCaseMessage.includes('speak with')) {
      return "I'd be happy to connect you with our team. You can reach out to us at contact@cutover.ai or I can schedule a demo for you. Would you like me to schedule a demo?";
    } else {
      return "Thanks for your message. Our AI orchestration platform helps enterprises streamline complex IT operations through automated runbooks and intelligent workflows. Is there something specific you'd like to know about Cutover?";
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent-gradient shadow-lg
            flex items-center justify-center text-cutover-white z-50
            hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all duration-300"
        >
          <MessageSquare size={24} />
        </button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div 
          className={`fixed z-50 bg-cutover-darkBlue border border-cutover-white/10 rounded-lg shadow-2xl 
            transition-all duration-300 flex flex-col ${
            isFullScreen 
              ? 'inset-4 md:inset-10'
              : 'bottom-6 right-6 w-[90%] md:w-96 h-[480px]'
          }`}
        >
          {/* Header */}
          <div className="p-4 border-b border-cutover-white/10 flex items-center justify-between bg-dark-gradient rounded-t-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center mr-3">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-cutover-white">Cutover AI Assistant</h4>
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className="text-xs text-cutover-lightGray">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button 
                onClick={toggleFullScreen}
                className="text-cutover-lightGray hover:text-cutover-white p-1 mr-1"
              >
                {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button 
                onClick={toggleChat}
                className="text-cutover-lightGray hover:text-cutover-white p-1"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user' 
                      ? 'bg-cutover-purple text-cutover-white rounded-tr-none'
                      : 'bg-cutover-white/10 text-cutover-white rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-xs text-cutover-white/70 mt-1 inline-block">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-cutover-white/10 text-cutover-white rounded-lg rounded-tl-none p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cutover-white/70 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-cutover-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-cutover-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="border-t border-cutover-white/10 p-4 bg-cutover-darkBlue/80 rounded-b-lg">
            <div className="flex items-center">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-cutover-white/5 border border-cutover-white/10 rounded-md py-2 px-3 
                  text-cutover-white placeholder:text-cutover-white/50 focus:outline-none focus:border-cutover-neonBlue
                  resize-none max-h-24"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={message.trim() === ''}
                className={`ml-2 w-10 h-10 flex items-center justify-center rounded-full
                  ${message.trim() === '' 
                    ? 'bg-cutover-white/10 text-cutover-white/50'
                    : 'bg-cutover-neonBlue text-cutover-darkBlue hover:bg-cutover-neonBlue/90'
                  } transition-colors duration-200`}
              >
                <Send size={18} />
              </button>
            </div>
            
            {/* Quick responses */}
            <div className="flex flex-wrap gap-2 mt-3">
              <QuickResponse text="Tell me about AI capabilities" onClick={setMessage} />
              <QuickResponse text="Show me a demo" onClick={setMessage} />
              <QuickResponse text="Contact sales" onClick={setMessage} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface QuickResponseProps {
  text: string;
  onClick: (text: string) => void;
}

const QuickResponse = ({ text, onClick }: QuickResponseProps) => (
  <button
    onClick={() => onClick(text)}
    className="text-xs px-3 py-1 rounded-full bg-cutover-white/5 text-cutover-lightGray 
    hover:bg-cutover-neonBlue/20 hover:text-cutover-neonBlue transition-colors duration-200 
    border border-cutover-white/10 hover:border-cutover-neonBlue/30 flex items-center"
  >
    {text}
    <ArrowRight size={12} className="ml-1" />
  </button>
);

export default ChatWidget;
