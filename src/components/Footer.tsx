
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Sveasoft</h3>
            <p className="text-foreground/70 mb-6">
              Building exceptional web applications that deliver value and elevate your business.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Web Application Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Mobile Application Integration
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  API Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Business Intelligence
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              &copy; {currentYear} Sveasoft. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
