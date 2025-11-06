const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "SM",
      name: "Sarah M.",
      role: "Young Mom, Age 32",
      rating: 5,
      quote: "After my son was born, I knew I needed life insurance but felt overwhelmed. PolicyGenius made it so easy. My agent explained everything, helped me compare options, and I was covered within 3 weeks. Now I sleep better knowing my family is protected.",
      policy: "$750,000 / 30-Year Term",
      premium: "$43/month"
    },
    {
      initials: "JR",
      name: "James R.",
      role: "Self-Employed, Age 45",
      rating: 5,
      quote: "As a freelancer, I don't have employer benefits. PolicyGenius found me affordable coverage even with some health issues. My case manager worked with underwriters to get me approved. My wife and kids are protected if anything happens to me.",
      policy: "$500,000 / 20-Year Term",
      premium: "$87/month"
    },
    {
      initials: "LT",
      name: "Linda T.",
      role: "Homeowner, Age 38",
      rating: 5,
      quote: "We bought our dream home last year and wanted to make sure our mortgage would be paid off if something happened to either of us. PolicyGenius compared 15+ carriers for us and saved us over $60/month compared to what our bank quoted us!",
      policy: "$400,000 / 30-Year Term",
      premium: "$52/month"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Families, Real Peace of Mind
          </h2>
          <p className="text-xl text-muted-foreground">
            Here's how life insurance through PolicyGenius has protected families like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="text-yellow-500 text-2xl mb-3">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="text-card-foreground/80 italic leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Policy:</strong> {testimonial.policy} | <strong>Premium:</strong> {testimonial.premium}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
