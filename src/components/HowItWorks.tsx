import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Play, Zap } from "lucide-react";

const steps = [
  {
    icon: <Users className="w-10 h-10 text-[#9333EA]" />,
    title: "Connect",
    description: "Invite your team members to join your coding session.",
  },
  {
    icon: <Code className="w-10 h-10 text-[#9333EA]" />,
    title: "Collaborate",
    description:
      "Code together in real-time with syntax highlighting for multiple languages.",
  },
  {
    icon: <Zap className="w-10 h-10 text-[#9333EA]" />,
    title: "Enhance",
    description: "Get intelligent coding suggestions as you type.",
  },
  {
    icon: <Play className="w-10 h-10 text-[#9333EA]" />,
    title: "Execute",
    description:
      "Run your code and see results instantly, shared with all collaborators.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-300">
            Experience seamless collaboration in four simple steps
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#1E293B] border-gray-700 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
