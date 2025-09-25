import { Hero } from "@/components/Hero";
// import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import Teams from "@/components/Teams";
import Demo from "@/components/Demo";

const Index = () => {
  return (
    <div className="min-h-screen dapp-background">
      <Hero />
      {/* <Features /> */}
      <TechStack />
      <Demo />
      <Teams />
      <Footer />
    </div>
  );
};

export default Index;
