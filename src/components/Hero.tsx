
import { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 overflow-hidden">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="absolute top-1/3 left-10 lg:left-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 lg:right-1/4 w-48 h-48 rounded-full bg-primary/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="container relative z-10 px-8 pt-20 appear-animation">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span>Premium Web Application Development</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Crafting <span className="text-gradient">exceptional</span> digital experiences
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            We build modern, responsive web applications with meticulous attention to detail and a focus on performance and user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white rounded-md shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 font-medium"
            >
              Start a Project
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors duration-300 font-medium"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Hero;
