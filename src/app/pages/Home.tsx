import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import {
  Shield, Users, Award, Clock, Car, Heart, Building2,
  Plane, GraduationCap, LifeBuoy, ArrowRight, Sparkles
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

/* ─── slide data (Unsplash — no embed/CORS issues) ─── */
const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    tag: "Growth",
    caption: "Data-driven campaigns that convert",
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    tag: "Analytics",
    caption: "Insights that fuel smarter decisions",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    tag: "Strategy",
    caption: "Creative technology, real results",
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
    { id: "motor",     title: t("home.products.motor"),     description: t("home.products.motorDesc"),     icon: Car },
    { id: "health",    title: t("home.products.health"),    description: t("home.products.healthDesc"),    icon: Heart },
    { id: "life",      title: t("home.products.life"),      description: t("home.products.lifeDesc"),      icon: LifeBuoy },
    { id: "business",  title: t("home.products.business"),  description: t("home.products.businessDesc"),  icon: Building2 },
    { id: "travel",    title: t("home.products.travel"),    description: t("home.products.travelDesc"),    icon: Plane },
    { id: "education", title: t("home.products.education"), description: t("home.products.educationDesc"), icon: GraduationCap },
  ];

  const features = [
    { icon: Shield, title: t("home.features.licensed"),     description: t("home.features.licensedDesc") },
    { icon: Users,  title: t("home.features.experts"),      description: t("home.features.expertsDesc") },
    { icon: Award,  title: t("home.features.underwriters"), description: t("home.features.underwritersDesc") },
    { icon: Clock,  title: t("home.features.claims"),       description: t("home.features.claimsDesc") },
  ];

  return (
    <div className="font-sans">

      {/* ══════════════════════════════════════════
          HERO — split screen
      ══════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 min-h-[88vh]">

        {/* LEFT — black panel */}
        <div className="bg-black flex flex-col justify-center px-10 py-20 lg:px-16">

          {/* badge */}
          <div className="inline-flex items-center gap-2 w-fit border border-zinc-800 bg-zinc-900 text-orange-500 text-xs font-semibold tracking-wide px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Conversion-first digital growth
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Turn Clicks<br />
            into{" "}
            <span className="text-yellow-400">Conversions</span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md">
            Blend data, creativity, and technology to build meaningful engagement and sustainable digital growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all hover:-translate-y-0.5"
            >
              <Link to="/quote">
                Start Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white hover:border-zinc-400 hover:bg-transparent transition-all hover:-translate-y-0.5"
            >
              <Link to="/about">Learn more</Link>
            </Button>
          </div>

          {/* stats */}
          <div className="mt-12 pt-8 border-t border-zinc-800 flex gap-10">
            {[
              { num: "98%",  label: "Client satisfaction" },
              { num: "12K+", label: "Policies issued" },
              { num: "24h",  label: "Claims response" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-yellow-400">{s.num}</div>
                <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image carousel (no iframes!) */}
        <div className="relative overflow-hidden bg-zinc-900">

          {/* track */}
          <div
            className="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
            style={{ transform: `translateX(-${current * 100}%)`, width: `${total * 100}%` }}
          >
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className="relative flex-shrink-0"
                style={{ width: `${100 / total}%` }}
              >
                <img
                  src={slide.img}
                  alt={slide.caption}
                  className="w-full h-full object-cover brightness-75"
                />
                {/* caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <span className="inline-block bg-yellow-400 text-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2">
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
                  i === current ? "w-6 bg-yellow-400" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* arrows — bottom right */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-white/20 transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center hover:bg-yellow-300 transition"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-[3px] mb-2">
            Why choose us
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight">
            {t("home.features.title")}
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-14">
            {features.map((f, i) => (
              <Card
                key={i}
                className="group border border-gray-100 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-200 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-yellow-400" />
                  </div>
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
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-[3px] mb-2">
            Our Products
          </p>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            {t("home.products.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-5 mt-14">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <Card className="group bg-zinc-900 border border-zinc-800 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden">
                  <CardHeader>
                    <div className="w-11 h-11 rounded-lg border border-zinc-700 flex items-center justify-center mb-3">
                      <product.icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-white text-base font-bold">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-500 text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                    <p className="text-yellow-400 text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
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
      <section className="py-24 bg-yellow-400 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight max-w-xl mx-auto leading-tight">
          {t("home.cta.title")}
        </h2>
        <p className="mt-4 text-zinc-700 text-base max-w-md mx-auto">
          Join thousands of satisfied clients who trust us for their coverage needs.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-black text-yellow-400 font-bold hover:bg-zinc-800 transition-all hover:-translate-y-0.5"
        >
          <Link to="/quote">
            Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

    </div>
  );
}