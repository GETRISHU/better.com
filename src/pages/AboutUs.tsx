import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const stats = [
    { number: "$100B+", label: "Home loans funded" },
    { number: "400K+", label: "Customers served" },
    { number: "2016", label: "Founded" },
    { number: "4.4/5", label: "Customer rating" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Making homeownership simpler, faster, and more accessible for all Americans through innovative technology and exceptional service.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make is centered around delivering the best possible experience for our customers.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to setting new standards in the mortgage industry through continuous innovation.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're constantly evolving and improving our platform to better serve our customers.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-accent-green font-semibold mb-4">Our mission</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              We're making homeownership simpler, faster — and most importantly,{" "}
              <span className="text-accent-green">more accessible</span> for all Americans.
            </h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Better was founded in 2016 with a simple mission: to make the mortgage process 
                better for everyone. We believed that technology could solve the inefficiencies 
                and frustrations that had plagued the mortgage industry for decades.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Since then, we've funded over $100 billion in home loans and helped hundreds 
                of thousands of families achieve their dream of homeownership. Our digital-first 
                approach has revolutionized the industry, reducing processing times from weeks 
                to days and providing unprecedented transparency throughout the entire process.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, Better continues to lead the industry with innovations like our AI-powered 
                underwriting system, one-day mortgage processing, and comprehensive digital 
                mortgage experience. We're not just changing how mortgages work — we're making 
                homeownership more accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-accent-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              The visionaries driving Better forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Vishal Garg",
                role: "CEO & Founder",
                bio: "Vishal founded Better with a vision to make homeownership more accessible through technology.",
              },
              {
                name: "Kevin Ryan",
                role: "Chairman",
                bio: "Kevin brings decades of experience in building and scaling technology companies.",
              },
              {
                name: "Sarah Wheeler",
                role: "COO",
                bio: "Sarah leads operations, ensuring Better delivers exceptional customer experiences.",
              },
            ].map((leader, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-accent-green font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to experience Better?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of thousands who chose a better way to get a mortgage
          </p>
          <Link to="/start">
            <Button variant="accent-green" size="lg">
              Get started today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;