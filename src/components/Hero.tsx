import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Modern IT infrastructure and digital transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/35" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[2rem] border border-border/50 bg-background/78 backdrop-blur-xl shadow-card-hover px-6 py-10 md:px-10 md:py-14 lg:px-14 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full border border-border/60 mb-8 animate-fade-in shadow-card">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-foreground text-sm font-medium">
                Leading IT Consulting Services
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-foreground mb-6 animate-fade-in-up font-heading">
              Empowering Your Digital Transformation
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-up animation-delay-200 font-body max-w-2xl mx-auto">
              Expert IT consulting for business innovation and growth.
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 animate-fade-in-up animation-delay-300 max-w-3xl mx-auto font-body">
              Welcome to Tech Ariser Global. Providing expert IT consulting services for small businesses.
              Contact us today to optimize your technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground shadow-cta text-lg px-8 py-6 group font-semibold"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-border bg-background/70 text-foreground hover:bg-secondary hover:text-foreground text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in animation-delay-500">
              <div className="text-center rounded-2xl border border-border/40 bg-secondary/55 px-4 py-5 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">100+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
              <div className="text-center rounded-2xl border border-border/40 bg-secondary/55 px-4 py-5 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">98%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center rounded-2xl border border-border/40 bg-secondary/55 px-4 py-5 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-muted-foreground text-sm">Support Available</div>
              </div>
              <div className="text-center rounded-2xl border border-border/40 bg-secondary/55 px-4 py-5 shadow-card">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
