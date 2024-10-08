import React from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import { Language } from "@/types/languages";

interface CodeEditorProps {
  language: Language;
  code: string;
  setCode: (code: string) => void;
  isMobile: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  code,
  setCode,
  isMobile,
}) => {
  const handleEditorWillMount = (monaco: Monaco) => {
    monaco.editor.defineTheme("codeStreamTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6A9955" },
        { token: "keyword", foreground: "569CD6" },
        { token: "string", foreground: "CE9178" },
      ],
      colors: {
        "editor.background": "#0A1929",
        "editor.foreground": "#E2E8F0",
        "editorLineNumber.foreground": "#4B5563",
        "editor.selectionBackground": "#2D3748",
        "editor.inactiveSelectionBackground": "#374151",
        "editorCursor.foreground": "#9D4EDD",
      },
    });
  };

  return (
    <Editor
      height="100%"
      language={language.value}
      defaultLanguage="python"
      value={code}
      onChange={(value) => setCode(value || "")}
      theme="codeStreamTheme"
      beforeMount={handleEditorWillMount}
      options={{
        minimap: { enabled: false },
        fontSize: isMobile ? 16 : 20,
        wordWrap: "on",
        fontFamily: "'JetBrains Mono', monospace",
        fontLigatures: true,
      }}
    />
  );
};

export default CodeEditor;
