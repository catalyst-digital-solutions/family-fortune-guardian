import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I really need life insurance if I'm young and healthy?",
      answer: "Yes—especially if you're young and healthy! That's when life insurance is most affordable. A healthy 30-year-old can get $500,000 of coverage for around $25-$40/month. The longer you wait, the more expensive it gets. Plus, if you develop health issues later, you may not qualify for coverage at all."
    },
    {
      question: "How much does life insurance actually cost?",
      answer: "It depends on your age, health, and coverage amount. Here are rough estimates for a $500,000 20-year term policy: Age 25 (healthy): $20-$30/month | Age 35 (healthy): $30-$45/month | Age 45 (healthy): $60-$90/month | Age 55 (healthy): $150-$250/month. Permanent policies cost 5-15x more than term policies but build cash value."
    },
    {
      question: "What's the difference between term and whole life insurance?",
      answer: "Term life insurance covers you for a specific period (10, 20, or 30 years) and is much more affordable. Whole life insurance (a type of permanent insurance) covers you for your entire life and builds cash value, but costs significantly more. Most people start with term insurance because it's affordable and covers the years when your family depends on your income most."
    },
    {
      question: "Will I need a medical exam?",
      answer: "Most policies require a quick medical exam (free, done at your home or office). Some policies offer 'accelerated underwriting' where you skip the exam and get approved based on a health questionnaire and database check. Your PolicyGenius agent will tell you which option applies to your chosen policy."
    },
    {
      question: "What if I have pre-existing health conditions?",
      answer: "You can still get life insurance! Your premiums may be higher, but PolicyGenius works with carriers who specialize in different health profiles. Even if you have diabetes, high blood pressure, or a history of cancer, there are options. Your case manager will shop your application to find the best rate."
    },
    {
      question: "Can I cancel my policy if I change my mind?",
      answer: "Yes. Most policies have a 30-day 'free look' period where you can cancel for a full refund. After that, you can cancel anytime—you'll just lose the premiums you've paid (since term insurance doesn't build cash value)."
    },
    {
      question: "How quickly can I get covered?",
      answer: "If you qualify for accelerated underwriting, you could be approved in as little as 24-48 hours. If you need a medical exam, the full process typically takes 4-6 weeks from application to approval."
    },
    {
      question: "Is PolicyGenius an insurance company?",
      answer: "No, PolicyGenius is an independent broker. They compare policies from 30+ top-rated insurance companies (like Prudential, MetLife, Protective, Banner Life, etc.) to find you the best rate. You get the same price you'd pay going directly to the insurer, but with expert guidance and comparison shopping."
    },
    {
      question: "Will my beneficiaries have to pay taxes on the death benefit?",
      answer: "No. Life insurance death benefits are typically income-tax-free for your beneficiaries. (There may be estate tax implications if your estate is very large, but that's rare and something PolicyGenius agents can discuss with you.)"
    },
    {
      question: "What happens if I miss a premium payment?",
      answer: "Most policies have a 30-day grace period. If you miss a payment, you typically have 30 days to pay it before your policy lapses. If your policy does lapse, you may be able to reinstate it within a certain timeframe (usually 2-5 years), but you'll need to requalify medically."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Life Insurance Questions Answered
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know before you get your quote.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-card hover:bg-muted/50 transition-colors flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80 mb-4">
            Still have questions? PolicyGenius agents are here to help.
          </p>
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244&utm_source=mesa&utm_medium=website&utm_campaign=life_insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground text-lg font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote & Expert Guidance
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
