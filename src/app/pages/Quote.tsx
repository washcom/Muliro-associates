import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { CheckCircle2 } from "lucide-react";

export function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    insuranceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center brand-section-soft px-4">
        <Card className="brand-card max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Quote Request Received!</CardTitle>
            <CardDescription>
              Thank you for your interest in our insurance products.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-[#262626]/72">
              One of our insurance advisors will review your request and contact you within 24 hours with a personalized quote.
            </p>
            <div className="bg-[#6d001a]/14 p-4 rounded-2xl">
              <p className="text-sm text-[#262626]/72">
                <strong>Need immediate assistance?</strong><br />
                Call us at: <a href="tel:+254724794950" className="brand-link hover:underline">+254 724 794 950</a>
              </p>
            </div>
            <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <section className="brand-hero py-12">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 text-[#262626] font-bold">Request a Quote</h1>
          <p className="text-xl text-[#262626]/70 max-w-3xl">
            Fill out the form below and our expert advisors will prepare a personalized quote for you
          </p>
        </div>
      </section>

      <section className="brand-section-soft py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="brand-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                  <CardDescription>
                    Provide your details and we'll get back to you with a competitive quote
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+254 724 794 950"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="insuranceType">Type of Insurance *</Label>
                      <Select
                        value={formData.insuranceType}
                        onValueChange={(value) => handleChange("insuranceType", value)}
                        required
                      >
                        <SelectTrigger id="insuranceType">
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motor">Motor Insurance</SelectItem>
                          <SelectItem value="health">Health Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your insurance needs, coverage requirements, or any specific questions you have..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Request Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#6d001a] rounded-2xl blur-2xl opacity-10"></div>
                <Card className="relative brand-card text-[#262626] border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[#262626]/70">
                      Our insurance advisors are available to answer your questions and guide you through the process.
                    </p>
                    <div className="space-y-4">
                      <div className="bg-[#262626]/5 rounded-xl p-4">
                        <div className="text-sm text-[#262626]/60">Call Us:</div>
                        <a href="tel:+254724794950" className="text-xl text-[#6d001a] hover:underline">
                          +254 724 794 950
                        </a>
                      </div>
                      <div className="bg-[#262626]/5 rounded-xl p-4">
                        <div className="text-sm text-[#262626]/60">Email:</div>
                        <a href="mailto:mulirofrancis5@gmail.com" className="text-lg text-[#6d001a] hover:underline break-all">
                          mulirofrancis5@gmail.com
                        </a>
                      </div>
                      <div className="bg-[#262626]/5 rounded-xl p-4">
                        <div className="text-sm text-[#262626]/60 mb-2">Office Hours:</div>
                        <div>Mon - Fri: 8:00 AM - 5:00 PM</div>
                        <div>Sat: 9:00 AM - 1:00 PM</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="brand-card">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <div className="brand-outline-number flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <strong>We Review Your Request</strong>
                        <p className="text-[#262626]/62">Our team analyzes your needs</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="brand-outline-number flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <strong>Compare Options</strong>
                        <p className="text-[#262626]/62">We check rates from multiple underwriters</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="brand-outline-number flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <strong>Receive Your Quote</strong>
                        <p className="text-[#262626]/62">Get personalized recommendations within 24 hours</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="brand-outline-number flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <strong>Choose & Purchase</strong>
                        <p className="text-[#262626]/62">Select your preferred option and get covered</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
