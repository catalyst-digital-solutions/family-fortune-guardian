const CoverageCalculatorSection = () => {
  const scenarios = [
    {
      emoji: "👨‍👩‍👧‍👦",
      title: "Young Family with Kids",
      details: [
        { label: "Annual Income", value: "$75,000" },
        { label: "Mortgage Balance", value: "$300,000" },
        { label: "Future College Costs (2 kids)", value: "$200,000" },
        { label: "Final Expenses", value: "$20,000" }
      ],
      recommendation: "$750,000 - $1,000,000"
    },
    {
      emoji: "💼",
      title: "Single Professional with No Dependents",
      details: [
        { label: "Annual Income", value: "$60,000" },
        { label: "Outstanding Debts", value: "$30,000" },
        { label: "Final Expenses", value: "$15,000" },
        { label: "Goal", value: "Leave small legacy to siblings/charity" }
      ],
      recommendation: "$100,000 - $250,000"
    },
    {
      emoji: "🏡",
      title: "Homeowners Nearing Retirement",
      details: [
        { label: "Annual Income", value: "$100,000" },
        { label: "Remaining Mortgage", value: "$150,000" },
        { label: "Goal", value: "Pay off home + leave inheritance" },
        { label: "Final Expenses", value: "$25,000" }
      ],
      recommendation: "$300,000 - $500,000"
    },
    {
      emoji: "🚀",
      title: "High Earner with Complex Estate",
      details: [
        { label: "Annual Income", value: "$250,000+" },
        { label: "Business Interests", value: "$1,000,000" },
        { label: "Goal", value: "Estate tax planning + legacy" },
        { label: "Final Expenses", value: "$50,000" }
      ],
      recommendation: "$2,000,000 - $5,000,000+"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Much Life Insurance Coverage Do You Need?
          </h2>
          <p className="text-xl text-muted-foreground">
            A common rule of thumb is to get <strong>10-12x your annual income</strong>, but your needs may vary based on your situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {scenarios.map((scenario, index) => (
            <div key={index} className="bg-card rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">{scenario.emoji}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {scenario.title}
              </h3>
              <div className="space-y-3 text-card-foreground/80">
                {scenario.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </p>
                ))}
                <hr className="my-3 border-border" />
                <p className="text-xl font-bold text-primary">
                  Recommended Coverage: {scenario.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            📊 Quick Coverage Calculator
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-card-foreground/80">
              <strong>Step 1:</strong> Multiply your annual income by 10-12
            </p>
            <p className="text-lg text-card-foreground/80">
              <strong>Step 2:</strong> Add your mortgage balance + outstanding debts
            </p>
            <p className="text-lg text-card-foreground/80">
              <strong>Step 3:</strong> Add future college costs (if applicable)
            </p>
            <p className="text-lg text-card-foreground/80">
              <strong>Step 4:</strong> Add $15,000-$30,000 for final expenses
            </p>
            <p className="text-lg text-card-foreground/80">
              <strong>Step 5:</strong> Subtract existing savings/investments (if substantial)
            </p>
            <div className="mt-6 p-6 bg-[hsl(var(--mesa-cream))] rounded-lg text-center">
              <p className="text-xl font-bold text-foreground">
                = Your Recommended Coverage Amount
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244&utm_source=mesa&utm_medium=website&utm_campaign=life_insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground text-lg font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Personalized Quote Based on Your Needs
          </a>
        </div>

      </div>
    </section>
  );
};

export default CoverageCalculatorSection;
