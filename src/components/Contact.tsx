
import { useState } from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Next Project with Us
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Reach out to discuss how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="glass-card rounded-xl p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <a href="mailto:contact@sveasoft.se" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                      contact@sveasoft.se
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <a href="tel:+46123456789" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                      +46 (0) 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Response Time</h4>
                    <p className="text-foreground/70">
                      We aim to respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Why Work With Us</h3>
              
              <ul className="space-y-4 text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Focus on long-term partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Transparent communication and development process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
