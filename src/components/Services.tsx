import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Cloud, Shield, Lightbulb, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Network,
    title: "Network Design & Implementation",
    description: "Comprehensive network assessment, architecture design, and deployment solutions tailored to your business needs.",
    features: ["Infrastructure Planning", "Network Architecture", "System Deployment"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing & Migration",
    description: "AWS, Azure, and GCP consulting with seamless cloud migration plans to modernize your infrastructure.",
    features: ["Cloud Strategy", "Migration Planning", "Multi-Cloud Support"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Assessments",
    description: "Vulnerability scans, security hardening, and policy implementation to protect your digital assets.",
    features: ["Security Audits", "Threat Detection", "Compliance Management"],
  },
  {
    icon: Lightbulb,
    title: "IT Strategy & Roadmap",
    description: "Digital transformation planning and execution strategies aligned with your business objectives.",
    features: ["Strategic Planning", "Digital Transformation", "Technology Roadmap"],
  },
  {
    icon: Settings,
    title: "Managed Services & Support",
    description: "24/7 monitoring, automated backups, and SLA-based support to ensure business continuity.",
    features: ["Proactive Monitoring", "Help Desk Support", "System Maintenance"],
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-foreground">
            Expert IT Consulting Services for Your Business
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            At Tech Ariser Global, we understand the importance of technology in today's business landscape. 
            We offer a wide range of IT consulting services, including network design and implementation, 
            cloud computing solutions, cybersecurity assessments, and more. Our team of experienced consultants 
            will work closely with you to understand your unique business needs and develop customized solutions 
            that help you achieve your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card-hover transition-smooth cursor-pointer border-border bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 mr-2 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6 font-body">
            Whether you're a small startup or a large enterprise, we have the expertise and experience 
            to help you succeed in today's digital age.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-hero text-white hover:opacity-90 shadow-cta"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
