import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal } from "lucide-react";

interface OutputPanelProps {
  output: string;
}

const OutputPanel: React.FC<OutputPanelProps> = ({ output }) => (
  <div className="h-full bg-[#0A1929] p-2 md:p-4 rounded-lg shadow-lg">
    <div className="flex items-center mb-2 space-x-2">
      <Terminal className="w-5 h-5 text-[#9D4EDD]" />
      <h2 className="text-base md:text-lg font-semibold text-[#9D4EDD]">
        Output
      </h2>
    </div>
    <ScrollArea className="h-[calc(100%-2rem)] rounded-md border border-[#2D3748] bg-[#1E293B] p-2 md:p-4 shadow-inner">
      <pre className="text-[#E2E8F0] text-sm md:text-base font-mono whitespace-pre-wrap">
        {output}
      </pre>
    </ScrollArea>
  </div>
);

export default OutputPanel;
