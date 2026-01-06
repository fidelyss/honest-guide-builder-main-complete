import { Building2, Award, Clock } from "lucide-react";

const WhatIsSection = () => {
  const facts = [
    {
      icon: Building2,
      title: "Established Company",
      description: "Based in Norcross, Georgia, operating for over 20 years in the supplement industry",
    },
    {
      icon: Award,
      title: "Doctor-Formulated",
      description: "Products developed by Dr. Frank Shallenberger, a physician specializing in anti-aging medicine",
    },
    {
      icon: Clock,
      title: "90-Day Guarantee",
      description: "Full money-back guarantee on all products—a sign they stand behind their formulas",
    },
  ];

  return (
    <section className="section-spacing bg-secondary/50">
      <div className="container-narrow">
        <h2 className="heading-section text-center mb-4">
          What Is Advanced Bionutritionals, Really?
        </h2>
        <p className="prose-trust text-center max-w-2xl mx-auto mb-12">
          Advanced Bionutritionals is a supplement company that focuses on science-backed 
          formulas for adults concerned about aging, energy, and overall vitality. 
          Unlike many fly-by-night brands, they've been in business for decades.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <div 
              key={index} 
              className="card-trust text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-trust-green-light mb-4">
                <fact.icon className="w-7 h-7 text-trust-green" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{fact.title}</h3>
              <p className="text-muted-foreground">{fact.description}</p>
            </div>
          ))}
        </div>

        <div className="divider-subtle my-12" />

        <div className="prose-trust max-w-2xl mx-auto">
          <p className="mb-4">
            <strong className="text-foreground">The bottom line:</strong> This isn't a random 
            company that popped up overnight. They have a physical address, a medical advisor, 
            and a long track record. That doesn't automatically mean every product works for 
            everyone—but it does mean you're dealing with a legitimate business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
