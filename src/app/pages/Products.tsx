import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

export function Products() {
  const products = [
    {
      id: "motor",
      title: "Motor Insurance",
      description: "Comprehensive coverage for your vehicle including third-party, theft, and accident protection",
      image: "https://images.unsplash.com/photo-1684892276099-cb0f223ded65?w=800&q=80",
      features: ["Third Party Cover", "Comprehensive Cover", "Windscreen Protection", "Theft Coverage"],
    },
    {
      id: "health",
      title: "Health Insurance",
      description: "Quality healthcare coverage for you and your family with access to top medical facilities",
      image: "https://images.unsplash.com/photo-1666886573553-6548db92db79?w=800&q=80",
      features: ["Inpatient Cover", "Outpatient Cover", "Maternity Cover", "Dental & Optical"],
    },
    {
      id: "life",
      title: "Life Insurance",
      description: "Secure your family's financial future with comprehensive life coverage",
      image: "https://images.unsplash.com/photo-1596510914965-9ae08acae566?w=800&q=80",
      features: ["Term Life", "Whole Life", "Group Life", "Critical Illness"],
    },
  ];

  return (
    <div>
      <section className="brand-hero py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="brand-pill mb-5">Protection for every life stage</div>
          <h1 className="text-5xl md:text-6xl mb-4 text-[#262626] font-bold">Insurance Products</h1>
          <p className="text-xl text-[#262626]/70 max-w-3xl">
            Comprehensive insurance solutions for every stage of life and business
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="brand-card border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="relative pt-6">
                  <CardTitle className="text-2xl mb-2 text-[#262626]">{product.title}</CardTitle>
                  <CardDescription className="text-base text-[#262626]/65">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-[#262626]/60">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-[#262626]/75 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#6d001a]"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button asChild className="flex-1 text-white bg-[#6d001a]">
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

      <section className="brand-section-dark py-16 border-t border-[#262626]/8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#262626]">Not Sure Which Product Is Right for You?</h2>
          <p className="text-xl text-[#262626]/70 mb-8 max-w-2xl mx-auto">
            Our expert advisors are here to help you choose the perfect coverage for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-[#6d001a] text-white hover:bg-[#6d001a]/90">
              <Link to="/contact">Speak to an Advisor</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#6d001a]/40 text-[#6d001a] hover:bg-[#6d001a]/5">
              <Link to="/quote">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
