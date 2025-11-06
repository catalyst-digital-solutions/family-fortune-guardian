const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "A PolicyGenius licensed agent will give you a call to discuss your health history and coverage needs, the available policy options, and any questions you have."
    },
    {
      number: 2,
      title: "Application",
      description: "Once you've chosen a policy, your PolicyGenius agent will prepare the application paperwork for your review and e-signature. Submitting an application doesn't commit you to anything—it just lets the insurer know you're interested in receiving a formal coverage offer."
    },
    {
      number: 3,
      title: "Medical Requirement",
      description: "To verify your health details, you'll need a free in-person medical exam at your home or office. Some policies swap this exam for a phone questionnaire instead; your PolicyGenius agent will let you know what to expect for your chosen policy."
    },
    {
      number: 4,
      title: "Underwriting",
      description: "The insurer may have follow-up questions or ask for medical records from your doctor. Your PolicyGenius case manager will be in touch with you to coordinate any additional requests."
    },
    {
      number: 5,
      title: "Offer",
      description: "The insurer will make a decision on your application, and your PolicyGenius case manager will talk through the details of the offer with you. If you'd like to move forward, great! But if it makes sense to consider other options, your case manager can help you explore them."
    },
    {
      number: 6,
      title: "Covered!",
      description: "Ready to get covered? Your PolicyGenius case manager will send you the final paperwork for review. If everything looks good, you'll e-sign the policy and pay your first premium, and that's it! You'll have life insurance protecting your family."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Life Insurance: Step by Step
          </h2>
          <p className="text-xl text-muted-foreground">
            Here's what to expect after you get started with PolicyGenius. You'll have expert guidance every step of the way.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {step.number}
              </div>
              <div className="flex-1 bg-card rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[hsl(var(--mesa-cream))] rounded-lg p-6 text-center">
          <p className="text-lg text-foreground font-semibold mb-2">
            ⏱️ How long does it take to get covered?
          </p>
          <p className="text-foreground/80">
            After you sign your application and complete the medical exam, the underwriting process can take anywhere from <strong>4-6 weeks</strong>. (If you apply for an accelerated underwriting policy, you may receive a decision in as little as <strong>24 hours</strong>.)
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
