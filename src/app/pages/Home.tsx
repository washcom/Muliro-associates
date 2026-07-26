import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import {
  Car, Heart, LifeBuoy, ArrowRight
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

/* ─── slide data (Unsplash — no embed/CORS issues) ─── */
const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1664181220731-06219378d8c7?w=1200&q=80",
    tag: "Motor",
    caption: "Coverage that keeps you moving",
  },
  {
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80",
    tag: "Health",
    caption: "Quality care when you need it most",
  },
  {
    img: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?w=1200&q=80",
    tag: "Life",
    caption: "Protecting the people who matter",
  },
  {
    img: "https://images.unsplash.com/photo-1781504798134-53a5a833c34f?w=1200&q=80",
    tag: "Property",
    caption: "Peace of mind for what you own",
  },
  {
    img: "https://images.unsplash.com/photo-1656049471454-ff3c59812741?w=1200&q=80",
    tag: "Savings",
    caption: "Building security for the future",
  },
  {
    img: "https://images.unsplash.com/photo-1741991110666-88115e724741?w=1200&q=80",
    tag: "Trust",
    caption: "A partnership built to last",
  },
  {
    img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=80",
    tag: "Care",
    caption: "Expert guidance, every step",
  },
  {
    img: "https://images.unsplash.com/photo-1581578731509-8ae9c5a3e7d3?w=1200&q=80",
    tag: "Family",
    caption: "Coverage for every stage of life",
  },
  {
    img: "https://images.unsplash.com/photo-1661963603110-632028a09c19?w=1200&q=80",
    tag: "Drive",
    caption: "On the road, fully protected",
  },
  {
    img: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?w=1200&q=80",
    tag: "Policy",
    caption: "Clear terms, no surprises",
  },
];

export function Home() {
  const { t } = useLanguage();

  /* ── carousel ── */
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;
  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  /* ── data ── */
  const products = [
    { id: "motor",  title: t("home.products.motor"),  description: t("home.products.motorDesc"),  icon: Car },
    { id: "health", title: t("home.products.health"), description: t("home.products.healthDesc"), icon: Heart },
    { id: "life",   title: t("home.products.life"),   description: t("home.products.lifeDesc"),   icon: LifeBuoy },
  ];

  const features = [
    { title: t("home.features.licensed"),     description: t("home.features.licensedDesc") },
    { title: t("home.features.experts"),      description: t("home.features.expertsDesc") },
    { title: t("home.features.underwriters"), description: t("home.features.underwritersDesc") },
    { title: t("home.features.claims"),       description: t("home.features.claimsDesc") },
  ];

  return (
    <div className="font-sans">

      {/* ══════════════════════════════════════════
          HERO — full-bleed image carousel
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[70vh] lg:min-h-[85vh]">

        {/* track */}
        <div
          className="absolute inset-0 flex transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
          style={{ transform: `translateX(-${(current * 100) / total}%)`, width: `${total * 100}%` }}
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 h-full"
              style={{ width: `${100 / total}%` }}
            >
              <img
                src={slide.img}
                alt={slide.caption}
                className="w-full h-full object-cover brightness-75"
              />
              {/* caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <span className="inline-block bg-[#6d001a] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2">
                  {slide.tag}
                </span>
                <p className="text-white text-xl font-bold leading-snug">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* dots — top right */}
        <div className="absolute top-5 right-5 flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#6d001a]" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* arrows — bottom right, desktop only */}
        <div className="hidden sm:flex absolute bottom-6 right-6 gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white/20 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-[#6d001a] text-white font-bold flex items-center justify-center hover:bg-[#6d001a]/90 transition"
          >
            →
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-[#6d001a] text-xs font-bold uppercase tracking-[3px] mb-2">
            Why choose us
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight">
            {t("home.features.title")}
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-8">
            {features.map((f, i) => (
              <Card
                key={i}
                className="group border border-gray-100 hover:border-[#6d001a] hover:-translate-y-1 transition-all duration-200 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-base font-bold">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-500 leading-relaxed">
                  {f.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-[#262626]/8">
        <div className="container mx-auto px-6">
          <p className="text-[#6d001a] text-xs font-bold uppercase tracking-[3px] mb-2">
            Our Products
          </p>
          <h2 className="text-4xl font-extrabold text-[#262626] tracking-tight">
            {t("home.products.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="group brand-card border-0 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-lg bg-[#6d001a] flex items-center justify-center mb-3">
                      <product.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-[#262626] text-base font-bold">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-[#262626]/60 text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                    <p className="text-[#6d001a] text-xs font-semibold mt-3">
                      Explore →
                    </p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-white text-center border-t border-[#262626]/8">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#262626] tracking-tight max-w-xl mx-auto leading-tight">
          {t("home.cta.title")}
        </h2>
        <p className="mt-4 text-[#262626]/70 text-base max-w-md mx-auto">
          Join thousands of satisfied clients who trust us for their coverage needs.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-[#6d001a] text-white font-bold hover:bg-[#6d001a]/90 transition-all hover:-translate-y-0.5"
        >
          <Link to="/quote">
            Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

    </div>
  );
}