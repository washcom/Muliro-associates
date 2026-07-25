import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <section className="brand-hero py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="brand-pill mb-5">Support that feels human</div>
          <h1 className="text-5xl md:text-6xl mb-4 text-[#262626] font-bold">Contact Us</h1>
          <p className="text-xl text-[#262626]/70 max-w-3xl">
            Get in touch with our team. We're here to help with all your insurance needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="brand-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-[#6d001a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-[#262626]">Visit Our Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#262626]/72 leading-relaxed">
                  Muliro & Associates<br />
                  Moi Avenue, CBD<br />
                  Nairobi, Kenya
                </p>
              </CardContent>
            </Card>

            <Card className="brand-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-[#6d001a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-[#262626]">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-[#262626]/60">Phone:</div>
                  <a href="tel:+254768777041" className="brand-link text-lg font-semibold">
                    +254 768 777 041
                  </a>
                </div>
                <div>
                  <div className="text-sm text-[#262626]/60">Alternative:</div>
                  <a href="tel:+254724794950" className="brand-link text-lg font-semibold">
                    +254 724 794 950
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="brand-card border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="mb-4 w-14 h-14 bg-[#6d001a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-[#262626]">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-[#262626]/60">General Inquiries:</div>
                  <a href="mailto:mulirofrancis5@gmail.com" className="brand-link break-all font-semibold">
                    mulirofrancis5@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-[#262626]/60">Claims Support:</div>
                  <a href="mailto:mulirofrancis5@gmail.com" className="brand-link break-all font-semibold">
                    mulirofrancis5@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="brand-card">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl text-center">Message Sent Successfully!</CardTitle>
                    <CardDescription className="text-center">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="brand-card">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form and we'll respond as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+254 768 777 041"
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
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#6d001a] rounded-2xl blur-2xl opacity-10"></div>
                <Card className="relative brand-card text-[#262626] border-0 shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-8 w-8 text-[#6d001a]" />
                      <CardTitle className="text-2xl">Office Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between bg-[#262626]/5 rounded-lg p-3">
                      <span className="text-[#262626]/60">Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between bg-[#262626]/5 rounded-lg p-3">
                      <span className="text-[#262626]/60">Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between bg-[#262626]/5 rounded-lg p-3">
                      <span className="text-[#262626]/60">Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#262626]/10">
                      <p className="text-sm text-[#262626]/60">
                        Emergency claims support available 24/7
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="brand-card">
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="/quote" className="block brand-link font-medium hover:underline">
                    Request a Quote →
                  </a>
                  <a href="/products" className="block brand-link font-medium hover:underline">
                    View Our Products →
                  </a>
                  <a href="/faq" className="block brand-link font-medium hover:underline">
                    Frequently Asked Questions →
                  </a>
                  <a href="/partners" className="block brand-link font-medium hover:underline">
                    Our Insurance Partners →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815365165658!2d36.81722931475393!3d-1.2864354990632948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6bb562d37%3A0x2ae8ce32e6c6c0b7!2sMoi%20Avenue%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Muliro & Associates Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
