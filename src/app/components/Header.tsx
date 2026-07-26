import { Link, useLocation } from "react-router";
import { Shield, Menu, X, Home, Info, Package, Handshake, HelpCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Header() {
  const location = useLocation();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastScrollY.current && y > 120 && !mobileMenuOpen);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: t("nav.home"), icon: Home },
    { path: "/about", label: t("nav.about"), icon: Info },
    { path: "/products", label: t("nav.products"), icon: Package },
    { path: "/partners", label: t("nav.partners"), icon: Handshake },
    { path: "/faq", label: t("nav.faq"), icon: HelpCircle },
    { path: "/contact", label: t("nav.contact"), icon: Phone },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-transform duration-500 ease-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "bg-[#ffffff]/88 backdrop-blur-xl border-b border-[#6d001a]/35 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              : "bg-[#ffffff]/96 border-b border-[#262626]/8"
          }`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex items-center justify-between transition-all duration-500 ${
                scrolled ? "h-16" : "h-20"
              }`}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div
                  className={`bg-[#6d001a] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-[#6d001a]/50 group-hover:scale-110 transition-all duration-500 animate-float ${
                    scrolled ? "w-10 h-10" : "w-12 h-12"
                  }`}
                >
                  <Shield className={`text-white transition-all duration-500 ${scrolled ? "h-5 w-5" : "h-6 w-6"}`} />
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
                className="lg:hidden p-2 hover:bg-[#6d001a]/16 rounded-xl transition-colors relative z-10"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileMenuOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6 text-[#262626]" /> : <Menu className="h-6 w-6 text-[#262626]" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden fixed inset-0 top-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden absolute left-4 right-4 top-full mt-3 z-40 bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-[#262626]/8 overflow-hidden"
            >
              <div className="flex flex-col p-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                        isActive(link.path)
                          ? "bg-[#6d001a] text-white shadow-md shadow-[#6d001a]/20"
                          : "text-[#262626]/80 hover:bg-[#6d001a]/10"
                      }`}
                    >
                      <link.icon className={`h-4 w-4 ${isActive(link.path) ? "text-white" : "text-[#6d001a]"}`} />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: navLinks.length * 0.04 }}
                  className="mt-2 pt-3 border-t border-[#262626]/8"
                >
                  <Button asChild className="w-full bg-[#6d001a] text-white">
                    <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav.getQuote")}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
