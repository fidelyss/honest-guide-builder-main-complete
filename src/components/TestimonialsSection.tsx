import { Star, Quote, ExternalLink } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Robert M.",
      location: "Texas",
      rating: 5,
      text: "I've been using the Mitochondrial Formula for about 3 months now. At 62, I definitely notice a difference in my energy levels throughout the day. Not a miracle, but a noticeable improvement that keeps me coming back.",
      product: "Advanced Mitochondrial Formula",
      verified: true,
    },
    {
      name: "Linda K.",
      location: "Florida",
      rating: 5,
      text: "Was skeptical at first—I've tried so many supplements that promised the world. But Advanced Bionutritionals delivered what they said they would. The customer service was excellent when I had questions about the Memory Formula.",
      product: "Advanced Memory Formula",
      verified: true,
    },
    {
      name: "James T.",
      location: "Arizona",
      rating: 4,
      text: "The Amino Formula has helped me maintain my exercise routine as I've gotten older. Recovery time after workouts is better. Took about 4-6 weeks to really notice the effects, so patience is key.",
      product: "Advanced Amino Formula",
      verified: true,
    },
    {
      name: "Patricia H.",
      location: "California",
      rating: 5,
      text: "Quality products and fast shipping. I appreciate that they don't make outrageous claims like some other companies. They're straightforward about what the supplements can and can't do.",
      product: "Multiple Products",
      verified: true,
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-trust-green-light text-trust-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Verified Trustpilot Reviews</span>
          </div>
          <h2 className="heading-section mb-4">
            What Real Customers Are Saying
          </h2>
          <p className="prose-trust max-w-2xl mx-auto">
            These testimonials come from verified buyers on Trustpilot. We've selected 
            reviews that reflect the typical customer experience—not cherry-picked 
            extreme claims.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-trust relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-trust-green-light" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating 
                        ? "text-gold fill-gold" 
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-secondary-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">{testimonial.product}</p>
                  {testimonial.verified && (
                    <span className="inline-flex items-center gap-1 text-xs text-trust-green">
                      <span className="w-1.5 h-1.5 rounded-full bg-trust-green"></span>
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.trustpilot.com/review/advancedbionutritionals.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-trust-green hover:text-trust-green-dark transition-colors"
          >
            <span>Read more reviews on Trustpilot</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
