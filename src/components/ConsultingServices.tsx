
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, Clock, Calendar, ShoppingCart, CheckCheck, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

type ConsultingPackage = {
  id: string;
  name: string;
  hours: number;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
};

const packages: ConsultingPackage[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    hours: 5,
    price: 499,
    description: 'Perfect for small projects and quick consultations',
    features: [
      'Expert technical consultation',
      'Code review and optimization',
      'Architecture recommendations',
      'Documentation assistance',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Package',
    hours: 10,
    price: 899,
    description: 'Ideal for medium-sized projects and ongoing support',
    features: [
      'Everything in Starter',
      'System design consultation',
      'Implementation assistance',
      'Team workshops and training',
      'Priority scheduling',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Package',
    hours: 20,
    price: 1699,
    description: 'Comprehensive solution for large-scale projects',
    features: [
      'Everything in Professional',
      'Dedicated senior consultant',
      'Custom solution development',
      'Ongoing technical support',
      'Long-term strategy planning',
      'Performance optimization',
    ],
  }
];

const ConsultingServices = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('professional');
  const [cartItems, setCartItems] = useState<string[]>([]);
  const { toast } = useToast();

  const handleAddToCart = (packageId: string) => {
    setCartItems([...cartItems, packageId]);
    toast({
      title: "Added to cart",
      description: "Your consulting package has been added to your cart",
      action: (
        <Button 
          variant="outline" 
          className="flex items-center gap-1"
          onClick={() => console.log("View cart")}
        >
          <ShoppingCart className="h-4 w-4" />
          View Cart ({cartItems.length + 1})
        </Button>
      ),
    });
  };

  const handleBuyNow = (packageId: string) => {
    toast({
      title: "Purchase initiated",
      description: "Redirecting to checkout page...",
      variant: "default",
    });
    // In a real application, this would redirect to a checkout page
    console.log(`Purchasing package ${packageId}`);
  };

  return (
    <section id="ecommerce" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Consulting Hours
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Consulting Services
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Get direct access to our senior developers and tech experts with flexible hour packages tailored to your project needs.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg border-2",
                selectedPackage === pkg.id 
                  ? "border-primary shadow-md" 
                  : "border-border hover:border-primary/40"
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <Badge 
                    variant="default" 
                    className="rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md font-medium py-1.5 px-3"
                  >
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{pkg.name}</span>
                  {selectedPackage === pkg.id && (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  )}
                </CardTitle>
                <CardDescription className="mt-2">{pkg.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <p className="text-3xl font-bold">
                    ${pkg.price}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      / package
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{pkg.hours} hours</span> of consulting time
                  </p>
                </div>
                
                <RadioGroup 
                  value={selectedPackage} 
                  onValueChange={setSelectedPackage}
                  className="mb-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={pkg.id} id={`radio-${pkg.id}`} />
                    <Label htmlFor={`radio-${pkg.id}`}>Select Package</Label>
                  </div>
                </RadioGroup>
                
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleBuyNow(pkg.id)}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleAddToCart(pkg.id)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block p-6 rounded-lg bg-muted/80 border border-border mb-8 max-w-3xl">
            <h3 className="text-xl font-medium mb-3 flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact us for a tailored consulting package designed specifically for your project requirements and timeline.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Calendar className="h-4 w-4" />
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;
