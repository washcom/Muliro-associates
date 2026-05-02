import { Shield, Target, Eye, Award, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency and honesty in all our dealings",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your needs and interests always come first",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in service delivery",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace new technologies to serve you better",
    },
  ];

  const whyChooseUs = [
    "Independent intermediary - we work for you, not insurance companies",
    "Access to multiple top-rated underwriters in Kenya",
    "Expert advice tailored to your specific needs",
    "Competitive premium rates through our extensive network",
    "Comprehensive claims support and advocacy",
    "Fully licensed by the Insurance Regulatory Authority (IRA)",
    "Personalized service from experienced professionals",
    "No hidden fees - transparent pricing",
  ];

  return (
    <div>
      <section className="brand-hero py-20">
        <div className="container mx-auto px-4">
          <div className="brand-pill mb-5">Trusted insurance guidance</div>
          <h1 className="text-4xl md:text-6xl mb-4 font-bold tracking-tight">About Muliro & Associates</h1>
          <p className="text-xl text-[#f3f2f2]/82 max-w-3xl">
            Kenya's trusted insurance intermediary, committed to protecting what matters most to you
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 font-bold text-[#0d000a]">Our Story</h2>
              <div className="space-y-4 text-[#0d000a]/72">
                <p>
                  Founded over a decade ago, Muliro & Associates has grown to become one of Kenya's most trusted insurance intermediaries. Our journey began with a simple mission: to make quality insurance accessible and understandable for all Kenyans.
                </p>
                <p>
                  We recognized that navigating the insurance landscape can be complex and overwhelming. That's why we positioned ourselves as independent advisors who work exclusively in your interest, helping you find the best coverage from Kenya's top underwriters.
                </p>
                <p>
                  Today, we serve thousands of individuals, families, and businesses across Kenya, providing personalized insurance solutions backed by expert advice and unwavering support.
                </p>
              </div>
            </div>
            <div className="brand-card rounded-[2rem] p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-8 w-8 text-[#fedd00]" />
                    <h3 className="text-2xl font-bold text-[#0d000a]">Our Mission</h3>
                  </div>
                  <p className="text-[#0d000a]/72">
                    To provide accessible, reliable, and personalized insurance solutions that protect our clients' financial wellbeing and give them peace of mind.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="h-8 w-8 text-[#fedd00]" />
                    <h3 className="text-2xl font-bold text-[#0d000a]">Our Vision</h3>
                  </div>
                  <p className="text-[#0d000a]/72">
                    To be Kenya's leading insurance intermediary, recognized for exceptional service, integrity, and our commitment to client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section-soft py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#0d000a]">Our Core Values</h2>
            <p className="text-lg text-[#0d000a]/65">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="brand-card text-center border-2 border-transparent hover:border-[#fedd00]/60 transition-colors">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-[#0d000a] rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-[#fedd00]" />
                  </div>
                  <CardTitle className="text-xl text-[#0d000a]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0d000a]/65">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center font-bold text-[#0d000a]">Why Choose Muliro & Associates?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 brand-card p-4 rounded-2xl">
                  <CheckCircle2 className="h-6 w-6 text-[#fedd00] flex-shrink-0 mt-0.5" />
                  <span className="text-[#0d000a]/75">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Licensed & Regulated</h2>
          <p className="text-xl text-[#f3f2f2]/80 max-w-2xl mx-auto mb-8">
            Muliro & Associates is fully licensed by the Insurance Regulatory Authority (IRA) of Kenya, ensuring compliance with all regulatory standards and client protection requirements.
          </p>
          <div className="flex justify-center gap-8 text-left max-w-2xl mx-auto">
            <div className="brand-card-dark rounded-3xl p-6 flex-1">
              <div className="text-4xl mb-2 text-[#fedd00]">✓</div>
              <div className="text-lg">IRA Licensed</div>
              <div className="text-sm text-[#f3f2f2]/70">Fully Compliant</div>
            </div>
            <div className="brand-card-dark rounded-3xl p-6 flex-1">
              <div className="text-4xl mb-2 text-[#fedd00]">✓</div>
              <div className="text-lg">Professional Standards</div>
              <div className="text-sm text-[#f3f2f2]/70">Certified Advisors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
