import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="mb-6 text-foreground">About Tech Ariser Global</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-accent" />
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                At Tech Ariser Global, our mission is to empower businesses by delivering innovative 
                IT consulting solutions. We strive to help enterprises achieve their digital transformation 
                objectives with agility and expertise.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-accent bg-card/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground font-body">
                    <strong className="text-foreground">Innovation-Driven:</strong> We leverage cutting-edge 
                    technologies to solve complex business challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary bg-card/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground font-body">
                    <strong className="text-foreground">Client-Focused:</strong> Your success is our priority. 
                    We tailor solutions to meet your unique business needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent bg-card/50">
                <CardContent className="p-4">
                  <p className="text-muted-foreground font-body">
                    <strong className="text-foreground">Expert Team:</strong> Our consultants bring decades 
                    of combined experience in enterprise IT solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Stats & Values */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-smooth bg-gradient-hero text-white">
                <Users className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </Card>

              <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-smooth bg-card">
                <Award className="w-10 h-10 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold mb-2 text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>

              <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-smooth bg-card">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-2 text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>

              <Card className="text-center p-6 shadow-card hover:shadow-card-hover transition-smooth bg-gradient-to-br from-accent to-primary text-white">
                <Target className="w-10 h-10 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </Card>
            </div>

            <Card className="p-8 bg-muted/50 border-2 border-accent/20">
              <h4 className="text-xl font-heading font-bold text-foreground mb-4">
                Why Choose Us?
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Proven track record across diverse industries</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Cutting-edge technology expertise and certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Personalized approach to every client engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Long-term partnership and continuous support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
