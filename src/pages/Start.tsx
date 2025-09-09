import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Home, RefreshCw, DollarSign, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Start = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const options = [
    {
      id: "buying",
      icon: Home,
      title: "Buying a home",
      description: "Get pre-approved for a home purchase loan",
    },
    {
      id: "refinancing",
      icon: RefreshCw,
      title: "Refinancing my mortgage",
      description: "Lower your rate or change your loan terms",
    },
    {
      id: "cash-out",
      icon: DollarSign,
      title: "Get cash from my home",
      description: "Access your home's equity with a cash-out refinance",
    },
  ];

  const stats = [
    { value: "$100B", label: "home loans funded entirely online" },
    { value: "400K", label: "Customers who chose a Better Mortgage" },
  ];

  const benefits = [
    "Custom mortgage rates",
    "Exclusive offers",
    "A personalized dashboard",
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to continue.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application started!",
      description: "We'll be in touch soon to continue your application.",
    });

    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
    setSelectedOption(null);
    setShowForm(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hi, I'm Betsy!
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            What can I help you with?
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>Need help? Call 415-523-8837</span>
          </div>
        </div>

        {/* Options */}
        {!showForm && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="space-y-4">
              {options.map((option) => (
                <Card
                  key={option.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedOption === option.id ? "ring-2 ring-accent-green" : ""
                  }`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center">
                        <option.icon className="h-6 w-6 text-accent-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{option.title}</h3>
                        <p className="text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="max-w-md mx-auto mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Let's get started</h2>
                  <p className="text-muted-foreground">
                    Tell us a bit about yourself to continue
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent-green" className="w-full" size="lg">
                    Continue
                  </Button>
                </form>

                <Button
                  variant="ghost"
                  className="w-full mt-4"
                  onClick={() => setShowForm(false)}
                >
                  ← Back to options
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats */}
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-green mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <p className="text-muted-foreground">After a few questions, you'll unlock:</p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-accent-green" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;