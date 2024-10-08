import React from "react";
import { Code2, Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { LoaderCircle } from "lucide-react";
import { Play } from "lucide-react";
import CollaboratorPanel from "./CollaboratorPanel";
import { useCollaborators } from "@/hooks/useCollaborators";
import { Language } from "@/types/languages";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onRunCode: () => void;
  isMobile: boolean;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  onRunCode,
  isMobile,
  isLoading,
}) => {
  const { userlist } = useCollaborators();

  return (
    <div className="flex items-center justify-between border-b border-[#2D3748] bg-[#0A1929] p-2 md:p-4">
      <div className="flex items-center space-x-2 md:space-x-3">
        <div className="bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] p-1 md:p-2 rounded-lg">
          <Code2 className="h-6 w-6 md:h-6 md:w-6 text-[#E2E8F0]" />
        </div>
        <h1 className="text-lg md:text-2xl font-bold text-[#E2E8F0]">
          CodeStream
        </h1>
      </div>
      <div className="flex items-center space-x-4 md:space-x-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        <Button
          onClick={onRunCode}
          className="bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-md md:text-md px-4 md:px-6 h-9 md:h-10"
          disabled={isLoading}
        >
          {isLoading ? (
            <LoaderCircle className="animate-spin text-[#E2E8F0]" />
          ) : (
            <Play className="text-[#E2E8F0]" fill="white" />
          )}
        </Button>
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 md:h-10 md:w-10 bg-[#1E293B] border-[#2D3748] text-[#E2E8F0] hover:bg-[#2D3748] hover:text-[#9D4EDD] transition-colors duration-200"
              >
                <Menu className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[200px] sm:w-[340px] p-0 bg-gradient-to-b from-[#0A1929] to-[#0F2942] border-l border-[#2D3748]"
            >
              <SheetTitle className="sr-only">Collaborator Panel</SheetTitle>
              <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#9D4EDD] focus:ring-offset-2 disabled:pointer-events-none">
                <X className="h-4 w-4 bg-[#9626f2]" />
                <span className="sr-only text-white">Close</span>
              </SheetClose>
              <CollaboratorPanel userlist={userlist} />
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
};

export default Header;
