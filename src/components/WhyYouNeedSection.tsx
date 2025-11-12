import { Home, GraduationCap, Briefcase, Landmark, TrendingUp, Gift } from "lucide-react";

const WhyYouNeedSection = () => {
  const benefits = [
    {
      Icon: Home,
      title: "Protect Your Family's Home",
      description: "If something happens to you, your family can pay off the mortgage and stay in the home they love. No forced moves, no financial panic."
    },
    {
      Icon: GraduationCap,
      title: "Fund Your Kids' Education",
      description: "Ensure your children can still afford college, trade school, or vocational training—even if you're not there to provide it."
    },
    {
      Icon: Briefcase,
      title: "Replace Lost Income",
      description: "Your family won't have to worry about losing their lifestyle, paying bills, or scrambling to make ends meet during a difficult time."
    },
    {
      Icon: Landmark,
      title: "Cover Final Expenses",
      description: "Funeral costs, medical bills, and outstanding debts can total $10,000-$50,000+. Life insurance ensures your family isn't burdened."
    },
    {
      Icon: TrendingUp,
      title: "Build Cash Value (Permanent Policies)",
      description: "Whole life and universal life policies accumulate cash value you can borrow against for emergencies, retirement, or opportunities."
    },
    {
      Icon: Gift,
      title: "Leave a Legacy",
      description: "Pass wealth to your heirs, fund charitable causes, or ensure your family has a financial cushion for generations."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            More Than Protection—It's a Financial Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Life insurance is a versatile tool that supports your family's goals at every stage of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[hsl(var(--mesa-cream))] to-[hsl(var(--mesa-tan))] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <benefit.Icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244&utm_source=mesa&utm_medium=website&utm_campaign=life_insurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground text-lg font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote in 5 Minutes
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyYouNeedSection;