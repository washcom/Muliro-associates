import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Shield, Award, TrendingUp, Users } from "lucide-react";

export function Partners() {
  const partners = [
    {
      name: "Jubilee Insurance",
      description: "One of East Africa's leading insurance providers with comprehensive coverage options",
      specialties: ["Health", "Life", "Motor", "Business"],
    },
    {
      name: "APA Insurance",
      description: "Trusted insurance provider offering innovative products for individuals and businesses",
      specialties: ["Motor", "Medical", "Life", "Property"],
    },
    {
      name: "ICEA LION",
      description: "Premier insurance company with strong presence across Kenya and East Africa",
      specialties: ["Life", "Pensions", "General Insurance"],
    },
    {
      name: "Britam",
      description: "Leading diversified financial services group with robust insurance solutions",
      specialties: ["Life", "Health", "General Insurance", "Asset Management"],
    },
    {
      name: "UAP Insurance",
      description: "Established insurance provider with a reputation for excellent customer service",
      specialties: ["Motor", "Health", "Education Plans", "Business"],
    },
    {
      name: "CIC Insurance",
      description: "Comprehensive insurance solutions backed by decades of industry experience",
      specialties: ["Motor", "Medical", "Travel", "Property"],
    },
    {
      name: "Madison Insurance",
      description: "Customer-focused insurance company offering tailored solutions",
      specialties: ["Health", "Life", "Motor", "Business"],
    },
    {
      name: "Sanlam Kenya",
      description: "International insurance leader with strong African presence and expertise",
      specialties: ["Life", "Pensions", "Investments"],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Financial Strength",
      description: "All our partners are financially stable and licensed by the Insurance Regulatory Authority",
    },
    {
      icon: Award,
      title: "Industry Leaders",
      description: "We work only with top-rated underwriters known for reliability and excellence",
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Access to multiple underwriters allows us to find you the best premium rates",
    },
    {
      icon: Users,
      title: "Wide Coverage",
      description: "Our diverse partnerships ensure comprehensive solutions for every insurance need",
    },
  ];

  return (
    <div>
      <section className="brand-hero py-20">
        <div className="container mx-auto px-4">
          <div className="brand-pill mb-5">Strong underwriter network</div>
          <h1 className="text-4xl md:text-6xl mb-4 font-bold">Our Insurance Partners</h1>
          <p className="text-xl text-[#f3f2f2]/80 max-w-3xl">
            We partner with Kenya's leading insurance underwriters to bring you the best coverage options
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl mb-4 font-bold text-[#0d000a]">Working with the Best</h2>
            <p className="text-lg text-[#0d000a]/65">
              As an independent insurance intermediary, we've carefully selected partnerships with Kenya's most reputable underwriters. This gives you access to a wide range of products and competitive premium rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="brand-card text-center border-2 border-transparent">
                <CardHeader>
                  <div className="mx-auto mb-3 w-14 h-14 bg-[#0d000a] rounded-full flex items-center justify-center">
                    <benefit.icon className="h-7 w-7 text-[#fedd00]" />
                  </div>
                  <CardTitle className="text-lg text-[#0d000a]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#0d000a]/65">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="brand-card hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#fedd00]/60">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0d000a]">{partner.name}</CardTitle>
                  <CardDescription className="text-sm text-[#0d000a]/65">{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-[#0d000a]/60">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#0d000a] text-[#fedd00] px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section-soft py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4 font-bold text-[#0d000a]">Why Multiple Partners Matter</h2>
          <p className="text-lg text-[#0d000a]/65 max-w-3xl mx-auto mb-8">
            Unlike agents who represent a single insurer, we work with multiple top underwriters. This means we can compare products, coverage options, and premium rates to find the perfect solution for your specific needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div className="brand-card p-6 rounded-[1.75rem]">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Better Choice</h3>
              <p className="text-[#0d000a]/65">Access to diverse products from multiple insurers gives you more options</p>
            </div>
            <div className="brand-card p-6 rounded-[1.75rem]">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-[#0d000a]/65">We compare premiums across underwriters to find you the best value</p>
            </div>
            <div className="brand-card p-6 rounded-[1.75rem]">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Unbiased Advice</h3>
              <p className="text-[#0d000a]/65">We work for you, not the insurance companies, ensuring objective recommendations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4 font-bold">All Partners are IRA Licensed</h2>
          <p className="text-lg text-[#f3f2f2]/80 max-w-2xl mx-auto">
            Every insurance company we partner with is fully licensed and regulated by the Insurance Regulatory Authority of Kenya, ensuring your protection and compliance with industry standards.
          </p>
        </div>
      </section>
    </div>
  );
}
