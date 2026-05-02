import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Car, Heart, Building2, Plane, GraduationCap, LifeBuoy, ArrowRight } from "lucide-react";

export function Products() {
  const products = [
    {
      id: "motor",
      title: "Motor Insurance",
      description: "Comprehensive coverage for your vehicle including third-party, theft, and accident protection",
      icon: Car,
      color: "#fedd00",
      features: ["Third Party Cover", "Comprehensive Cover", "Windscreen Protection", "Theft Coverage"],
    },
    {
      id: "health",
      title: "Health Insurance",
      description: "Quality healthcare coverage for you and your family with access to top medical facilities",
      icon: Heart,
      color: "#0d000a",
      features: ["Inpatient Cover", "Outpatient Cover", "Maternity Cover", "Dental & Optical"],
    },
    {
      id: "life",
      title: "Life Insurance",
      description: "Secure your family's financial future with comprehensive life coverage",
      icon: LifeBuoy,
      color: "#fedd00",
      features: ["Term Life", "Whole Life", "Group Life", "Critical Illness"],
    },
    {
      id: "business",
      title: "Business Insurance",
      description: "Protect your business assets, operations, and employees from unforeseen risks",
      icon: Building2,
      color: "#0d000a",
      features: ["Property Insurance", "Liability Cover", "Business Interruption", "Employee Benefits"],
    },
    {
      id: "travel",
      title: "Travel Insurance",
      description: "Travel with confidence knowing you're covered for medical emergencies and trip disruptions",
      icon: Plane,
      color: "#fedd00",
      features: ["Medical Cover Abroad", "Trip Cancellation", "Lost Luggage", "Emergency Evacuation"],
    },
    {
      id: "education",
      title: "Education Plans",
      description: "Invest in your child's future with education savings and protection plans",
      icon: GraduationCap,
      color: "#0d000a",
      features: ["School Fees Protection", "University Cover", "Flexible Payments", "Investment Growth"],
    },
  ];

  return (
    <div>
      <section className="brand-hero py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="brand-pill mb-5">Protection for every life stage</div>
          <h1 className="text-5xl md:text-6xl mb-4 text-[#fedd00] font-bold">Insurance Products</h1>
          <p className="text-xl text-[#f3f2f2]/80 max-w-3xl">
            Comprehensive insurance solutions for every stage of life and business
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="brand-card border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: product.color }}></div>
                <CardHeader className="relative">
                  <div className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: product.color }}>
                    <product.icon className={`h-8 w-8 ${product.color === "#fedd00" ? "text-[#0d000a]" : "text-[#fedd00]"}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2 text-[#0d000a]">{product.title}</CardTitle>
                  <CardDescription className="text-base text-[#0d000a]/65">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-[#0d000a]/60">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-[#0d000a]/75 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button asChild className={`flex-1 ${product.color === "#fedd00" ? "bg-[#fedd00] text-[#0d000a]" : "bg-[#0d000a] text-[#fedd00]"}`}>
                        <Link to={`/products/${product.id}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/quote">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">Not Sure Which Product Is Right for You?</h2>
          <p className="text-xl text-[#f3f2f2]/80 mb-8 max-w-2xl mx-auto">
            Our expert advisors are here to help you choose the perfect coverage for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-[#fedd00] text-[#0d000a] hover:bg-[#fedd00]/90">
              <Link to="/contact">Speak to an Advisor</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#fedd00]/40 bg-white/5 text-white hover:bg-white/10">
              <Link to="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
