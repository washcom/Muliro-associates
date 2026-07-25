import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { CheckCircle2, Phone, Mail, MessageCircle } from "lucide-react";

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
      <section className="brand-hero py-12">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 text-[#262626] font-bold">Contact Us</h1>
          <p className="text-xl text-[#262626]/70 max-w-3xl mb-6">
            Get in touch with our team. We're here to help with all your insurance needs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[#6d001a] text-white hover:bg-[#6d001a]/90">
              <a href="tel:+254768777041">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:mulirofrancis5@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/254724794950?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20insurance%20products."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-bold text-lg text-[#262626] mb-1">Visit Our Office</h3>
                <p className="text-[#262626]/70 leading-relaxed">
                  Muliro & Associates<br />
                  Moi Avenue, CBD<br />
                  Nairobi, Kenya
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#262626] mb-1">Call Us</h3>
                <a href="tel:+254768777041" className="block brand-link font-semibold text-lg">
                  +254 768 777 041
                </a>
                <a href="tel:+254724794950" className="block brand-link font-semibold text-lg">
                  +254 724 794 950
                </a>
              </div>

              <div>
                <h3 className="font-bold text-lg text-[#262626] mb-1">Email Us</h3>
                <a href="mailto:mulirofrancis5@gmail.com" className="block brand-link font-semibold break-all">
                  mulirofrancis5@gmail.com
                </a>
              </div>

              <div className="brand-card rounded-2xl p-5">
                <h3 className="font-bold text-[#262626] mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#262626]/60">Monday - Friday</span>
                    <span className="text-[#262626]">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#262626]/60">Saturday</span>
                    <span className="text-[#262626]">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#262626]/60">Sunday</span>
                    <span className="text-[#262626]">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-[#262626]/50 mt-3 pt-3 border-t border-[#262626]/10">
                  Emergency claims support available 24/7
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
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
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="w-full h-80">
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
