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
      {/* Background Image with Blur + Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Modern IT infrastructure and digital transformation"
          className="w-full h-full object-cover scale-105 blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_25%_8%/0.72)] via-[hsl(178_80%_15%/0.55)] to-[hsl(215_25%_8%/0.70)]" />
      </div>

      {/* Ambient glow elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/12 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-10 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Leading IT Consulting Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-6 animate-fade-in-up font-heading font-extrabold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] text-5xl md:text-6xl lg:text-7xl">
            Empowering Your{" "}
            <span className="bg-gradient-to-r from-accent to-[hsl(190_90%_55%)] bg-clip-text text-transparent drop-shadow-none">
              Digital Transformation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-[hsl(0_0%_85%)] mb-8 animate-fade-in-up animation-delay-200 font-body max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            Expert IT consulting for business innovation and growth.
          </p>

          {/* Description */}
          <p className="text-lg text-[hsl(220_15%_78%)] mb-12 animate-fade-in-up animation-delay-300 max-w-3xl mx-auto font-body leading-relaxed">
            Welcome to Tech Ariser Global. Providing expert IT consulting services for small businesses.
            Contact us today to optimize your technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up animation-delay-400">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white text-lg px-10 py-7 group font-bold shadow-[0_0_30px_hsl(176_77%_50%/0.4)] hover:shadow-[0_0_40px_hsl(176_77%_50%/0.6)] transition-all duration-300 rounded-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/50 text-lg px-10 py-7 rounded-xl transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in animation-delay-500">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl border border-white/15 bg-white/8 backdrop-blur-sm px-4 py-6 hover:bg-white/12 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-[0_0_12px_hsl(176_77%_50%/0.3)]">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
