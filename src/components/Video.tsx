import React, { useRef, useState } from "react";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { Play, Pause } from "lucide-react";
import Squares from "./Squares";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden dapp-background">
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
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">
            <span className="primary-gradient bg-clip-text text-transparent">
              Video Showcase
            </span>
          </h2>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="relative aspect-video bg-black cursor-pointer"
            onClick={togglePlay}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://via.placeholder.com/1920x1080?text=Click+to+Play"
              preload="metadata"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Replace this source with your actual video URL */}
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Custom Controls Overlay */}
            {showControls && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                <Button
                  isIconOnly
                  className="w-20 h-20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
                  radius="full"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" />
                  ) : (
                    <Play className="w-10 h-10 text-white" />
                  )}
                </Button>
              </div>
            )}
            
            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-semibold text-white">Product Demo</h3>
              <p className="text-gray-300 text-sm">
                A quick tour of our platform's key features and capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
