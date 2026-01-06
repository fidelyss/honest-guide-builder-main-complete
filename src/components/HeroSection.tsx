import { Shield, AlertCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-warm-cream-dark to-background">
      <div className="container-narrow text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-trust-green-light text-trust-green px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Shield className="w-4 h-4" />
          <span>Independent Review • Not Affiliated with Advanced Bionutritionals</span>
        </div>

        {/* Main headline addressing skepticism */}
        <h1 className="heading-hero text-balance mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Is Advanced Bionutritionals Legit?{" "}
          <span className="text-trust-green">An Honest Look</span> Before You Buy
        </h1>

        {/* Subheadline */}
        <p className="prose-trust max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          You've seen the ads. You've read the promises. Now you're wondering if it's real 
          or just another supplement scam. Here's what we found after digging into the research, 
          reviews, and real customer experiences.
        </p>

        {/* Skepticism acknowledgment box */}
        <div className="card-trust max-w-xl mx-auto text-left animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="font-serif font-medium text-foreground mb-2">
                If you're skeptical, that's actually a good sign.
              </p>
              <p className="text-muted-foreground text-base">
                The supplement industry is full of overpromises and underwhelming products. 
                Being cautious means you're a smart consumer. This page is designed to give you 
                the facts—not hype.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
