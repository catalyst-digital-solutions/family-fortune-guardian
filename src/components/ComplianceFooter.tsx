const ComplianceFooter = () => {
  return (
    <footer className="bg-muted/30 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-card rounded-lg p-6 shadow-md mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3">
            📋 Important Disclosures
          </h3>
          <div className="text-sm text-card-foreground/80 space-y-2 leading-relaxed">
            <p>
              <strong>Affiliate Relationship:</strong> Mesa Group Consulting has a marketing partnership with PolicyGenius and may receive compensation if you purchase life insurance through the links on this page. This does not affect the price you pay—you get the same rate whether you go through us or directly to PolicyGenius.
            </p>
            <p>
              <strong>Not Insurance Advice:</strong> The information on this page is for educational purposes only and does not constitute insurance advice. Your specific life insurance needs should be discussed with a licensed insurance agent.
            </p>
            <p>
              <strong>Quote Accuracy:</strong> Quotes provided by PolicyGenius are estimates based on the information you provide. Final rates are determined by the insurance company after underwriting and may differ from initial quotes.
            </p>
            <p>
              <strong>PolicyGenius Independence:</strong> PolicyGenius is an independent insurance broker and is not affiliated with any single insurance carrier. They compare policies from multiple A-rated companies to help you find the best coverage.
            </p>
            <p>
              <strong>Coverage Requirements:</strong> Most life insurance policies require a medical exam and underwriting approval. Some policies offer accelerated underwriting with no exam required. Approval and rates depend on your age, health, lifestyle, and other factors.
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Mesa Group Consulting. All rights reserved.
          </p>
          <p>
            Life insurance products are offered through PolicyGenius, a licensed insurance broker.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default ComplianceFooter;
