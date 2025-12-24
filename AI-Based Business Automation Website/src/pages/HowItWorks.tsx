import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Upload,
  Settings,
  PlayCircle,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Connect Your Data",
    description:
      "Seamlessly integrate your existing tools and data sources. Our platform connects with 500+ popular business applications including CRMs, ERPs, and databases.",
    details: [
      "One-click integrations",
      "Secure data transfer",
      "Real-time sync",
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "Design Your Workflow",
    description:
      "Use our intuitive drag-and-drop builder to create custom automation workflows. No coding required – just connect the dots and let AI optimize the process.",
    details: [
      "Visual workflow builder",
      "AI-powered suggestions",
      "Pre-built templates",
    ],
  },
  {
    number: "03",
    icon: PlayCircle,
    title: "Deploy & Automate",
    description:
      "Launch your automation with a single click. Our AI continuously learns from your processes and makes intelligent decisions to improve efficiency.",
    details: [
      "One-click deployment",
      "24/7 operation",
      "Auto-scaling",
    ],
  },
  {
    number: "04",
    icon: BarChart,
    title: "Monitor & Optimize",
    description:
      "Track performance in real-time with comprehensive analytics. Get actionable insights and let our AI suggest optimizations to maximize ROI.",
    details: [
      "Real-time dashboards",
      "Performance insights",
      "Continuous optimization",
    ],
  },
];

const HowItWorks = () => {
  const heroRef = useRef(null);
  const stepsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-wide relative z-10 px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold mb-4"
          >
            HOW IT WORKS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Simple Steps to{" "}
            <span className="gradient-text">Powerful Automation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Get started in minutes, not months. Our streamlined process takes
            you from idea to automated workflow in four simple steps.
          </motion.p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section ref={stepsRef} className="section-padding">
        <div className="container-wide px-4 md:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 last:mb-0 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-2 lg:text-left" : "lg:text-right"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-4 mb-4 ${
                      index % 2 === 1 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <span className="font-display font-bold text-5xl gradient-text opacity-50">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    {step.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-3 ${
                      index % 2 === 1 ? "" : "lg:justify-end"
                    }`}
                  >
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-4 py-2 rounded-full text-sm bg-muted text-muted-foreground"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Icon Card */}
                <div
                  className={`flex items-center ${
                    index % 2 === 1 ? "lg:order-1 lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <div className="relative">
                    {/* Connector to timeline */}
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-primary to-secondary ${
                        index % 2 === 1 ? "left-full" : "right-full"
                      }`}
                    />
                    {/* Node on timeline */}
                    <div
                      className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary glow-box ${
                        index % 2 === 1 ? "left-[calc(100%+4rem)]" : "right-[calc(100%+4rem)]"
                      }`}
                    />

                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl gradient-border flex items-center justify-center glow-box">
                      <step.icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/30">
        <div className="container-wide px-4 md:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join thousands of businesses automating their way to success. Start
            your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HowItWorks;
