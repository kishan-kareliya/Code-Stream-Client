import { motion } from "framer-motion";
import { FaJsSquare, FaPython, FaJava, FaPhp } from "react-icons/fa";
import {
  SiTypescript,
  SiRuby,
  SiGo,
  SiRust,
  SiCplusplus,
  SiC,
} from "react-icons/si";

const languages = [
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "Java", icon: FaJava },
  { name: "C++", icon: SiCplusplus },
  { name: "C", icon: SiC },
  { name: "Go", icon: SiGo },
  { name: "Rust", icon: SiRust },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Ruby", icon: SiRuby },
  { name: "PHP", icon: FaPhp },
];

const SupportedLanguagesSection = () => {
  return (
    <section className="py-16 bg-[#0A1929]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Supported Languages
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <lang.icon className="text-5xl mb-2 text-[#9333EA]" />
              <span className="text-white text-center">{lang.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedLanguagesSection;
