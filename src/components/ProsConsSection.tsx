import { ThumbsUp, ThumbsDown } from "lucide-react";

const ProsConsSection = () => {
  const pros = [
    "Established company with 20+ years in business",
    "Doctor-formulated products with research-backed ingredients",
    "Generous 90-day money-back guarantee",
    "Positive reviews from verified customers on Trustpilot",
    "Made in the USA in FDA-registered facilities",
    "Transparent ingredient lists with clear dosages",
    "Dedicated customer service team",
  ];

  const cons = [
    "Premium pricing compared to generic alternatives",
    "Results take time—not an overnight solution",
    "Only available online (not in retail stores)",
    "Some products may not suit everyone's needs",
    "Effects vary by individual—no guaranteed outcomes",
  ];

  return (
    <section className="section-spacing bg-secondary/50">
      <div className="container-narrow">
        <h2 className="heading-section text-center mb-4">
          The Honest Pros and Cons
        </h2>
        <p className="prose-trust text-center max-w-2xl mx-auto mb-12">
          No product is perfect. Here's our balanced assessment based on 
          research, reviews, and common customer feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pros */}
          <div className="card-trust border-l-4 border-trust-green">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-trust-green-light flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-trust-green" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-trust-green">What's Good</h3>
            </div>
            <ul className="space-y-3">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-trust-green mt-2.5 flex-shrink-0"></span>
                  <span className="text-secondary-foreground">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="card-trust border-l-4 border-gold">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <ThumbsDown className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gold-hover">What to Consider</h3>
            </div>
            <ul className="space-y-3">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0"></span>
                  <span className="text-secondary-foreground">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 p-6 bg-warm-cream-dark rounded-xl text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Our take:</strong> If you're looking for a quick 
            fix, supplements probably aren't the answer. But if you're committed to a consistent 
            routine and realistic about expectations, Advanced Bionutritionals offers quality 
            formulas from a company that's proven its staying power.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProsConsSection;
