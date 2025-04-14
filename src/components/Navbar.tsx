
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cutover-darkBlue/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tighter text-cutover-neonBlue">
            cutover<span className="text-cutover-white">.ai</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/capabilities">Capabilities</NavLink>
          <NavLink to="/demos">Demos</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/vision">Vision</NavLink>
          <Link 
            to="/contact" 
            className="btn-primary"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-cutover-white hover:text-cutover-neonBlue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cutover-darkBlue/95 backdrop-blur-lg py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink 
              to="/capabilities" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Capabilities
            </MobileNavLink>
            <MobileNavLink 
              to="/demos" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demos
            </MobileNavLink>
            <MobileNavLink 
              to="/blog" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </MobileNavLink>
            <MobileNavLink 
              to="/vision" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vision
            </MobileNavLink>
            <Link 
              to="/contact" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-cutover-white hover:text-cutover-neonBlue transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="flex items-center justify-between text-cutover-white hover:text-cutover-neonBlue p-2 border-b border-cutover-white/10"
    onClick={onClick}
  >
    <span>{children}</span>
    <ChevronRight size={18} />
  </Link>
);

export default Navbar;
