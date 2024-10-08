import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Language, languages } from "@/types/languages";

interface LanguageSelectorProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const boilerplates: { [key: string]: string } = {
  python: `# Python 3.10.0 Boilerplate\nprint("Hello, World!")`,
  javascript: `// JavaScript 18.15.0 Boilerplate\nconsole.log("Hello, World!");`,
  java: `// Java 15.0.2 Boilerplate\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
  cpp: `// C++ 10.2.0 Boilerplate\n#include<iostream>\nint main() {\n  std::cout << "Hello, World!";\n  return 0;\n}`,
  c: `// C 10.2.0 Boilerplate\n#include<stdio.h>\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`,
  go: `// Go 1.16.2 Boilerplate\npackage main\nimport "fmt"\nfunc main() {\n  fmt.Println("Hello, World!")\n}`,
  rust: `// Rust 1.68.2 Boilerplate\nfn main() {\n  println!("Hello, World!");\n}`,
  typescript: `// TypeScript 5.0.3 Boilerplate\nconsole.log("Hello, World!");`,
  ruby: `# Ruby 3.0.1 Boilerplate\nputs "Hello, World!"`,
  php: `// PHP 8.2.3 Boilerplate\n<?php\necho "Hello, World!";\n?>`,
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  setLanguage,
}) => (
  <Select
    value={language.value}
    onValueChange={(value) => {
      const selectedLang = languages.find((lang) => lang.value === value);
      if (selectedLang) {
        setLanguage(selectedLang);
        const newCode = boilerplates[selectedLang.value] || "";
        console.log(newCode);
      }
    }}
  >
    <SelectTrigger className="w-[120px] md:w-[180px] bg-[#1E293B] border-[#2D3748] text-[#E2E8F0] text-xs md:text-sm rounded-md focus:ring-2 focus:ring-[#9D4EDD] focus:border-transparent transition-all duration-300">
      <SelectValue>{`${language.name} (${language.version})`}</SelectValue>
    </SelectTrigger>
    <SelectContent className="bg-[#1E293B] border-[#2D3748] text-[#E2E8F0] rounded-md shadow-lg max-h-[300px]">
      {languages.map((lang) => (
        <SelectItem
          key={lang.value}
          value={lang.value}
          className="focus:bg-[#2D3748] focus:text-[#9D4EDD]"
        >
          {`${lang.name} (${lang.version})`}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default LanguageSelector;
