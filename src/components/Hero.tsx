import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Squares from "./Squares";
import CircularText from "./CircularText";
import CircularGallery from './CircularGallery';
import echooNewLogo from "@/assets/echoo-new-logo.png";

export const Hero = () => {
  return (
    <>
      <section className="relative min-h-[20vh] flex flex-col items-center justify-start overflow-hidden dapp-background">
        {/* Squares Background */}
        <div className="absolute inset-0 z-0">
          <Squares 
            speed={0.5} 
            squareSize={60}
            direction='diagonal'
            borderColor='#2C3E50'
            hoverFillColor='#FDFCF0'
            zIndex={-0.5}
          />
        </div>

        {/* Circular Text - Top Right */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <CircularText
            text="ECHOO*GALLERY*PHOTOS*"
            onHover="speedUp"
            spinDuration={20}
            className="custom-circular"
          />
        </div>
        
        {/* Centered Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center pt-16 text-center animate-slide-up">
            {/* Logo/Brand */}
            <div className="mb-12 flex items-center justify-center">
              <div className="relative">
                {/* New Echoo Logo */} 
                <img 
                  src={echooNewLogo} 
                  alt="echoo logo" 
                  className="w-60 h-60 drop-shadow-lg"
                />
              </div>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Smart social media management{" "}
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl">
            Your AI Social Media Assistant...!
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center mb-20">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://app.echoo.ing/', '_blank')}
              >
                <div className="flex flex-col items-center px-2">
                  <span className="leading-tight">Sign Up</span>
                  <span className="leading-tight">Today!</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden dapp-background">
        {/* Squares Background */}
        <div className="absolute inset-0 z-0">
          <Squares 
            speed={0.5} 
            squareSize={60}
            direction='diagonal'
            borderColor='#2C3E50'
            hoverFillColor='#FDFCF0'
            zIndex={-0.5}
          />
        </div>
        {/* Desktop Circular Gallery - Hidden on mobile */}
        <div className="hidden md:flex" style={{ height: '80vh', minHeight: '500px', width: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 10, marginTop: '-10vh' }}>
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.1} 
            scrollEase={0.05}
          />
        </div>
        
      </section>
    </>
  );
};