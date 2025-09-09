import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(265);
  const [zipCode, setZipCode] = useState("421005");

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [principalAndInterest, setPrincipalAndInterest] = useState(0);

  // Calculate mortgage payment
  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setPrincipalAndInterest(principal / numPayments);
    } else {
      const monthlyPI = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
      setPrincipalAndInterest(monthlyPI);
    }
  }, [homePrice, downPayment, interestRate, loanTerm]);

  useEffect(() => {
    setMonthlyPayment(principalAndInterest + propertyTax);
  }, [principalAndInterest, propertyTax]);

  // Update down payment when percentage changes
  useEffect(() => {
    setDownPayment(Math.round((downPaymentPercent / 100) * homePrice));
  }, [downPaymentPercent, homePrice]);

  // Update percentage when down payment changes
  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent(Math.round((value / homePrice) * 100));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Estimate your monthly mortgage payments
          </h1>
          <p className="text-lg text-muted-foreground">
            Get a personalized estimate of your monthly payments and see how different factors affect your mortgage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardContent className="space-y-8">
                {/* Home Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="homePrice" className="text-base font-medium">
                      Home price
                    </Label>
                    <div className="relative mt-2">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <Input
                        id="homePrice"
                        type="number"
                        value={homePrice}
                        onChange={(e) => setHomePrice(Number(e.target.value))}
                        className="pl-8 h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="downPayment" className="text-base font-medium">
                      Down payment
                    </Label>
                    <div className="flex mt-2 space-x-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          $
                        </span>
                        <Input
                          id="downPayment"
                          type="number"
                          value={downPayment}
                          onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                          className="pl-8 h-12 text-lg"
                        />
                      </div>
                      <div className="relative w-20">
                        <Input
                          type="number"
                          value={downPaymentPercent}
                          onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                          className="h-12 text-lg pr-8"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loan Terms */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="loanTerm" className="text-base font-medium">
                      Length of loan
                    </Label>
                    <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                      <SelectTrigger className="h-12 text-lg mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="25">25 years</SelectItem>
                        <SelectItem value="30">30 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interestRate" className="text-base font-medium">
                      Interest rate
                    </Label>
                    <div className="relative mt-2">
                      <Input
                        id="interestRate"
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="pr-8 h-12 text-lg"
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        %
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zipCode" className="text-base font-medium">
                      ZIP code
                    </Label>
                    <Input
                      id="zipCode"
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="h-12 text-lg mt-2"
                      placeholder="421005"
                    />
                  </div>
                </div>

                {/* Down Payment Slider */}
                <div>
                  <Label className="text-base font-medium mb-4 block">
                    Down payment: {downPaymentPercent}%
                  </Label>
                  <Slider
                    value={[downPaymentPercent]}
                    onValueChange={(value) => setDownPaymentPercent(value[0])}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Payment */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-medium text-muted-foreground">
                  Monthly payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-6">
                  {formatCurrency(monthlyPayment)}/mo
                </div>
                <Link to="/start">
                  <Button variant="accent-green" className="w-full" size="lg">
                    Get pre-approved
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Payment Breakdown */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-medium">
                  Monthly payment breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold mb-4">
                  {formatCurrency(monthlyPayment)}/mo
                </div>

                {/* Principal & Interest */}
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent-green rounded mr-3"></div>
                    <span className="text-sm">Principal & interest</span>
                  </div>
                  <span className="font-medium">{formatCurrency(principalAndInterest)}</span>
                </div>

                {/* Property Taxes */}
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded mr-3"></div>
                    <span className="text-sm">Property taxes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">$</span>
                    <Input
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(Number(e.target.value))}
                      className="w-20 h-8 text-right text-sm"
                    />
                  </div>
                </div>

                {/* Homeowners Insurance */}
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded mr-3"></div>
                    <span className="text-sm">Homeowners insurance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">$</span>
                    <Input
                      type="number"
                      defaultValue={0}
                      className="w-20 h-8 text-right text-sm"
                    />
                  </div>
                </div>

                {/* HOA Fees */}
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded mr-3"></div>
                    <span className="text-sm">HOA fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">$</span>
                    <Input
                      type="number"
                      defaultValue={0}
                      className="w-20 h-8 text-right text-sm"
                    />
                  </div>
                </div>

                {/* Visual Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-accent-green h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(principalAndInterest / monthlyPayment) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground mt-2">
                    {Math.round((principalAndInterest / monthlyPayment) * 100)}% Principal & Interest
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get pre-approved?</h2>
          <p className="text-muted-foreground mb-6">
            Get a personalized rate quote in as little as 3 minutes
          </p>
          <Link to="/start">
            <Button variant="hero" size="lg">
              Start my pre-approval
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;