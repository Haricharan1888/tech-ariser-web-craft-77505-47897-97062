import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // spam prevention
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam check
    if (formData.honeypot) {
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send to your backend/API
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="mb-4 text-foreground">📞 Contact Us</h2>
          <p className="text-lg text-muted-foreground font-body">
            Ready to take your business to the next level? Schedule a consultation with one of our IT Experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-card-hover transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tech Ariser Global<br />
                  4400 Bandera Drive<br />
                  Prosper, TX, USA
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+19452745643" className="text-primary hover:text-primary-hover font-medium transition-smooth">
                  +1 945-274-5643
                </a>
                <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 9am - 6pm</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@techariserglobal.com" className="text-primary hover:text-primary-hover font-medium transition-smooth">
                  info@techariserglobal.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-smooth bg-gradient-hero text-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-white">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90">Mon-Fri: 9am-6pm CT</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for spam prevention */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        maxLength={100}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234-567-8900"
                      maxLength={20}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      required
                      maxLength={1000}
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-hero text-white hover:opacity-90 shadow-cta"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-2 border-accent text-accent hover:bg-accent hover:text-white"
                      onClick={() => window.open("https://wa.me/19452745643", "_blank")}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message on WhatsApp
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
