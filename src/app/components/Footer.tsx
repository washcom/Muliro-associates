import { Link } from "react-router";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6d001a]/25 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#6d001a] rounded-xl flex items-center justify-center shadow-lg shadow-[#6d001a]/30 animate-float">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-xl">Muliro & Associates</div>
                <div className="text-xs text-white/70">{t("footer.tagline")}</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#6d001a] hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#6d001a] hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#6d001a] hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#6d001a] hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/partners" className="text-white/70 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Insurance Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/motor" className="text-white/70 hover:text-white transition-colors">Motor Insurance</Link></li>
              <li><Link to="/products/health" className="text-white/70 hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link to="/products/life" className="text-white/70 hover:text-white transition-colors">Life Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya<br />CBD, Moi Avenue</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span>+254 768 777 041</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <span>mulirofrancis5@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 text-sm text-center">
          <p className="text-white/70">&copy; {new Date().getFullYear()} Muliro & Associates. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
