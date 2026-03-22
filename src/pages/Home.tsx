import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Network, Cloud, Shield, Lightbulb, Settings, CheckCircle2, Award, Users, Target, TrendingUp, Clock, HeadphonesIcon, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroHome from "@/assets/hero-home.jpg";
import homeConsultant from "@/assets/home-consultant.png";
import serviceNetwork from "@/assets/service-network-home.jpg";
import serviceCloud from "@/assets/service-cloud-home.jpg";
import serviceSecurity from "@/assets/service-security-home.jpg";
import serviceStrategy from "@/assets/service-strategy-home.jpg";
import serviceManaged from "@/assets/service-managed-home.jpg";
import serviceInnovation from "@/assets/service-innovation-home.jpg";
import ctaBackground from "@/assets/cta-background.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const Home = () => {
  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroHome}
          alt="Modern IT infrastructure and digital transformation"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">
              Leading IT Consulting Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-6 animate-fade-in-up font-heading">
            Empowering Your Digital Transformation
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up animation-delay-200 font-body max-w-2xl mx-auto">
            Expert IT consulting for business innovation and growth.
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 animate-fade-in-up animation-delay-300 max-w-3xl mx-auto font-body">
            Welcome to Tech Ariser Global. Providing expert IT consulting services for small businesses. 
            Contact us today to optimize your technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white shadow-cta text-lg px-8 py-6 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-white/70 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-white/70 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/70 text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

    </section>

    {/* Consultant Image Section */}
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-card">
          <img
            src={homeConsultant}
            alt="IT consultant working on digital solutions"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    {/* Services Preview Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="mb-4 text-foreground">Our Core Services</h2>
          <p className="text-lg text-muted-foreground font-body">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Network,
              title: "Network Design",
              description: "Enterprise-grade network infrastructure and architecture solutions",
              image: serviceNetwork
            },
            {
              icon: Cloud,
              title: "Cloud Solutions",
              description: "Seamless cloud migration and multi-cloud platform management",
              image: serviceCloud
            },
            {
              icon: Shield,
              title: "Cybersecurity",
              description: "Advanced security assessments and threat protection",
              image: serviceSecurity
            },
            {
              icon: Lightbulb,
              title: "IT Strategy",
              description: "Digital transformation and technology roadmap planning",
              image: serviceStrategy
            },
            {
              icon: Settings,
              title: "Managed Services",
              description: "24/7 monitoring, support, and proactive maintenance",
              image: serviceManaged
            },
            {
              icon: Zap,
              title: "Digital Innovation",
              description: "Cutting-edge technology integration and automation",
              image: serviceInnovation
            }
          ].map((service, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-smooth border-border bg-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-cta">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="mb-6 text-foreground">Why Tech Ariser Global?</h2>
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              We combine deep technical expertise with business acumen to deliver IT solutions 
              that not only solve today's challenges but position your organization for tomorrow's opportunities.
            </p>
            
            <div className="space-y-4">
              {[
                "5+ years of proven industry experience",
                "Certified experts in leading technologies",
                "Customized solutions for your unique needs",
                "24/7 dedicated support and monitoring",
                "Cost-effective and scalable approaches",
                "Strong track record across industries"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground text-lg font-body">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-block mt-8">
              <Button variant="outline" size="lg" className="border-2">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in animation-delay-200">
            <Card className="text-center p-8 shadow-card hover:shadow-card-hover transition-smooth bg-gradient-to-br from-primary to-accent text-white border-0">
              <Users className="w-12 h-12 mx-auto mb-4 drop-shadow-lg" />
              <div className="text-4xl font-bold mb-2 drop-shadow-lg">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-sm opacity-90 font-medium">Happy Clients</div>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-card-hover transition-smooth bg-white dark:bg-card border-2 border-accent/20">
              <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2 text-foreground">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground font-medium">Certifications</div>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-card-hover transition-smooth bg-white dark:bg-card border-2 border-primary/20">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2 text-foreground">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-card-hover transition-smooth bg-gradient-to-br from-accent via-primary to-accent text-white border-0">
              <Clock className="w-12 h-12 mx-auto mb-4 drop-shadow-lg" />
              <div className="text-4xl font-bold mb-2 drop-shadow-lg">24/7</div>
              <div className="text-sm opacity-90 font-medium">Support</div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">What Sets Us Apart</h2>
          <p className="text-lg text-muted-foreground font-body">
            Our commitment to excellence drives everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 border-border hover:border-accent transition-smooth bg-card">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Strategic Approach
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              We align technology initiatives with your business goals to ensure every solution 
              delivers measurable value and competitive advantage.
            </p>
          </Card>

          <Card className="p-8 border-2 border-border hover:border-primary transition-smooth bg-card">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <HeadphonesIcon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Expert Support
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Our dedicated support team is available around the clock to ensure your systems 
              run smoothly and efficiently, minimizing downtime.
            </p>
          </Card>

          <Card className="p-8 border-2 border-border hover:border-accent transition-smooth bg-card">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Rapid Innovation
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Stay ahead of the curve with our forward-thinking approach to technology adoption 
              and continuous improvement strategies.
            </p>
          </Card>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBackground}
          alt="Transform your business with Tech Ariser Global"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-fade-in">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">
            Your Digital Transformation Partner
          </span>
        </div>

        <h2 className="mb-6 text-white">Ready to Transform Your Business?</h2>
        <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto font-body">
          Let's discuss how Tech Ariser Global can help you achieve your digital transformation goals.
        </p>
        <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto font-body">
          Schedule a free consultation with our experts today and discover how we can optimize your IT infrastructure, 
          enhance security, and drive innovation across your organization. Our proven track record speaks for itself 
          - join hundreds of satisfied clients who've transformed their business with our solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-cta group">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
          <Link to="/services">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              View Our Services
            </Button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">Free</div>
            <div className="text-white/80 text-sm">Initial Consultation</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">24-48h</div>
            <div className="text-white/80 text-sm">Response Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">Custom</div>
            <div className="text-white/80 text-sm">Tailored Solutions</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
