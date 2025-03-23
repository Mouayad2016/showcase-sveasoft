
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-300 ease-in-out",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-lg shadow-md" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl md:text-2xl font-bold tracking-tight text-foreground relative z-10"
          aria-label="Sveasoft"
        >
          Sveasoft
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#ecommerce" className="nav-link">Consulting</a>
          <a href="#location" className="nav-link">Location</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            className="relative p-2 rounded-full hover:bg-accent/50 transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItems > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                variant="default"
              >
                {cartItems}
              </Badge>
            )}
          </button>
        </div>
        
        <button 
          className="flex md:hidden z-20 focus:outline-none transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Mobile menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen 
              ? "opacity-100 pointer-events-auto" 
              : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-8 text-lg">
            <a 
              href="#services" 
              className="nav-link text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="nav-link text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#ecommerce" 
              className="nav-link text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Consulting
            </a>
            <a 
              href="#location" 
              className="nav-link text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </a>
            <a 
              href="#about" 
              className="nav-link text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="nav-link text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center mt-4">
              <button 
                className="relative p-2 rounded-full hover:bg-accent/50 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                    variant="default"
                  >
                    {cartItems}
                  </Badge>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
