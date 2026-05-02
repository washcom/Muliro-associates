import { Link, useLocation } from "react-router";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { LanguageToggle } from "./LanguageToggle";
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
    { path: "/blog", label: t("nav.blog") },
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
        ? "bg-[#f3f2f2]/88 backdrop-blur-xl border-b border-[#fedd00]/35 shadow-[0_20px_60px_rgba(13,0,10,0.12)]"
        : "bg-[#f3f2f2]/96 border-b border-[#0d000a]/8"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-[#fedd00] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#fedd00]/50 group-hover:scale-110 transition-all duration-500 animate-float">
              <Shield className="h-6 w-6 text-[#0d000a]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#0d000a]">Muliro & Associates</span>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#0d000a]/58">{t("footer.tagline")}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-[#0d000a] text-[#fedd00] shadow-lg shadow-black/20"
                    : "text-[#0d000a]/76 hover:bg-[#fedd00]/22 hover:text-[#0d000a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <Button asChild className="bg-[#fedd00] text-[#0d000a] shadow-lg shadow-[#fedd00]/25 hover:bg-[#fedd00]/90 hover:shadow-2xl hover:shadow-[#fedd00]/40">
              <Link to="/quote">{t("nav.getQuote")}</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-[#fedd00]/20 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-[#0d000a]" /> : <Menu className="h-6 w-6 text-[#0d000a]" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-[#0d000a]/10 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm transition-all ${
                    isActive(link.path)
                      ? "bg-[#0d000a] text-[#fedd00] font-semibold"
                      : "text-[#0d000a]/80 hover:bg-[#fedd00]/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <LanguageToggle />
              <Button asChild className="w-full mt-4 bg-[#fedd00] text-[#0d000a]">
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
