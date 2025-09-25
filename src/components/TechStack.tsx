import { Card, CardHeader, CardBody, CardFooter, Image, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Brain, Shield, Users, LucideProps, ChevronDown } from "lucide-react";
import { RefAttributes } from 'react';
import Squares from "@/components/Squares";
// Import local images
import techstack1 from '../assets/asset_techstack1.png';
import techstack2 from '../assets/asset_techstack2.png';
import techstack3 from '../assets/asset_techstack3.png';

export const TechStack = () => {
  const features = [
    {
      icon: (props: LucideProps & RefAttributes<SVGSVGElement>) => <Brain {...props} />,
      title: "Agentic Social's Manager",
      description: "An AI-powered personal assistant",
      image: techstack1
    },
    {
      icon: (props: LucideProps & RefAttributes<SVGSVGElement>) => <Shield {...props} />,
      title: "Decentralized Storage Security",
      description: "Your memories are stored securely on the blockchain with military-grade encryption, ensuring they remain private and tamper-proof.",
      image: techstack2
    },
    {
      icon: (props: LucideProps & RefAttributes<SVGSVGElement>) => <Users {...props} />,
      title: "Event Partnerships",
      description: "Exclusive access to partner events and experiences, with seamless photo sharing and verification on the blockchain.",
      image: techstack3
    }
  ];

  return (
    <section className="pt-24 pb-8 relative overflow-hidden dapp-background">
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
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Revolutionizing Social{" "}
            <span className="primary-gradient bg-clip-text text-transparent">
              Photo Sharing
            </span>
          </h2>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-4 md:px-16 lg:px-24">
          {features.map((feature, index) => (
            <div key={index} className="relative group h-full">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    alt={feature.title}
                    src={feature.image}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(feature.title)}`;
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 bg-gradient-to-b from-white/5 to-white/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/10">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  
                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <span className="text-sm text-gray-400">Use Case</span>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button
                          className="text-sm bg-transparent text-primary hover:bg-primary/10"
                          radius="full"
                          size="sm"
                          variant="light"
                          endContent={
                            <ChevronDown className="w-4 h-4 text-primary" />
                          }
                        >
                          Learn More
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu 
                        aria-label="Feature details" 
                        className="w-[300px] bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl p-2"
                      >
                        {index === 0 ? (
                          <>
                            <DropdownItem 
                              key="before-assistant" 
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {feature.description.split('Assistant')[0].trim()}
                            </DropdownItem>
                            <DropdownItem 
                              key="after-assistant" 
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              that curates, manages, and posts
                            </DropdownItem>
                            <DropdownItem 
                              key="description-end" 
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              content to grow your social media 
                            </DropdownItem>
                            <DropdownItem 
                              key="description-end-2" 
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              presence effortlessly.
                            </DropdownItem>
                          </>
                        ) : index === 1 ? (
                          <>
                            <DropdownItem 
                              key="line-1"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              Your memories are stored securely
                            </DropdownItem>
                            <DropdownItem 
                              key="line-2"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              on the blockchain with military-grade
                            </DropdownItem>
                            <DropdownItem 
                              key="line-3"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              encryption, ensuring they remain 
                            </DropdownItem>
                            <DropdownItem 
                              key="line-4"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              private and tamper-proof.
                            </DropdownItem>
                          </>
                        ) : (
                          <>
                            <DropdownItem 
                              key="event-1"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              Exclusive access to partner events
                            </DropdownItem>
                            <DropdownItem 
                              key="event-2"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              and experiences, with seamless
                            </DropdownItem>
                            <DropdownItem 
                              key="event-3"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              photo sharing and verification on
                            </DropdownItem>
                            <DropdownItem 
                              key="event-4"
                              className="text-sm text-white/80 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                              the blockchain.
                            </DropdownItem>
                          </>
                        )}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-primary rounded-full animate-float"></div>
    </section>
  );
};