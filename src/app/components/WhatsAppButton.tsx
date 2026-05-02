import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "254700123456";
  const message = encodeURIComponent("Hello, I would like to inquire about insurance products.");

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:shadow-green-500/50 hover:scale-110 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`transition-all duration-300 ${isHovered ? "pl-6 pr-4 py-4" : "p-4"}`}>
          <MessageCircle className={`h-7 w-7 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />
        </div>
        <span className={`overflow-hidden transition-all duration-300 pr-6 whitespace-nowrap ${
          isHovered ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
        }`}>
          Chat with us
        </span>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
      </a>
    </div>
  );
}
