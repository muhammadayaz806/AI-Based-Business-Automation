import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Workflow,
  BarChart3,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Our advanced AI learns from your workflows and continuously optimizes processes for maximum efficiency.",
  },
  {
    icon: Workflow,
    title: "Smart Workflow Automation",
    description:
      "Automate complex multi-step workflows with our intuitive drag-and-drop builder and pre-built templates.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Get instant insights into your automation performance with comprehensive dashboards and reports.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards keep your data safe.",
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description:
      "Your automations run around the clock without breaks, ensuring continuous business operations.",
  },
  {
    icon: Sparkles,
    title: "No-Code Platform",
    description:
      "Build powerful automations without writing a single line of code. Perfect for teams of any skill level.",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card/50">
      <div className="container-wide px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold mb-4"
          >
            POWERFUL FEATURES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Automate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Discover the complete toolkit for transforming your business
            operations with intelligent automation.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group gradient-border rounded-2xl p-8 hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
