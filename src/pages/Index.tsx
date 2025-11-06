import HeroSection from "@/components/HeroSection";
import WhyYouNeedSection from "@/components/WhyYouNeedSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import CoverageCalculatorSection from "@/components/CoverageCalculatorSection";
import WhyPolicyGeniusSection from "@/components/WhyPolicyGeniusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import ComplianceFooter from "@/components/ComplianceFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyYouNeedSection />
      <HowItWorksSection />
      <ComparisonSection />
      <CoverageCalculatorSection />
      <WhyPolicyGeniusSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <ComplianceFooter />
    </div>
  );
};

export default Index;
