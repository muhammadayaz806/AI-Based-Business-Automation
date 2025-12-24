import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Reduce operational costs by up to 80%",
  "Eliminate human error in repetitive tasks",
  "Scale operations without adding headcount",
  "Get actionable insights from your data",
  "Integrate with 500+ business tools",
  "Deploy in minutes, not months",
  "24/7 dedicated support team",
  "Custom solutions for your industry",
];

export const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gradient-to-l from-primary/10 to-transparent blur-3xl" />

      <div className="container-wide relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary font-semibold mb-4"
            >
              WHY CHOOSE US
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            >
              The Smarter Way to{" "}
              <span className="gradient-text">Run Your Business</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Join thousands of forward-thinking businesses that have
              transformed their operations with our AI automation platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Benefits List */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
