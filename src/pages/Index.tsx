import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import InvestorSection from "@/components/InvestorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SupplyChainSection />
      <SustainabilitySection />
      <InvestorSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
