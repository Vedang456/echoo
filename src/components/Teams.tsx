import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";
// Import local images
import X1 from '../assets/X1.png';
import X2 from '../assets/X2.png';
import X3 from '../assets/X3.png';
import Squares from "./Squares";

// Role colors mapping
const ROLE_COLORS: Record<string, string> = {
  'Backend': 'bg-blue-500',
  'Web3': 'bg-purple-500',
  'Frontend': 'bg-green-500',
  'Designer': 'bg-pink-500',
  'AI': 'bg-amber-500',
  'Blockchain': 'bg-indigo-500',
  'Database': 'bg-cyan-500',
  'Architect': 'bg-emerald-500'
};

// Extract role from description for color coding
const getRoleColor = (description: string): string => {
  const roles = Object.keys(ROLE_COLORS);
  const foundRole = roles.find(role => 
    description.toLowerCase().includes(role.toLowerCase())
  );
  return ROLE_COLORS[foundRole || ''] || 'bg-gray-500';
};

export default function Teams() {
  // Add global style to hide scrollbars
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const [isFollowed1, setIsFollowed1] = React.useState(false);
  const [isFollowed2, setIsFollowed2] = React.useState(false);
  const [isFollowed3, setIsFollowed3] = React.useState(false);

  const handleFollow = (username: string, setFollowed: (value: boolean) => void, isFollowed: boolean) => {
    if (!isFollowed) {
      const twitterWindow = window.open(
        `https://twitter.com/intent/follow?screen_name=${username}`, 
        '_blank', 
        'width=550,height=420,noopener,noreferrer'
      );
      
      if (twitterWindow) {
        const checkWindowClosed = setInterval(() => {
          if (twitterWindow.closed) {
            clearInterval(checkWindowClosed);
            setFollowed(false);
          }
        }, 1000);
        
        setTimeout(() => {
          clearInterval(checkWindowClosed);
        }, 30000);
      } else {
        return;
      }
      
      setFollowed(true);
    }
  };

  const teamMembers = [
    {
      id: 1,
      name: "Akshay Gund",
      handle: "akshayrgund1",
      role: "Backend, Database, Blockchain",
      description: "Backend developer, database architect and Web3 enthusiast",
      tags: ["#AkshayCodes", "🗄️"],
      following: "1,024",
      followers: "8.9K",
      image: X2,
      isFollowed: isFollowed1,
      setIsFollowed: setIsFollowed1
    },
    {
      id: 2,
      name: "Vedang Limaye",
      handle: "VedangL51004",
      role: "Web3, Designer, Blockchain",
      description: "Web3 developer and Landing Page designer",
      tags: ["#DomainExpansion", "🌐"],
      following: "847",
      followers: "12.3K",
      image: X1,
      isFollowed: isFollowed2,
      setIsFollowed: setIsFollowed2
    },
    {
      id: 3,
      name: "Tushar Kolhe",
      handle: "tusharkolhe08",
      role: "Frontend, AI, Blockchain, Architect",
      description: "Frontend Developer and AI expert",
      tags: ["#AIExpert", "💻"],
      following: "1.2K",
      followers: "5.7K",
      image: X3,
      isFollowed: isFollowed3,
      setIsFollowed: setIsFollowed3
    }
  ];

  return (
    <section className="pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden dapp-background">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares 
          speed={0.5}
          squareSize={60}
          direction="diagonal"
          borderColor="#2C3E50"
          hoverFillColor="#FDFCF0"
          zIndex={-0.5}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
            Meet Our <span className="primary-gradient bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
            The talented individuals behind our innovative platform, dedicated to revolutionizing social photo sharing.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {teamMembers.map((member) => {
              const roleColor = getRoleColor(member.role.split(',')[0].trim());
              return (
                <Card 
                  key={member.id} 
                  className="w-full max-w-[320px] sm:max-w-none bg-black/40 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader className="justify-between p-4 sm:p-5 bg-gradient-to-b from-gray-900/50 to-transparent">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative">
                        <div className="relative flex-shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-700"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=256`;
                            }}
                          />
                        </div>
                        <span 
                          className={`absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-background ${roleColor}`}
                          aria-hidden="true"
                        ></span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold leading-tight text-default-600 truncate">
                          {member.name}
                        </h4>
                        <h5 className="text-xs sm:text-sm tracking-tight text-default-400 truncate mb-1">
                          @{member.handle}
                        </h5>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {member.role.split(',').map((role, i) => {
                            const trimmedRole = role.trim();
                            const roleColor = getRoleColor(trimmedRole);
                            const colorName = roleColor.split('-')[1];
                            return (
                              <span 
                                key={i}
                                className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${roleColor} bg-opacity-20 text-${colorName}-100 border border-${colorName}-500 border-opacity-30`}
                              >
                                {trimmedRole}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <Button
                      className={member.isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                      color="primary"
                      radius="full"
                      size="sm"
                      variant={member.isFollowed ? "bordered" : "solid"}
                      onPress={() => handleFollow(member.handle, member.setIsFollowed, member.isFollowed)}
                    >
                      {member.isFollowed ? "Following" : "Follow"}
                    </Button>
                  </CardHeader>
                  <CardBody className="px-4 sm:px-5 py-4 text-sm sm:text-base text-default-400">
                    <p className="mb-3">{member.description}</p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <span className="bg-gray-800/50 px-2 py-1 rounded-full">
                        {member.tags[0]}
                      </span>
                      <span aria-label={member.tags[1].includes('💻') ? 'laptop' : 'globe'} role="img">
                        {member.tags[1]}
                      </span>
                    </div>
                  </CardBody>
                  <CardFooter className="px-4 sm:px-5 py-3 bg-gray-900/20 border-t border-gray-700/50">
                    <div className="flex justify-between w-full text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-default-400">{member.following}</span>
                        <span className="text-default-500">Following</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-default-400">{member.followers}</span>
                        <span className="text-default-500">Followers</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
