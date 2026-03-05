import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import WhoWeServe from "@/components/WhoWeServe";
import Trust from "@/components/Trust";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingLanguageBubble from "@/components/FloatingLanguageBubble";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <WhoWeServe />
        <Trust />
        <About />
        <CTA />
      </main>
      <Footer />
      <FloatingLanguageBubble />
    </div>
  );
};

export default Index;
