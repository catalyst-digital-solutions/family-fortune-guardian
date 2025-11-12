import { Check } from "lucide-react";
import familyHero from "@/assets/family-hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[hsl(var(--mesa-cream))] to-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <img 
              src={familyHero}
              alt="Happy family protected by life insurance"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Life Insurance: An Investment in Peace of Mind
            </h1>
            
            <p className="text-xl text-foreground mb-6 leading-relaxed">
              Life insurance isn't just about the unknown—it's about ensuring that you and your family have <strong>financial confidence in the future</strong>. Think of it as a smart investment that grows alongside your life's journey.
            </p>

            <div className="bg-card rounded-lg p-6 mb-8 shadow-md border-l-4 border-primary">
              <p className="text-lg text-card-foreground leading-relaxed">
                Whether you're building wealth, securing your children's education, or planning for retirement, life insurance can be a <strong>cornerstone of long-term financial stability</strong>. It offers more than just security in difficult times—it's a strategic tool for covering major expenses, building savings, or leaving a legacy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://policygenius.go2cloud.org/aff_c?offer_id=811&aff_id=2244&utm_source=mesa&utm_medium=website&utm_campaign=life_insurance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground text-lg font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Compare Free Quotes Now
              </a>
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-card text-primary text-lg font-semibold px-8 py-4 rounded-lg border-2 border-primary hover:bg-accent transition-all duration-200 text-center"
              >
                Learn How It Works
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-primary" />
                <span>No-obligation quotes in minutes</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-primary" />
                <span>Compare 30+ top-rated carriers</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-primary" />
                <span>Expert guidance included</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;