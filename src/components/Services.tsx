
import { useState, useRef, useEffect } from 'react';
import { Code, Smartphone, Globe, Database, LineChart, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Custom web applications built with modern frameworks that scale with your business needs.",
    icon: <Code className="h-8 w-8" />,
    delay: 100
  },
  {
    id: 2,
    title: "Mobile Application Integration",
    description: "Seamless integration between your web applications and mobile platforms for a unified experience.",
    icon: <Smartphone className="h-8 w-8" />,
    delay: 200
  },
  {
    id: 3,
    title: "API Development",
    description: "Robust and secure APIs that connect your applications with third-party services and data sources.",
    icon: <Database className="h-8 w-8" />,
    delay: 300
  },
  {
    id: 4,
    title: "Business Intelligence",
    description: "Data visualization and analytics solutions that help you make informed business decisions.",
    icon: <LineChart className="h-8 w-8" />,
    delay: 400
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions designed for performance, security, and cost optimization.",
    icon: <Cloud className="h-8 w-8" />,
    delay: 500
  },
  {
    id: 6,
    title: "Website Development",
    description: "Responsive websites with modern design and optimal performance that represent your brand.",
    icon: <Globe className="h-8 w-8" />,
    delay: 600
  }
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = parseInt(entry.target.getAttribute('data-id') || '0');
        setVisibleItems(prev => new Set(prev).add(id));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-muted/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Web Application Solutions
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            End-to-end development services tailored to your business requirements, from concept to deployment and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              data-id={service.id}
              className={cn(
                "service-card glass-card rounded-xl p-8 transition-all duration-700",
                visibleItems.has(service.id) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              )}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-lg p-3 bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
