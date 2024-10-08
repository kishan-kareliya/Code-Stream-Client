import React, { useState } from "react";
import Header from "@/components/Header";
import EditorLayout from "@/components/EditorLayout";
import CollaboratorPanel from "@/components/CollaboratorPanel";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import socket from "../lib/Socket";
import { useResponsive } from "@/hooks/useResponsive";
import { useCodeSync } from "@/hooks/useCodeSync";
import { Language, languages } from "@/types/languages";
import { useCollaborators } from "@/hooks/useCollaborators";
import { executeCode } from "@/lib/api";

interface EditorWorkspaceProps {
  userData: {
    name: string;
    roomId: string;
  };
}

const EditorWorkspace: React.FC<EditorWorkspaceProps> = ({ userData }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);
  const [isLoading, setIsLoading] = useState(false);

  const { name, roomId } = userData;

  const { isMobile } = useResponsive();
  const { code, output, handleCodeChange } = useCodeSync(roomId, name);
  const { userlist } = useCollaborators();

  const handleRunCode = async () => {
    setIsLoading(true);
    socket.emit("code-running", true);
    try {
      const output = await executeCode({
        code,
        language: language.value,
        version: language.version,
      });
      socket.emit("run-code-output", output);
    } catch (error) {
      console.error("Error running code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#1E1E2E] text-white overflow-hidden">
      <div className="flex h-full flex-col">
        <Header
          language={language}
          setLanguage={setLanguage}
          onRunCode={handleRunCode}
          isMobile={isMobile}
          isLoading={isLoading}
        />
        <ResizablePanelGroup direction="horizontal" className="flex-grow">
          <ResizablePanel defaultSize={isMobile ? 100 : 75} minSize={50}>
            <EditorLayout
              language={language}
              code={code}
              setCode={handleCodeChange}
              output={output}
              isMobile={isMobile}
            />
          </ResizablePanel>
          {!isMobile && (
            <>
              <ResizableHandle className="bg-[#2D3748]" />
              <ResizablePanel defaultSize={15} minSize={15}>
                <CollaboratorPanel userlist={userlist} />
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default EditorWorkspace;
