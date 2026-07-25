import { useParams, Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Car, Heart, LifeBuoy, CheckCircle2, ArrowLeft } from "lucide-react";

export function ProductDetail() {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    motor: {
      title: "Motor Insurance",
      icon: Car,
      color: "text-[#6d001a]",
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
      color: "text-[#6d001a]",
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
      color: "text-[#6d001a]",
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
  };

  const product = productData[productId as string];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl mb-4">Product Not Found</h1>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <section className={`${product.bgColor} py-10`}>
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{product.title}</h1>
            </div>
          </div>
          <p className="text-xl max-w-3xl text-[#262626]/72">{product.description}</p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl mb-4 font-bold text-[#262626]">Overview</h2>
            <p className="text-lg text-[#262626]/72 mb-6">{product.longDescription}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="brand-card">
                <CardHeader>
                  <CardTitle>What's Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.coverage.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#6d001a] flex-shrink-0 mt-0.5" />
                        <span className="text-[#262626]/72">{item}</span>
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
                          <div className="w-2 h-2 bg-[#262626] rounded-full mt-2"></div>
                          <span className="text-[#262626]/72">{item}</span>
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
                          <CheckCircle2 className="h-5 w-5 text-[#6d001a] flex-shrink-0 mt-0.5" />
                          <span className="text-[#262626]/72">{item}</span>
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

      <section className="brand-section-dark py-10 border-t border-[#262626]/8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#262626]">Ready to Get Started?</h2>
          <p className="text-xl text-[#262626]/70 mb-6 max-w-2xl mx-auto">
            Request a personalized quote for {product.title.toLowerCase()} today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#6d001a] text-white hover:bg-[#6d001a]/90">
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#6d001a]/40 text-[#6d001a] hover:bg-[#6d001a]/5">
              <Link to="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
