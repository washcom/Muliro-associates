import { useParams, Link } from "react-router";
import { useState, useEffect, type ReactNode } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "../components/ui/carousel";
import { CheckCircle2, ArrowLeft } from "lucide-react";

function CarouselSlideImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="w-full h-72 sm:h-80 md:h-96 bg-[#6d001a]/10" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-72 sm:h-80 md:h-96 object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function TruncatedList({
  items,
  previewCount = 4,
  bullet,
}: {
  items: string[];
  previewCount?: number;
  bullet: (item: string, index: number) => ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = items.length - previewCount;

  return (
    <>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className={`items-start gap-3 ${
              index >= previewCount ? (expanded ? "flex" : "hidden sm:flex") : "flex"
            }`}
          >
            {bullet(item, index)}
          </li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="sm:hidden text-sm font-semibold text-[#6d001a] mt-3"
        >
          {expanded ? "Show less" : `Show ${hiddenCount} more`}
        </button>
      )}
    </>
  );
}

function ProductHeroCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#6d001a]/10">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="-ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="pl-0">
              <CarouselSlideImage src={src} alt={`${alt} ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    motor: {
      title: "Motor Insurance",
      images: [
        "https://images.unsplash.com/photo-1543245883-b631737145f0?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543245924-0b171b1d7303?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1664181220731-06219378d8c7?q=80&w=1200&auto=format&fit=crop",
      ],
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
      images: [
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1631980838568-8859e153f037?q=80&w=1200&auto=format&fit=crop",
      ],
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
      images: [
        "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1585306873915-981cc5ba5b77?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1759217801409-f95619d6c1e2?q=80&w=1200&auto=format&fit=crop",
      ],
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
      <section className={`${product.bgColor} py-6 sm:py-12`}>
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 -ml-4">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-[#262626]">{product.title}</h1>
              <p className="text-xl max-w-xl text-[#262626]/72">{product.description}</p>
            </div>

            <ProductHeroCarousel images={product.images} alt={product.title} />
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl mb-4 font-bold text-[#262626]">Overview</h2>
            <p className="text-lg text-[#262626]/72">{product.longDescription}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="brand-card">
              <CardHeader>
                <CardTitle>What's Covered</CardTitle>
              </CardHeader>
              <CardContent>
                <TruncatedList
                  items={product.coverage}
                  previewCount={4}
                  bullet={(item) => (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-[#6d001a] flex-shrink-0 mt-0.5" />
                      <span className="text-[#262626]/72">{item}</span>
                    </>
                  )}
                />
              </CardContent>
            </Card>

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
