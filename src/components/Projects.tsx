
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Enterprise CRM Solution",
    description: "A comprehensive customer relationship management system with advanced analytics and reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "GraphQL", "AWS"],
    category: "Web Application"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution with integrated payment systems and inventory management.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
    category: "Web Application"
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description: "A data visualization platform providing real-time insights for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Vue.js", "D3.js", "Firebase", "ElasticSearch"],
    category: "Data Visualization"
  },
  {
    id: 4,
    title: "Logistics Management System",
    description: "An end-to-end solution for tracking and managing logistics operations with real-time updates.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    category: "Enterprise Solution"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    if (!isAnimating) {
      setDirection('next');
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setDirection('prev');
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  useEffect(() => {
    // Reset animation state after transition completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    // Auto-advance the carousel
    intervalRef.current = setInterval(goToNext, 7000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== activeIndex) {
      setDirection(index > activeIndex ? 'next' : 'prev');
      setIsAnimating(true);
      setActiveIndex(index);
    }
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span>Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Showcasing Our Expertise
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our portfolio of successful web applications and solutions delivered to clients across various industries.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "transition-all duration-500 ease-in-out absolute inset-0 w-full opacity-0 pointer-events-none",
                  index === activeIndex && "opacity-100 pointer-events-auto relative",
                  isAnimating && index === activeIndex && (
                    direction === 'next' ? "animate-slide-in-right" : "animate-slide-in-right"
                  )
                )}
              >
                <div className="relative h-[500px] md:h-[600px] w-full">
                  {/* Image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <div
                    className="blur-load w-full h-full bg-muted"
                    style={{ backgroundImage: `url(${project.image}&w=50&blur=30)` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-opacity"
                      onLoad={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.parentElement?.classList.add('loaded');
                      }}
                    />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <div className="max-w-3xl">
                      <div className="mb-3 inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-sm">
                        {project.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-white/80 max-w-xl">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-white text-foreground rounded-md hover:bg-white/90 transition-colors duration-300"
                      >
                        <span>View Details</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-foreground/20 hover:bg-foreground/30"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
