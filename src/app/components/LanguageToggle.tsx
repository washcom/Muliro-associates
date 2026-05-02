import { useLanguage } from "../contexts/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "sw" : "en")}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d000a] hover:bg-[#0d000a]/90 text-[#fedd00] border-2 border-[#fedd00] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#fedd00]/30"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-bold">{language === "en" ? "Kiswahili" : "English"}</span>
    </button>
  );
}
