import { CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all our dealings",
    },
    {
      title: "Client-Focused",
      description: "Your needs and interests always come first",
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in service delivery",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies to serve you better",
    },
  ];

  const whyChooseUs = [
    "Independent advice, not tied to one insurer",
    "Access to Kenya's top-rated underwriters",
    "Competitive rates through our network",
    "Full claims support, start to finish",
    "IRA licensed and fully regulated",
    "Transparent pricing, no hidden fees",
  ];

  return (
    <div>
      <section className="brand-hero py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 font-bold tracking-tight text-[#262626]">About Muliro & Associates</h1>
          <p className="text-xl text-[#262626]/72 max-w-lg">
            Kenya's trusted insurance intermediary, committed to protecting what matters most to you.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-t border-[#262626]/8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#262626]">Our Story</h2>
            <p className="text-[#262626]/72">
              Founded over a decade ago, Muliro & Associates has grown into one of Kenya's most trusted insurance intermediaries. We work as independent advisors, not tied to any single insurer, helping individuals, families, and businesses find the right coverage from Kenya's top underwriters.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#262626] mb-2">Our Mission</h3>
              <p className="text-[#262626]/72">
                Accessible, reliable insurance solutions that protect what matters most to our clients.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#262626] mb-2">Our Vision</h3>
              <p className="text-[#262626]/72">
                Kenya's leading insurance intermediary, known for exceptional service and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section-soft py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#262626]">Our Core Values</h2>
            <p className="text-lg text-[#262626]/65">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-sm font-bold text-[#6d001a]/40 mb-2">0{index + 1}</div>
                <h3 className="text-xl font-bold text-[#262626] mb-2">{value.title}</h3>
                <p className="text-[#262626]/65">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center font-bold text-[#262626]">Why Choose Muliro & Associates?</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#6d001a] flex-shrink-0 mt-0.5" />
                  <span className="text-[#262626]/75">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section-dark py-10 border-t border-[#262626]/8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-[#262626]">Licensed & Regulated</h2>
          <p className="text-xl text-[#262626]/70 max-w-2xl mx-auto mb-6">
            Fully licensed by the Insurance Regulatory Authority (IRA) of Kenya.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 brand-card-dark px-5 py-3 rounded-full text-sm font-semibold text-[#262626]">
              <span className="text-[#6d001a]">✓</span> IRA Licensed
            </span>
            <span className="inline-flex items-center gap-2 brand-card-dark px-5 py-3 rounded-full text-sm font-semibold text-[#262626]">
              <span className="text-[#6d001a]">✓</span> Professional Standards
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
