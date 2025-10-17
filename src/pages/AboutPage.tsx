import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Rocket } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex business challenges."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in every project and exceeding client expectations."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Collaboration",
      description: "We work closely with our clients as trusted partners to achieve shared success."
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Agility",
      description: "We adapt quickly to changing technology landscapes and business requirements."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-primary-hover text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              About Tech Ariser Global
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Your trusted partner in digital transformation and IT excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutTeam} 
                alt="Tech Ariser Global Team"
                className="rounded-lg shadow-xl w-full"
                loading="eager"
                decoding="async"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-heading">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Tech Ariser Global, our mission is to empower businesses by delivering innovative IT 
                consulting solutions. We strive to help enterprises achieve their digital transformation 
                objectives with agility and expertise.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in building long-term partnerships with our clients, understanding their unique 
                challenges, and providing tailored solutions that drive real business value. Our team of 
                experienced consultants brings deep technical expertise and industry knowledge to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                24/7
              </div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-heading">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
