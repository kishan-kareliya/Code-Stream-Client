import React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import CodeEditor from "./CodeEditor";
import OutputPanel from "./OutputPanel";
import { Language } from "@/types/languages";

interface EditorLayoutProps {
  language: Language;
  code: string;
  setCode: (code: string) => void;
  output: string;
  isMobile: boolean;
}

const EditorLayout: React.FC<EditorLayoutProps> = ({
  language,
  code,
  setCode,
  output,
  isMobile,
}) => (
  <ResizablePanelGroup direction="vertical">
    <ResizablePanel defaultSize={70}>
      <CodeEditor
        language={language}
        code={code}
        setCode={setCode}
        isMobile={isMobile}
      />
    </ResizablePanel>
    <ResizableHandle className="bg-[#37465f] h-4 cursor-row-resize" />
    <ResizablePanel defaultSize={30} minSize={20}>
      <OutputPanel output={output} />
    </ResizablePanel>
  </ResizablePanelGroup>
);

export default EditorLayout;
