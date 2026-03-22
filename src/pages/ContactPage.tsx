import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/19452745643", "_blank");
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-heading">
              📞 Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to take your business to the next level? Schedule a consultation with one of our IT Experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground font-heading">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Tech Ariser Global LLC<br />
                      18383 Preston Rd, #202<br />
                      Dallas, TX 75252
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+19452745643" className="text-muted-foreground hover:text-primary transition-smooth">
                      +1 945-274-5643
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:hr@techariser.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      hr@techariser.com
                    </a>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Message us on WhatsApp
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-foreground font-heading">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-hover text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-foreground font-heading text-center">Our Location</h2>
            <div className="rounded-xl overflow-hidden border border-border shadow-card h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.5!2d-96.8037!3d32.9297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21f5e8b1d1a7%3A0x0!2s18383+Preston+Rd+%23202%2C+Dallas%2C+TX+75252!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Ariser Global LLC Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
