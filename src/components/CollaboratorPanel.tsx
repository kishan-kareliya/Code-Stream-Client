import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  name: string;
  image: string;
  typing: boolean;
}

interface CollaboratorPanelProps {
  userlist: User[];
}

const CollaboratorPanel: React.FC<CollaboratorPanelProps> = ({ userlist }) => {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#0A1929] to-[#0F2942] text-[#E2E8F0]">
      <div className="border-b border-[#2D3748] p-4">
        <h2 className="md:text-xl text-lg font-semibold text-[#E2E8F0]">
          Collaborators
        </h2>
      </div>
      <ScrollArea className="flex-grow p-4">
        <div className="flex items-center space-x-2 text-[#9D4EDD] mb-4">
          <Users className="h-5 w-5 " />
          <span>{userlist ? userlist.length : 0} users online</span>
        </div>
        <div className="space-y-4">
          {userlist &&
            userlist.map((user, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className="bg-[#1E293B] text-[#9D4EDD]">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {user.typing && (
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-[#0F2942]"></span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{user.name}</span>
                  {user.typing && (
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-[#9D4EDD]">Typing</span>
                      <div className="flex space-x-1">
                        <Dot delay="0s" />
                        <Dot delay="0.2s" />
                        <Dot delay="0.4s" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
};

const Dot: React.FC<{ delay: string }> = ({ delay }) => (
  <div
    className="h-1 w-1 rounded-full bg-[#9D4EDD] opacity-0 animate-pulse"
    style={{ animationDelay: delay, animationDuration: "1s" }}
  ></div>
);

export default CollaboratorPanel;
