import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, ChevronDown, ChevronUp } from "lucide-react";
import Squares from "./Squares";
import { useState } from "react";

import echooNewLogo from "@/assets/echoo-logo.png";

export const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  
  const socialLinks = [
    { icon: Twitter, label: "X", href: "https://x.com/echoo_ai" },
    { icon: Mail, label: "Contact", href: "mailto:echoofotolabs@gmail.com" }
  ];

  const footerLinks = [
    {
      id: "product",
      title: "Product",
      links: ["Features", "Security", "Documentation"]
    },
    {
      id: "technology",
      title: "Technology", 
      links: ["AI Recognition", "Blockchain", "Filecoin", "FTP Protocol"]
    },
    {
      id: "company",
      title: "Company",
      links: ["About", "Careers", "Blog", "Press Kit"]
    }
  ];

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <footer className="relative overflow-hidden dapp-background border-t border-border/30">
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
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
              <img 
                src={echooNewLogo} 
                alt="Echoo logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1">Echoo</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Smart social media management with AI and decentralized storage
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center sm:justify-start gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 sm:w-10 sm:h-10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  asChild
                >
                  <a 
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="flex items-center justify-center"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="w-full sm:w-auto">
              <button 
                className="flex items-center justify-between w-full sm:hidden px-2 py-3 text-left"
                onClick={() => toggleSection(section.id)}
                aria-expanded={openSections[section.id]}
                aria-controls={`footer-section-${section.id}`}
              >
                <h4 className="text-base font-semibold">{section.title}</h4>
                {openSections[section.id] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              <div 
                id={`footer-section-${section.id}`}
                className={`${openSections[section.id] ? 'block' : 'hidden'} sm:block`}
              >
                <ul className="space-y-2 sm:space-y-3 px-2 sm:px-0 pb-3 sm:pb-0">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-6 sm:my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center pt-4 sm:pt-0">
          <span className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1 mt-4 sm:mt-0">
            © 2025 Echoo. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6 gap-y-2 order-1 sm:order-2 w-full sm:w-auto">
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap block sm:inline-block w-full text-center sm:text-left">
              Privacy Policy
            </a>
            <span className="text-muted-foreground/50 hidden sm:inline">•</span>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap block sm:inline-block w-full text-center sm:text-left">
              Terms of Service
            </a>
            <span className="text-muted-foreground/50 hidden sm:inline">•</span>
            <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap block sm:inline-block w-full text-center sm:text-left">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};