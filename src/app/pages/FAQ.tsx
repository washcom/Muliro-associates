import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is an insurance intermediary?",
          answer: "An insurance intermediary acts as a bridge between clients and insurance companies. Unlike insurance agents who represent one company, we work independently to find you the best coverage from multiple underwriters. This ensures you get unbiased advice and competitive rates."
        },
        {
          question: "How is Muliro & Associates different from buying directly from an insurance company?",
          answer: "When you work with us, you get access to multiple insurance companies and their products. We compare coverage options and premiums across different underwriters to find the best fit for your needs. You also benefit from our expertise and claims support throughout your policy period."
        },
        {
          question: "Do I pay extra for using your services?",
          answer: "No! Our services are free to you. We receive commissions from the insurance companies when you purchase a policy, but this doesn't increase your premium. You pay the same rate you would if buying directly, but with the added benefit of our expert advice and support."
        },
        {
          question: "Are you licensed to sell insurance in Kenya?",
          answer: "Yes, Muliro & Associates is fully licensed and regulated by the Insurance Regulatory Authority (IRA) of Kenya. All our advisors are certified professionals with the required qualifications."
        },
      ]
    },
    {
      category: "Products & Coverage",
      questions: [
        {
          question: "What types of insurance do you offer?",
          answer: "We offer a comprehensive range of insurance products including Motor Insurance, Health Insurance, Life Insurance, Business Insurance, Travel Insurance, and Education Plans. We can also help with specialized coverage for unique needs."
        },
        {
          question: "Can I customize my insurance coverage?",
          answer: "Absolutely! We work with you to tailor insurance solutions to your specific needs. Whether you need basic coverage or comprehensive protection, we can find or create a package that fits your requirements and budget."
        },
        {
          question: "How do I know which insurance product is right for me?",
          answer: "Our expert advisors will conduct a needs assessment to understand your situation, risks, and budget. We'll then recommend suitable products from our partner underwriters and explain the pros and cons of each option."
        },
      ]
    },
    {
      category: "Quotes & Purchasing",
      questions: [
        {
          question: "How long does it take to get a quote?",
          answer: "You'll typically receive a personalized quote within 24 hours of submitting your request. For urgent requests, we can often provide quotes the same day. Call us directly for faster service."
        },
        {
          question: "What information do I need to provide to get a quote?",
          answer: "This depends on the type of insurance. Generally, we'll need your personal details, information about what you want to insure (vehicle, health status, business details, etc.), and your coverage preferences. Our quote form guides you through the required information."
        },
        {
          question: "Can I purchase a policy online?",
          answer: "Yes! Once you've received and reviewed your quote, we can process most policies online. Some products may require additional documentation or verification, which our team will guide you through."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including M-Pesa, bank transfers, checks, and credit/debit cards. Payment plans and installment options are available for most policies."
        },
      ]
    },
    {
      category: "Claims & Support",
      questions: [
        {
          question: "How do I file a claim?",
          answer: "Contact us immediately when you need to file a claim. We'll guide you through the process, help you complete the necessary documentation, and liaise with the insurance company on your behalf. Our claims support team ensures a smooth and fast settlement."
        },
        {
          question: "How long does it take to process a claim?",
          answer: "Processing times vary depending on the type of claim and the insurer. Simple claims can be settled within days, while more complex ones may take weeks. We actively follow up on your behalf to ensure timely settlement."
        },
        {
          question: "What should I do in case of an emergency?",
          answer: "For emergencies (accidents, medical emergencies, etc.), contact the emergency number provided on your insurance card first. Then notify us as soon as possible. We provide 24/7 emergency claims support."
        },
        {
          question: "Can you help if my claim is denied?",
          answer: "Yes! If a claim is denied, we'll review the decision, explain the reasons, and help you appeal if appropriate. We advocate for your interests and work to ensure fair treatment."
        },
      ]
    },
    {
      category: "Policy Management",
      questions: [
        {
          question: "How do I renew my insurance policy?",
          answer: "We'll remind you before your policy expires. You can renew through us by confirming your coverage needs, and we'll process the renewal. This is also a good time to review your coverage and make any necessary adjustments."
        },
        {
          question: "Can I cancel my policy?",
          answer: "Yes, you can cancel most policies. However, cancellation terms vary by insurer and policy type. Contact us to discuss your options, potential refunds, and any implications of cancellation."
        },
        {
          question: "What happens if I miss a premium payment?",
          answer: "Grace periods vary by policy type. Contact us immediately if you're having trouble making a payment. We can help you understand your options, including payment plans or policy adjustments."
        },
        {
          question: "Can I change my coverage during the policy period?",
          answer: "In most cases, yes. You can increase or decrease coverage, add beneficiaries, or make other changes. Contact us to discuss the changes you need, and we'll help you process them with your insurer."
        },
      ]
    },
  ];

  return (
    <div>
      <section className="brand-hero py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-12 w-12 text-[#6d001a]" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#262626]">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-[#262626]/70 max-w-3xl">
            Find answers to common questions about insurance and our services
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl md:text-3xl mb-6 text-[#262626] font-bold">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="brand-card border rounded-[1.5rem] px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-[#262626]/72 pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section-soft py-16">
        <div className="container mx-auto px-4">
          <Card className="brand-card max-w-3xl mx-auto text-center border-2 border-transparent">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Still Have Questions?</CardTitle>
              <CardDescription className="text-lg">
                Our team is here to help. Get in touch and we'll provide the answers you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/quote">Request a Quote</Link>
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-[#262626]/60 mb-2">Or call us directly:</p>
                <a href="tel:+254768777041" className="text-2xl brand-link font-bold">
                  +254 768 777 041
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
