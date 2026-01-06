const DisclaimerSection = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container-narrow">
        <div className="p-6 bg-warm-cream-dark rounded-xl border border-border">
          <h3 className="font-serif font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
            Important Disclaimer
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              This is an independent informational review. We are not affiliated with, endorsed by, 
              or sponsored by Advanced Bionutritionals. The views expressed on this page are based 
              on publicly available information and customer reviews.
            </p>
            <p>
              <strong className="text-secondary-foreground">Results may vary.</strong> Dietary 
              supplements are not intended to diagnose, treat, cure, or prevent any disease. 
              Individual experiences differ based on factors including age, health status, diet, 
              and consistency of use.
            </p>
            <p>
              Always consult with a qualified healthcare professional before starting any new 
              supplement regimen, especially if you have existing health conditions or are taking 
              medications.
            </p>
            <p>
              <strong className="text-secondary-foreground">Affiliate Disclosure:</strong> This 
              page may contain affiliate links, meaning we may earn a commission if you make a 
              purchase through our links at no additional cost to you. This helps support our 
              research and content creation.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Independent Health Reviews. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
