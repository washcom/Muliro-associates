import { Link, useLocation } from "react-router";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

export function Header() {
  const location = useLocation();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/products", label: t("nav.products") },
    { path: "/partners", label: t("nav.partners") },
    { path: "/faq", label: t("nav.faq") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 animate-fade-in ${
      scrolled
        ? "bg-[#ffffff]/88 backdrop-blur-xl border-b border-[#6d001a]/35 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        : "bg-[#ffffff]/96 border-b border-[#262626]/8"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#6d001a] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#6d001a]/50 group-hover:scale-110 transition-all duration-500 animate-float">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#262626]">Muliro & Associates</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#262626]/58">{t("footer.tagline")}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-[#6d001a] text-white shadow-lg shadow-black/20"
                    : "text-[#262626]/76 hover:bg-[#6d001a]/16 hover:text-[#262626]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-[#6d001a] text-white shadow-lg shadow-[#6d001a]/25 hover:bg-[#6d001a]/90 hover:shadow-2xl hover:shadow-[#6d001a]/40">
              <Link to="/quote">{t("nav.getQuote")}</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-[#6d001a]/16 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-[#262626]" /> : <Menu className="h-6 w-6 text-[#262626]" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-[#262626]/10 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm transition-all ${
                    isActive(link.path)
                      ? "bg-[#6d001a] text-white font-semibold"
                      : "text-[#262626]/80 hover:bg-[#6d001a]/16"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4 bg-[#6d001a] text-white">
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  {t("nav.getQuote")}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
