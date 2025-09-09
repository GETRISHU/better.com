import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Users, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "3 minutes",
      description: "Get pre-approved in as little as 3 minutes with no hard credit check",
    },
    {
      icon: DollarSign,
      title: "$100B+ funded",
      description: "Over $100 billion in home loans funded nationwide",
    },
    {
      icon: Users,
      title: "400K+ customers",
      description: "Helping hundreds of thousands achieve homeownership",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Better made my home buying process so smooth. The digital experience was amazing!",
      rating: 5,
    },
    {
      name: "Mike R.",
      text: "Got approved in 3 minutes and closed in 21 days. Incredible service!",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      text: "Lower rates and better service than any traditional lender I tried.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The first{" "}
              <span className="bg-gradient-to-r from-accent-green to-green-400 bg-clip-text text-transparent">
                AI-powered
              </span>{" "}
              Mortgage
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Our tech unlocks lower rates, higher chances of approval,
              <br />
              and a lightning-fast process from approval to closing. Over $100 billion funded.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/start">
                <Button variant="hero" size="lg">
                  Start my pre-approval
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-white/70">3 min | No hard credit check</p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="bg-accent-green/20 rounded-lg p-4 text-left">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-accent-green rounded-full mr-2"></div>
                      <span className="text-sm font-medium">Congrats, you're pre-approved</span>
                    </div>
                    <div className="text-2xl font-bold text-accent-green">$450,000</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3 text-left">
                      <div className="text-xs text-white/70 mb-1">Credit Score</div>
                      <div className="text-lg font-semibold">580</div>
                      <div className="text-xs text-white/70">You don't need perfect credit</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-left">
                      <div className="text-xs text-white/70 mb-1">Rate Options</div>
                      <div className="text-lg font-semibold">6.5%</div>
                      <div className="text-xs text-white/70">See your customized rates</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find out why we're better</h2>
            <p className="text-xl text-muted-foreground">
              See all our stories and join hundreds of thousands of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-accent-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.4 out of 5</span>
            </div>
            <p className="text-muted-foreground">Excellent</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
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
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of thousands who chose a better way to get a mortgage
          </p>
          <Link to="/start">
            <Button variant="accent-green" size="lg">
              Start my application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;