const FinalCTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Start Investing in Peace of Mind Today
        </h2>
        
        <p className="text-xl text-white mb-8 leading-relaxed">
          When you know your future is secure, you can focus on living the life you love. Protect your family's future while enhancing your own financial roadmap.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244&utm_source=mesa&utm_medium=website&utm_campaign=life_insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary text-xl font-bold px-12 py-5 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Get Your Free Quote Now
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Takes 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Expert guidance included</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
