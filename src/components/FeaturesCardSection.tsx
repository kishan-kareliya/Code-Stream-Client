import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Users, Code2 } from "lucide-react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap size={32} />,
    title: "Real-Time Collaboration",
    description:
      "Code together seamlessly with instant updates. Experience the power of collaborative coding like never before.",
  },
  {
    icon: <Users size={32} />,
    title: "Multi-User Support",
    description:
      "Invite your team and code as one. Our platform supports multiple users working on the same project simultaneously.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Smart Syntax Highlighting",
    description:
      "Support for multiple languages out of the box. Our intelligent syntax highlighting makes coding a breeze.",
  },
];

export default function FeatureCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="grid md:grid-cols-3 gap-8"
    >
      {features.map((feature, index) => (
        <Card
          key={index}
          className="bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-gray-700 overflow-hidden"
        >
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="p-2 text-[#9333EA] rounded-md mr-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-300 mb-6 flex-grow">
              {feature.description}
            </p>
            <Button
              variant="default"
              className="self-start bg-[#9333EA] hover:bg-[#7C3AED] text-white"
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
}
