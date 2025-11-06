const ComparisonSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Which Type of Life Insurance Do You Need?
          </h2>
          <p className="text-xl text-muted-foreground">
            Not sure whether to choose term or permanent life insurance? Here's a quick comparison.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-accent">
                <th className="px-6 py-4 text-left text-primary-foreground font-bold text-lg">Feature</th>
                <th className="px-6 py-4 text-center text-primary-foreground font-bold text-lg">Term Life Insurance</th>
                <th className="px-6 py-4 text-center text-primary-foreground font-bold text-lg">Permanent Life Insurance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              
              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-semibold text-foreground">Coverage Duration</td>
                <td className="px-6 py-4 text-center text-foreground/80">10, 15, 20, or 30 years</td>
                <td className="px-6 py-4 text-center text-foreground/80">Entire lifetime (as long as premiums are paid)</td>
              </tr>

              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-semibold text-foreground">Monthly Premiums</td>
                <td className="px-6 py-4 text-center text-foreground/80">Lower (typically $20-$80/month)</td>
                <td className="px-6 py-4 text-center text-foreground/80">Higher (typically $100-$500+/month)</td>
              </tr>

              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-semibold text-foreground">Cash Value</td>
                <td className="px-6 py-4 text-center text-foreground/80">❌ None</td>
                <td className="px-6 py-4 text-center text-foreground/80">✅ Builds over time (can borrow against it)</td>
              </tr>

              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-semibold text-foreground">Best For</td>
                <td className="px-6 py-4 text-center text-foreground/80">Young families, mortgage protection, income replacement</td>
                <td className="px-6 py-4 text-center text-foreground/80">Estate planning, leaving a legacy, long-term wealth building</td>
              </tr>

              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-semibold text-foreground">Death Benefit Payout</td>
                <td className="px-6 py-4 text-center text-foreground/80">Only if you die during the term</td>
                <td className="px-6 py-4 text-center text-foreground/80">Guaranteed payout (whenever you die)</td>
              </tr>

              <tr className="hover:bg-muted/50">
                <td className="px-6 py-4 font-semibold text-foreground">Convertibility</td>
                <td className="px-6 py-4 text-center text-foreground/80">Often can convert to permanent later</td>
                <td className="px-6 py-4 text-center text-foreground/80">N/A (already permanent)</td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-[hsl(var(--mesa-tan))] rounded-lg p-6">
          <p className="text-lg text-foreground leading-relaxed">
            <strong>💡 Expert Tip:</strong> Most people start with term life insurance because it's affordable and covers the years when your family depends on your income most (raising kids, paying off the mortgage, etc.). You can always convert to permanent coverage later if your financial goals change.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244&utm_source=mesa&utm_medium=website&utm_campaign=life_insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground text-lg font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Compare Quotes for Both Options
          </a>
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
