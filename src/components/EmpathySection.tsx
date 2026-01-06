import { Check } from "lucide-react";

const EmpathySection = () => {
  const concerns = [
    "You've tried supplements before that didn't work",
    "You're tired of flashy marketing with no real substance",
    "You want to know if a company is trustworthy before spending your money",
    "You're looking for honest information, not a sales pitch",
  ];

  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <h2 className="heading-section text-center mb-4">
          Why Being Skeptical Is Actually Smart
        </h2>
        <p className="prose-trust text-center max-w-2xl mx-auto mb-12">
          Let's be honest: the supplement industry has a trust problem. Too many companies 
          make bold claims they can't back up. If you've landed here because you're doing 
          your research before buying, you're already ahead of the game.
        </p>

        <div className="card-trust bg-trust-green-light border border-trust-green/10">
          <h3 className="heading-subsection mb-6 text-trust-green-dark">
            You're probably here because:
          </h3>
          <ul className="space-y-4">
            {concerns.map((concern, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-trust-green flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </span>
                <span className="text-secondary-foreground text-lg">{concern}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="prose-trust text-center mt-10 max-w-2xl mx-auto">
          We get it. That's exactly why we put together this straightforward review—no fluff, 
          no exaggeration, just the information you need to make an informed decision.
        </p>
      </div>
    </section>
  );
};

export default EmpathySection;
