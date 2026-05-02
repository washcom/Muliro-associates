import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sw";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.partners": "Partners",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a Quote",

    // Home Page
    "home.hero.badge": "Trusted by 5,000+ Kenyans",
    "home.hero.title": "Protecting What Matters Most",
    "home.hero.subtitle": "Your trusted insurance intermediary in Kenya. We help individuals and businesses find the perfect insurance coverage from top underwriters.",
    "home.hero.talkToAdvisor": "Talk to an Advisor",
    "home.hero.panelLabel": "Independent advice",
    "home.hero.panelBody": "We help you compare cover options with the risks, costs, and obligations explained in plain language before you commit.",
    "home.hero.processBody": "A simple three-step path from first conversation to cover placement and claims support.",
    "home.hero.sidebarLabel": "How We Work",
    "home.hero.sidebarTitle": "A practical insurance desk, not a generic marketing page.",

    // Features
    "home.features.badge": "IRA Licensed & Regulated",
    "home.features.title": "Why Choose Us",
    "home.features.subtitle": "We are a leading insurance intermediary in Kenya, dedicated to connecting you with the best insurance solutions from trusted underwriters.",
    "home.features.licensed": "Licensed & Regulated",
    "home.features.licensedDesc": "Fully licensed by the Insurance Regulatory Authority (IRA) of Kenya",
    "home.features.experts": "Expert Advisors",
    "home.features.expertsDesc": "Experienced professionals to guide your insurance decisions",
    "home.features.underwriters": "Top Underwriters",
    "home.features.underwritersDesc": "Partnered with Kenya's leading insurance companies",
    "home.features.claims": "Quick Claims",
    "home.features.claimsDesc": "Fast and efficient claims processing support",

    // Products
    "home.products.title": "Our Insurance Products",
    "home.products.subtitle": "Comprehensive coverage solutions for every need",
    "home.products.motor": "Motor Insurance",
    "home.products.motorDesc": "Comprehensive coverage for your vehicle",
    "home.products.health": "Health Insurance",
    "home.products.healthDesc": "Quality healthcare for you and your family",
    "home.products.life": "Life Insurance",
    "home.products.lifeDesc": "Secure your family's financial future",
    "home.products.business": "Business Insurance",
    "home.products.businessDesc": "Protect your business from risks",
    "home.products.travel": "Travel Insurance",
    "home.products.travelDesc": "Travel with peace of mind",
    "home.products.education": "Education Plans",
    "home.products.educationDesc": "Invest in your child's future",
    "home.products.learnMore": "Learn More",
    "home.products.viewAll": "View All Products",

    // Process
    "home.process.title": "Our process",
    "home.process.listenTitle": "We listen first",
    "home.process.listenDesc": "We begin with your situation, your assets, your dependants, or your business operations before suggesting any cover.",
    "home.process.compareTitle": "We compare options",
    "home.process.compareDesc": "We review suitable underwriters, highlight trade-offs, and help you understand what is included, excluded, and optional.",
    "home.process.supportTitle": "We stay involved",
    "home.process.supportDesc": "From placement to renewal and claims follow-up, you keep working with people who know your file.",

    // Stats
    "home.stats.title": "Trusted by Thousands of Kenyans",
    "home.stats.subtitle": "Join the many individuals and businesses who trust Muliro & Associates for their insurance needs",
    "home.stats.experience": "Years of Experience",
    "home.stats.clients": "Happy Clients",
    "home.stats.partners": "Insurance Partners",

    // CTA
    "home.cta.badge": "Independent & Client-Focused",
    "home.cta.title": "Why Choose Muliro & Associates?",
    "home.cta.subtitle": "As an independent insurance intermediary, we work for you, not the insurance companies. Our goal is to find you the best coverage at competitive rates.",
    "home.cta.readyTitle": "Ready to Get Started?",
    "home.cta.readyDesc": "Request a quote today and let our experts find the perfect insurance solution for you.",
    "home.cta.requestQuote": "Request a Quote",
    "home.cta.callDirect": "Or call us directly:",

    // Footer
    "footer.tagline": "Your Insurance Partner",
    "footer.description": "Trusted insurance intermediary in Kenya, providing comprehensive coverage solutions for individuals and businesses.",
    "footer.quickLinks": "Quick Links",
    "footer.insuranceProducts": "Insurance Products",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved. Licensed by the Insurance Regulatory Authority (IRA) of Kenya.",

    // Common
    "common.getQuote": "Get Quote",
    "common.loading": "Loading...",
    "common.submit": "Submit",
    "common.learnMore": "Learn More",
  },
  sw: {
    // Header
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu Sisi",
    "nav.products": "Bidhaa",
    "nav.partners": "Washirika",
    "nav.blog": "Blogu",
    "nav.faq": "Maswali",
    "nav.contact": "Wasiliana",
    "nav.getQuote": "Pata Nukuu",

    // Home Page
    "home.hero.badge": "Tunaaminika na Wakenya 5,000+",
    "home.hero.title": "Kulinda Kinachohusika Zaidi",
    "home.hero.subtitle": "Mpatanishi wako wa bima unayeaminika nchini Kenya. Tunasaidia watu binafsi na biashara kupata bima bora kutoka kwa waandikishaji wakuu.",
    "home.hero.talkToAdvisor": "Zungumza na Mshauri",
    "home.hero.panelLabel": "Ushauri huru",
    "home.hero.panelBody": "Tunakusaidia kulinganisha chaguo za bima huku tukieleza hatari, gharama, na wajibu kwa lugha rahisi kabla hujafanya uamuzi.",
    "home.hero.processBody": "Njia rahisi ya hatua tatu kutoka mazungumzo ya kwanza hadi kupata bima na usaidizi wa madai.",
    "home.hero.sidebarLabel": "Jinsi Tunavyofanya Kazi",
    "home.hero.sidebarTitle": "Dawati la bima la vitendo, si ukurasa wa kawaida wa matangazo.",

    // Features
    "home.features.badge": "Leseni ya IRA & Kudhibitiwa",
    "home.features.title": "Kwa Nini Utuchague",
    "home.features.subtitle": "Sisi ni mpatanishi mkuu wa bima nchini Kenya, tumejitolea kuwapatia suluhisho bora za bima kutoka kwa waandikishaji wanaoaminika.",
    "home.features.licensed": "Leseni & Kudhibitiwa",
    "home.features.licensedDesc": "Leseni kamili kutoka Mamlaka ya Udhibiti wa Bima (IRA) ya Kenya",
    "home.features.experts": "Washauri Wataalam",
    "home.features.expertsDesc": "Wataalamu wenye uzoefu kukuongoza katika maamuzi ya bima",
    "home.features.underwriters": "Waandikishaji Wakuu",
    "home.features.underwritersDesc": "Washirika na makampuni makuu ya bima nchini Kenya",
    "home.features.claims": "Madai ya Haraka",
    "home.features.claimsDesc": "Usaidizi wa haraka na ufanisi katika kuchakata madai",

    // Products
    "home.products.title": "Bidhaa Zetu za Bima",
    "home.products.subtitle": "Suluhisho kamili za bima kwa kila mahitaji",
    "home.products.motor": "Bima ya Gari",
    "home.products.motorDesc": "Bima kamili kwa gari lako",
    "home.products.health": "Bima ya Afya",
    "home.products.healthDesc": "Huduma ya afya bora kwako na familia yako",
    "home.products.life": "Bima ya Maisha",
    "home.products.lifeDesc": "Linda mustakabali wa kifedha wa familia yako",
    "home.products.business": "Bima ya Biashara",
    "home.products.businessDesc": "Linda biashara yako dhidi ya hatari",
    "home.products.travel": "Bima ya Usafiri",
    "home.products.travelDesc": "Safiri kwa amani ya akili",
    "home.products.education": "Mipango ya Elimu",
    "home.products.educationDesc": "Wekeza katika mustakabali wa mtoto wako",
    "home.products.learnMore": "Jifunze Zaidi",
    "home.products.viewAll": "Angalia Bidhaa Zote",

    // Process
    "home.process.title": "Mchakato wetu",
    "home.process.listenTitle": "Tunaanza kwa kusikiliza",
    "home.process.listenDesc": "Tunaanza na hali yako, mali zako, wanaokutegemea, au shughuli za biashara yako kabla ya kupendekeza bima yoyote.",
    "home.process.compareTitle": "Tunalinganisha chaguo",
    "home.process.compareDesc": "Tunapitia waandikishaji wanaofaa, tunaonyesha tofauti zao, na kukusaidia kuelewa kinachojumuishwa, kinachoondolewa, na kilicho cha hiari.",
    "home.process.supportTitle": "Tunabaki pamoja nawe",
    "home.process.supportDesc": "Kuanzia kupanga bima hadi upyaishaji na ufuatiliaji wa madai, unaendelea kufanya kazi na watu wanaoijua faili yako.",

    // Stats
    "home.stats.title": "Tunaaminika na Maelfu ya Wakenya",
    "home.stats.subtitle": "Jiunge na watu wengi na biashara zinazomwamini Muliro & Associates kwa mahitaji yao ya bima",
    "home.stats.experience": "Miaka ya Uzoefu",
    "home.stats.clients": "Wateja Wenye Furaha",
    "home.stats.partners": "Washirika wa Bima",

    // CTA
    "home.cta.badge": "Huru & Kuzingatia Mteja",
    "home.cta.title": "Kwa Nini Uchague Muliro & Associates?",
    "home.cta.subtitle": "Kama mpatanishi huru wa bima, tunafanya kazi kwako, si kwa makampuni ya bima. Lengo letu ni kukupatia bima bora kwa bei za ushindani.",
    "home.cta.readyTitle": "Uko Tayari Kuanza?",
    "home.cta.readyDesc": "Omba nukuu leo na waache wataalam wetu wakupatieni suluhisho kamili la bima.",
    "home.cta.requestQuote": "Omba Nukuu",
    "home.cta.callDirect": "Au tupigie simu moja kwa moja:",

    // Footer
    "footer.tagline": "Mshirika wako wa Bima",
    "footer.description": "Mpatanishi wa bima unayeaminika nchini Kenya, tukitoa suluhisho kamili za bima kwa watu binafsi na biashara.",
    "footer.quickLinks": "Viungo vya Haraka",
    "footer.insuranceProducts": "Bidhaa za Bima",
    "footer.contactUs": "Wasiliana Nasi",
    "footer.rights": "Haki zote zimehifadhiwa. Leseni na Mamlaka ya Udhibiti wa Bima (IRA) ya Kenya.",

    // Common
    "common.getQuote": "Pata Nukuu",
    "common.loading": "Inapakia...",
    "common.submit": "Tuma",
    "common.learnMore": "Jifunze Zaidi",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
