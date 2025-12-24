import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Building2, Target, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: 10000,
    suffix: "+",
    label: "Automations Completed",
    color: "primary",
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Businesses Served",
    color: "secondary",
  },
  {
    icon: Target,
    value: 99.9,
    suffix: "%",
    label: "Accuracy Rate",
    color: "accent",
  },
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Average Growth",
    color: "primary",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-wide relative z-10 px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border rounded-2xl p-6 md:p-8 text-center hover-lift"
            >
              <div
                className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  stat.color === "primary"
                    ? "bg-primary/20 text-primary"
                    : stat.color === "secondary"
                    ? "bg-secondary/20 text-secondary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
