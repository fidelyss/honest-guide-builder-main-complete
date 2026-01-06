import { Brain, Zap, Dumbbell } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Dumbbell,
      name: "Advanced Amino Formula",
      tagline: "Muscle Support & Recovery",
      description: "A blend of essential amino acids designed to support muscle maintenance, especially important as we age. Amino acids are the building blocks of protein—and getting enough becomes harder as we get older.",
      howItWorks: "Contains a balanced ratio of essential amino acids that your body can't produce on its own. Research suggests adequate amino acid intake supports muscle protein synthesis and helps maintain lean muscle mass.",
      reportedBenefits: [
        "Better muscle recovery after activity",
        "Maintained strength during aging",
        "Improved energy for daily tasks",
      ],
    },
    {
      icon: Brain,
      name: "Advanced Memory Formula",
      tagline: "Cognitive Support",
      description: "A formula focused on supporting brain health and mental clarity. Contains nutrients that have been studied for their role in cognitive function.",
      howItWorks: "Combines ingredients like phosphatidylserine and other brain-supporting nutrients that play a role in cell membrane health and neurotransmitter function. These aren't miracle workers—but they address nutritional gaps that may affect cognition.",
      reportedBenefits: [
        "Clearer thinking throughout the day",
        "Better recall and focus",
        "Support for healthy brain aging",
      ],
    },
    {
      icon: Zap,
      name: "Advanced Mitochondrial Formula",
      tagline: "Cellular Energy Support",
      description: "Targets the mitochondria—the 'powerhouses' of your cells that produce energy. As we age, mitochondrial function naturally declines, which can affect energy levels.",
      howItWorks: "Provides CoQ10, PQQ, and other compounds that research has linked to mitochondrial health. These nutrients support the energy-production process at the cellular level.",
      reportedBenefits: [
        "More sustained daily energy",
        "Reduced feelings of fatigue",
        "Support for heart and brain function",
      ],
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <h2 className="heading-section text-center mb-4">
          How These Formulas Work (In Plain English)
        </h2>
        <p className="prose-trust text-center max-w-2xl mx-auto mb-12">
          No complicated jargon. Here's a straightforward look at what each product 
          is designed to do and the science behind it.
        </p>

        <div className="space-y-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="card-trust animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon and title */}
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-trust-green-light flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-trust-green" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.tagline}</p>
                    </div>
                  </div>
                  <p className="text-secondary-foreground">{product.description}</p>
                </div>

                {/* How it works */}
                <div className="md:w-1/3">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-trust-green"></span>
                    How It Works
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.howItWorks}
                  </p>
                </div>

                {/* Benefits */}
                <div className="md:w-1/3">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    What Users Report
                  </h4>
                  <ul className="space-y-2">
                    {product.reportedBenefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="prose-trust text-center mt-10 text-base italic max-w-xl mx-auto">
          Note: Individual results vary. These supplements are designed to support overall 
          health—not replace medical treatment or guarantee specific outcomes.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
