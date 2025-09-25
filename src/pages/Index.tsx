import { Hero } from "@/components/Hero";
// import { Features } from "@/components/Features";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import Teams from "@/components/Teams";
import Video from "@/components/Video";

const Index = () => {
  return (
    <div className="min-h-screen dapp-background">
      <Hero />
      {/* <Features /> */}
      <TechStack />
      <Video />
      <Teams />
      <Footer />
    </div>
  );
};

export default Index;
