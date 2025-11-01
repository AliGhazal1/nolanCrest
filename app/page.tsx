import HeroSection from "@/components/HeroSection";
import PropertyOverview from "@/components/PropertyOverview";
import EmotionalSection from "@/components/EmotionalSection";
import CommunitySection from "@/components/CommunitySection";
import MarketInsights from "@/components/MarketInsights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyOverview />
      <EmotionalSection />
      <CommunitySection />
      <MarketInsights />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
