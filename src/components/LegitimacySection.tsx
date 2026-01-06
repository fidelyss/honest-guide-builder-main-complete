import { ShieldCheck, MapPin, FlaskConical, RefreshCw } from "lucide-react";

const LegitimacySection = () => {
  const points = [
    {
      icon: MapPin,
      title: "Real Physical Location",
      description: "Headquartered in Norcross, Georgia with verifiable business registration and contact information.",
    },
    {
      icon: FlaskConical,
      title: "FDA-Registered Facilities",
      description: "Products manufactured in facilities that meet FDA regulations and Good Manufacturing Practices (GMP).",
    },
    {
      icon: ShieldCheck,
      title: "Third-Party Testing",
      description: "Ingredients tested for purity and potency. Certificates of analysis available upon request.",
    },
    {
      icon: RefreshCw,
      title: "No-Questions-Asked Guarantee",
      description: "90-day money-back guarantee. If you're not satisfied, you get a full refund—they stand behind their products.",
    },
  ];

  return (
    <section className="section-spacing bg-secondary/50">
      <div className="container-narrow">
        <h2 className="heading-section text-center mb-4">
          Is It Safe? Is It Legitimate?
        </h2>
        <p className="prose-trust text-center max-w-2xl mx-auto mb-12">
          These are the questions that matter most. Here's what we found about 
          the company's practices and quality standards.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 bg-card rounded-xl shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-trust-green-light flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-trust-green" />
                </div>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg mb-1">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-trust-green-light rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="heading-subsection text-trust-green-dark mb-4">
              The Verdict on Legitimacy
            </h3>
            <p className="text-secondary-foreground leading-relaxed">
              Based on our research, Advanced Bionutritionals is a legitimate company with 
              a strong track record. They're transparent about their formulas, accessible 
              with customer service, and offer a real money-back guarantee. While no 
              supplement company is perfect, they check the important boxes for trustworthiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegitimacySection;
