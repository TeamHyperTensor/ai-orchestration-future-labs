
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-gradient border-t border-cutover-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-cutover-neonBlue">
                cutover<span className="text-cutover-white">.ai</span>
              </span>
            </Link>
            <p className="mt-4 text-cutover-lightGray">
              Pioneering human-machine collaboration through AI-driven runbooks.
              The future of AI orchestration is here.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <SocialLink href="https://github.com/cutover" icon={<Github size={20} />} />
              <SocialLink href="https://twitter.com/cutover" icon={<Twitter size={20} />} />
              <SocialLink href="https://linkedin.com/company/cutover" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:info@cutover.ai" icon={<Mail size={20} />} />
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-cutover-neonBlue font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <FooterLink to="/capabilities">AI Capabilities</FooterLink>
              <FooterLink to="/demos">Interactive Demos</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/vision">Our Vision</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-cutover-neonBlue font-semibold text-lg mb-4">
              Stay Updated
            </h4>
            <p className="text-cutover-lightGray mb-4">
              Subscribe to our newsletter for the latest updates on AI orchestration.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="glass-panel px-4 py-2 text-cutover-white placeholder:text-cutover-white/50 focus:border-cutover-neonBlue focus:outline-none"
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cutover-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cutover-lightGray text-sm">
            &copy; {new Date().getFullYear()} Cutover. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-cutover-lightGray hover:text-cutover-neonBlue text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-cutover-lightGray hover:text-cutover-neonBlue text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-cutover-lightGray hover:text-cutover-neonBlue text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-cutover-lightGray hover:text-cutover-neonBlue transition-colors duration-200">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-cutover-white/5 
    text-cutover-lightGray hover:text-cutover-neonBlue hover:bg-cutover-white/10 transition-colors duration-200"
  >
    {icon}
  </a>
);

export default Footer;
