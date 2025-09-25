import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import Squares from "./Squares";
import Demo1 from "@/assets/Demo1.png";
import Demo2 from "@/assets/Demo2.png";

const Demo = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Squares */}
      <div className="absolute inset-0 -z-10">
        <Squares 
          speed={0.5} 
          squareSize={60}
          direction='diagonal'
          borderColor='#2C3E50'
          hoverFillColor='#FDFCF0'
          zIndex={-1}
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Features
        </h2>
        
        <div className="flex flex-col gap-12 max-w-7xl mx-auto">
          {/* First Demo Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
            <div className="lg:col-span-2 p-6 flex items-center justify-center">
              <img
                alt="Demo 1"
                className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded-lg shadow-xl"
                src={Demo1}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/1000x800?text=Demo+1';
                }}
              />
            </div>
            <div className="p-8 lg:border-l border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Your AI-Powered Social Media Manager</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Let our intelligent AI assistant handle your social media presence. It curates and manages your photos, researches the latest trends, and keeps you updated with the most effective strategies - all while learning your unique style and preferences.
              </p>
              <Button className="w-full md:w-auto" variant="bordered">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Second Demo Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
            <div className="p-8 lg:border-r border-white/10 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-white mb-4">Discover & Engage with Local Events</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Seamlessly find nearby events, apply with a single click, and manage your entire photo journey. Capture memories, and maintain full control over your content in our secure ecosystem.
              </p>
              <Button className="w-full md:w-auto" variant="bordered">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="lg:col-span-2 p-6 flex items-center justify-center order-1 lg:order-2">
              <img
                alt="Demo 2"
                className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded-lg shadow-xl"
                src={Demo2}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/1000x800?text=Demo+2';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
