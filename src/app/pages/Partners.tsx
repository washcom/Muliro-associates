import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

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
      specialties: ["Motor", "Medical", "Travel", "Property", "Pension", "Life", "Asset Management"],
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
    {
      name: "Directline Assurance Company Ltd",
      description: "Specialist motor insurer known for fast, reliable claims settlement",
      specialties: ["Motor", "Personal Accident"],
    },
    {
      name: "Intra Africa Assurance Ltd",
      description: "Trusted underwriter providing tailored general insurance solutions",
      specialties: ["Motor", "Medical", "Property", "Business"],
    },
  ];

  return (
    <div>
      <section className="brand-hero py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 font-bold text-[#262626]">Our Insurance Partners</h1>
          <p className="text-xl text-[#262626]/70 max-w-3xl">
            We partner with Kenya's leading insurance underwriters to bring you the best coverage options
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="brand-card hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#6d001a]/60">
                <CardHeader>
                  <CardTitle className="text-xl text-[#262626]">{partner.name}</CardTitle>
                  <CardDescription className="hidden sm:block text-sm text-[#262626]/65">{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className={`text-xs bg-[#6d001a] text-white px-3 py-1 rounded-full ${
                            idx >= 3 ? "hidden sm:inline-block" : ""
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                      {partner.specialties.length > 3 && (
                        <span className="text-xs bg-[#262626]/10 text-[#262626]/70 px-3 py-1 rounded-full sm:hidden">
                          +{partner.specialties.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section-dark py-10 border-t border-[#262626]/8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4 font-bold text-[#262626]">All Partners are IRA Licensed</h2>
          <p className="text-lg text-[#262626]/70 max-w-2xl mx-auto">
            Every insurance company we partner with is fully licensed and regulated by the Insurance Regulatory Authority of Kenya, ensuring your protection and compliance with industry standards.
          </p>
        </div>
      </section>
    </div>
  );
}
