import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Network, Settings, Headphones, TrendingUp } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";
import serviceSupport from "@/assets/service-support.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const ServicesPage = () => {
  const services = [
    {
      icon: <Network className="h-12 w-12 text-accent" />,
      title: "Network Design & Implementation",
      description: "Comprehensive network assessment, architecture design, and seamless deployment for optimal connectivity and performance.",
      image: serviceNetwork
    },
    {
      icon: <Cloud className="h-12 w-12 text-accent" />,
      title: "Cloud Computing & Migration",
      description: "Expert AWS, Azure, and GCP consulting with strategic migration planning to modernize your infrastructure.",
      image: serviceCloud
    },
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: "Cybersecurity Assessments",
      description: "Thorough vulnerability scans, system hardening, and security policy development to protect your business.",
      image: serviceSecurity
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "IT Strategy & Roadmap",
      description: "Digital transformation planning and execution strategies aligned with your business objectives.",
      image: serviceStrategy
    },
    {
      icon: <Headphones className="h-12 w-12 text-accent" />,
      title: "Managed Services & Support",
      description: "24/7 monitoring, automated backups, and SLA-based support to keep your systems running smoothly.",
      image: serviceSupport
    },
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "IT Consulting",
      description: "Strategic technology guidance to help you make informed decisions and maximize ROI.",
      image: serviceConsulting
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesBg}
            alt="IT Services Infrastructure"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Expert IT Consulting Services for Your Business
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              At Tech Ariser Global, we understand the importance of technology in today's business landscape. 
              We offer a wide range of IT consulting services tailored to your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth group overflow-hidden">
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Whether you're a small startup or a large enterprise, we have the expertise and experience 
              to help you succeed in today's digital age. Our team of experienced consultants will work 
              closely with you to develop customized solutions that help you achieve your goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
