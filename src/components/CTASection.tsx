import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap, Dumbbell } from "lucide-react";

const CTASection = () => {
  const products = [
    {
      icon: Dumbbell,
      name: "Advanced Amino Formula",
      description: "Muscle Support & Recovery",
      url: "https://www.advancedbionutritionals.com/DS24/Advanced-Amino/Muscle-Mass-Loss/HD.htm#aff=alissonfFF",
    },
    {
      icon: Brain,
      name: "Advanced Memory Formula",
      description: "Cognitive Support",
      url: "https://www.advancedbionutritionals.com/DS24/Advanced-Memory/Nobel-Prize-Winning-Memory-Breakthroughs/HD.htm#aff=alissonfFF",
    },
    {
      icon: Zap,
      name: "Advanced Mitochondrial Formula",
      description: "Cellular Energy Support",
      url: "https://www.advancedbionutritionals.com/DS24/Advanced-Mitochondrial/Too-Tired-To-Enjoy-It/HD.htm#aff=alissonfFF",
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            Ready to Learn More?
          </h2>
          <p className="prose-trust max-w-2xl mx-auto">
            If you're considering purchasing any Advanced Bionutritionals product, 
            you can check the official website below:
          </p>
        </div>

        <div className="space-y-4 max-w-xl mx-auto">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full justify-between group"
              >
                <div className="flex items-center gap-4">
                  <product.icon className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm opacity-90 font-normal">{product.description}</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8 max-w-lg mx-auto">
          Clicking these buttons will take you to the official Advanced Bionutritionals website, 
          where you can review product details, pricing, and their money-back guarantee.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
