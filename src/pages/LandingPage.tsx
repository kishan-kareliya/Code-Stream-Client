import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Code2 } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import FeatureCards from "@/components/FeaturesCardSection";
import { Link, useNavigate } from "react-router-dom";
import SupportedLanguagesSection from "@/components/SupportedLanguagesSection";
import HowItWorks from "@/components/HowItWorks";

const LandingPage: React.FC = () => {
  const [codeText, setCodeText] = useState<string>("");
  const navigate = useNavigate();
  const fullText = `function collaborate() {
  const team = ['Alice', 'Bob', 'Charlie'];
  return team.map(member => \`\${member} is coding!\`);
}
// Output:
// ["Alice is coding!", "Bob is coding!", "Charlie is coding!"]`;

  const codeAnimation = useAnimation();

  const handleRedirect = () => {
    navigate("/room");
  };

  useEffect(() => {
    let isMounted = true;

    const animateCode = async () => {
      while (isMounted) {
        for (let i = 0; i <= fullText.length; i++) {
          if (!isMounted) break;
          setCodeText(fullText.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        for (let i = fullText.length; i >= 0; i--) {
          if (!isMounted) break;
          setCodeText(fullText.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    animateCode();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    codeAnimation.start({
      opacity: 1,
      transition: { duration: 0.5 },
    });
  }, [codeText, codeAnimation]);

  return (
    <div className="min-h-screen bg-[#0A1929] text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Code2 size={32} className="text-[#9333EA]" />
            <span className="text-2xl font-bold">CodeStream</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={handleRedirect}
              className="bg-[#9333EA] text-white border-[#9333EA] hover:bg-[#7C3AED] hover:text-white"
            >
              Get Started
            </Button>
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="md:text-5xl text-4xl font-bold mb-4">
            Collaborate in Real-Time
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of coding with CodeStream
          </p>
          <Button
            className="bg-[#9333EA] text-white hover:bg-[#7C3AED]"
            onClick={handleRedirect}
          >
            Start Coding Now <ChevronRight className="ml-2" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:mb-32 mb-16 flex flex-col md:flex-row gap-8"
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Why Choose CodeStream?</h2>
            <p className="text-lg text-gray-300 mb-6">
              CodeStream is the ultimate platform for collaborative coding. Our
              real-time collaboration features allow you to work seamlessly with
              your team, no matter where they are in the world.
            </p>
          </div>
          <Card className="bg-[#1E293B] border-gray-700 md:w-1/2">
            <CardContent className="p-4 md:p-6 h-[200px] overflow-hidden">
              <motion.pre
                animate={codeAnimation}
                className="text-purple-400 font-mono text-sm md:text-md h-full overflow-y-auto whitespace-pre-wrap"
              >
                <code>{codeText}</code>
              </motion.pre>
            </CardContent>
          </Card>
        </motion.div>
        <FeatureCards />
        <SupportedLanguagesSection />
        <HowItWorks />
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p className="mb-4">Made with ❤️ by Kishan Kareliya</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="https://github.com/kishan-kareliya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-[#9333EA] transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/kishan-kareliya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 hover:text-[#9333EA] transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            to="https://x.com/kishann__12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-6 h-6 hover:text-[#9333EA] transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
