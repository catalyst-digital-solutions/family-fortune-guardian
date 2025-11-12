import { Trophy, DollarSign, Target, Clock, Lock, Phone } from "lucide-react";

const WhyPolicyGeniusSection = () => {
  const benefits = [
    {
      Icon: Trophy,
      title: "Compare 30+ Top-Rated Carriers",
      description: "PolicyGenius shops your application to dozens of A-rated insurance companies to find you the best rate. You don't have to call multiple agents or fill out endless forms."
    },
    {
      Icon: DollarSign,
      title: "No Extra Fees or Markups",
      description: "PolicyGenius doesn't charge you anything. They're paid by the insurance companies, so you get the same price you'd pay going directly to the insurer—but with expert guidance."
    },
    {
      Icon: Target,
      title: "Licensed Experts Guide You",
      description: "No pushy sales tactics. PolicyGenius agents are licensed professionals who explain your options, answer questions, and help you choose the right coverage for your family."
    },
    {
      Icon: Clock,
      title: "Get Quotes in Minutes",
      description: "Fill out one quick application online and get instant quotes from multiple carriers. No waiting days for callback or sitting through lengthy sales pitches."
    },
    {
      Icon: Lock,
      title: "Your Info Is Secure",
      description: "PolicyGenius uses bank-level encryption to protect your personal and medical information. They're also BBB accredited with an A+ rating."
    },
    {
      Icon: Phone,
      title: "Support Throughout the Process",
      description: "Your dedicated case manager stays with you from quote to approval, coordinating medical exams, answering insurer questions, and keeping you updated every step of the way."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Mesa Group Partners with PolicyGenius
          </h2>
          <p className="text-xl text-muted-foreground">
            We recommend PolicyGenius because they make life insurance simple, transparent, and affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <benefit.Icon className="flex-shrink-0 w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[hsl(var(--mesa-cream))] to-[hsl(var(--mesa-tan))] rounded-lg p-8 text-center">
          <p className="text-2xl font-bold text-foreground mb-4">
            Over 30 Million Quotes Delivered Since 2014
          </p>
          <p className="text-lg text-foreground/80 mb-6">
            PolicyGenius has helped hundreds of thousands of families find the right life insurance coverage at the best price.
          </p>
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244&utm_source=mesa&utm_medium=website&utm_campaign=life_insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground text-lg font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join Them—Get Your Free Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyPolicyGeniusSection;