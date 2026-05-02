import { useParams, Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Car, Heart, Building2, Plane, GraduationCap, LifeBuoy, CheckCircle2, ArrowLeft } from "lucide-react";

export function ProductDetail() {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    motor: {
      title: "Motor Insurance",
      icon: Car,
      color: "text-[#0d000a]",
      bgColor: "brand-section-soft",
      description: "Comprehensive vehicle insurance coverage designed to protect you, your vehicle, and other road users.",
      longDescription: "Our motor insurance products offer flexible coverage options from basic third-party liability to comprehensive protection. Whether you drive a personal car, commercial vehicle, or manage a fleet, we have solutions tailored to your needs.",
      coverage: [
        "Third-party bodily injury and property damage",
        "Own vehicle damage (comprehensive plans)",
        "Theft and attempted theft",
        "Fire and natural disasters",
        "Windscreen and window glass",
        "Personal accident cover for driver and passengers",
        "Emergency roadside assistance",
        "Courtesy car provision",
      ],
      whoIsItFor: [
        "Private car owners",
        "Commercial vehicle operators",
        "Fleet managers",
        "Motorcycle owners",
      ],
      benefits: [
        "Fast claim processing",
        "Wide network of approved garages",
        "24/7 emergency assistance",
        "Flexible premium payment options",
      ],
    },
    health: {
      title: "Health Insurance",
      icon: Heart,
      color: "text-[#fedd00]",
      bgColor: "brand-section-dark",
      description: "Quality healthcare coverage ensuring you and your family have access to the best medical care when needed.",
      longDescription: "Our health insurance plans provide comprehensive medical coverage with access to top hospitals and healthcare facilities across Kenya. From individual plans to family and corporate packages, we ensure your health is protected.",
      coverage: [
        "Inpatient hospital treatment",
        "Outpatient consultations and treatment",
        "Maternity and newborn care",
        "Dental and optical care",
        "Chronic disease management",
        "Emergency ambulance services",
        "Specialist consultations",
        "Diagnostic tests and scans",
      ],
      whoIsItFor: [
        "Individuals seeking medical cover",
        "Families",
        "Corporate employee benefits",
        "Retirees and senior citizens",
      ],
      benefits: [
        "Access to leading hospitals in Kenya",
        "Cashless treatment at network facilities",
        "Pre-existing condition cover (terms apply)",
        "Annual health check-ups included",
      ],
    },
    life: {
      title: "Life Insurance",
      icon: LifeBuoy,
      color: "text-[#0d000a]",
      bgColor: "brand-section-soft",
      description: "Secure your family's financial future and ensure their wellbeing even when you're not around.",
      longDescription: "Life insurance provides financial protection for your loved ones. Our plans offer death benefits, savings components, and can help with estate planning and wealth transfer.",
      coverage: [
        "Death benefit payout to beneficiaries",
        "Terminal illness cover",
        "Critical illness rider options",
        "Disability benefits",
        "Funeral expense cover",
        "Education fund for children",
        "Savings and investment component (whole life)",
        "Loan protection insurance",
      ],
      whoIsItFor: [
        "Family breadwinners",
        "Business owners needing key person insurance",
        "Individuals with dependents",
        "Anyone planning for estate transfer",
      ],
      benefits: [
        "Tax benefits on premiums",
        "Guaranteed payout to beneficiaries",
        "Flexible payment terms",
        "Option to add investment component",
      ],
    },
    business: {
      title: "Business Insurance",
      icon: Building2,
      color: "text-[#fedd00]",
      bgColor: "brand-section-dark",
      description: "Comprehensive protection for your business assets, operations, and employees against various risks.",
      longDescription: "From startups to established enterprises, our business insurance solutions protect your operations, assets, and employees. We understand Kenyan businesses and offer tailored coverage.",
      coverage: [
        "Property and asset insurance",
        "Business interruption coverage",
        "Public and product liability",
        "Professional indemnity",
        "Employee group life and health",
        "Workmen's compensation",
        "Cyber liability insurance",
        "Goods in transit",
      ],
      whoIsItFor: [
        "Small and medium enterprises",
        "Large corporations",
        "Professional service providers",
        "Manufacturers and retailers",
      ],
      benefits: [
        "Customized packages for different industries",
        "Risk assessment and management support",
        "Quick claims settlement",
        "Business continuity protection",
      ],
    },
    travel: {
      title: "Travel Insurance",
      icon: Plane,
      color: "text-[#0d000a]",
      bgColor: "brand-section-soft",
      description: "Travel with peace of mind knowing you're protected against medical emergencies and trip disruptions.",
      longDescription: "Whether traveling for business or leisure, within Africa or internationally, our travel insurance covers medical emergencies, trip cancellations, lost baggage, and more.",
      coverage: [
        "Medical expenses abroad",
        "Emergency medical evacuation",
        "Trip cancellation and interruption",
        "Lost, stolen, or delayed baggage",
        "Flight delays and missed connections",
        "Personal liability while traveling",
        "24/7 emergency assistance",
        "Adventure sports coverage (optional)",
      ],
      whoIsItFor: [
        "International travelers",
        "Business travelers",
        "Students studying abroad",
        "Adventure and sports enthusiasts",
      ],
      benefits: [
        "Worldwide coverage",
        "Single trip or annual multi-trip options",
        "Family travel packages",
        "Instant policy issuance",
      ],
    },
    education: {
      title: "Education Plans",
      icon: GraduationCap,
      color: "text-[#fedd00]",
      bgColor: "brand-section-dark",
      description: "Invest in your child's future education with savings and protection plans that guarantee school fees.",
      longDescription: "Our education insurance plans combine savings and life cover to ensure your child's education continues uninterrupted, even in unforeseen circumstances.",
      coverage: [
        "School fees protection",
        "University and higher education funding",
        "Bonus payments at key educational milestones",
        "Life cover for the parent/guardian",
        "Guaranteed maturity benefits",
        "Flexible payment terms",
        "Option to increase cover as child grows",
        "Tax-efficient savings",
      ],
      whoIsItFor: [
        "Parents planning for children's education",
        "Guardians responsible for dependents",
        "Grandparents contributing to education",
        "Anyone wanting to secure education funding",
      ],
      benefits: [
        "Guaranteed education funding",
        "Protection if parent passes away",
        "Investment growth potential",
        "Discipline in saving for education",
      ],
    },
  };

  const product = productData[productId as string];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Product Not Found</h1>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <section className={`${product.bgColor} py-16`}>
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
            </Link>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center shadow-md">
              <product.icon className={`h-10 w-10 ${product.color}`} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{product.title}</h1>
            </div>
          </div>
          <p className={`text-xl max-w-3xl ${product.bgColor === "brand-section-dark" ? "text-[#f3f2f2]/78" : "text-[#0d000a]/72"}`}>{product.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl mb-4 font-bold text-[#0d000a]">Overview</h2>
            <p className="text-lg text-[#0d000a]/72 mb-8">{product.longDescription}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="brand-card">
                <CardHeader>
                  <CardTitle>What's Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.coverage.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#fedd00] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0d000a]/72">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="brand-card">
                  <CardHeader>
                    <CardTitle>Who Is This For?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.whoIsItFor.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#0d000a] rounded-full mt-2"></div>
                          <span className="text-[#0d000a]/72">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="brand-card">
                  <CardHeader>
                    <CardTitle>Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.benefits.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#fedd00] flex-shrink-0 mt-0.5" />
                          <span className="text-[#0d000a]/72">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-[#f3f2f2]/80 mb-8 max-w-2xl mx-auto">
            Request a personalized quote for {product.title.toLowerCase()} today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#fedd00] text-[#0d000a] hover:bg-[#fedd00]/90">
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#fedd00]/40 bg-white/5 text-white hover:bg-white/10">
              <Link to="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
