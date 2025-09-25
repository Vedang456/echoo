import { Hero } from "@/components/Hero";
// import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import Teams from "@/components/Teams";

const Index = () => {
  return (
    <div className="min-h-screen dapp-background">
      <Hero />
      {/* <Features /> */}
      <TechStack />
      <Teams />
      <Footer />
    </div>
  );
};

export default Index;
