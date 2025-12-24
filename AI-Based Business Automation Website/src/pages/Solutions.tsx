import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  Stethoscope,
  Landmark,
  Factory,
  Plane,
  GraduationCap,
  Home,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise",
    problem: "Complex workflows across multiple departments slow down operations.",
    solution: "Unified automation platform that connects all your systems and streamlines cross-functional processes.",
    features: ["Multi-department workflows", "ERP integration", "Custom reporting"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    problem: "Manual order processing and inventory management cause delays and errors.",
    solution: "Automated order fulfillment, real-time inventory sync, and intelligent customer service bots.",
    features: ["Order automation", "Inventory sync", "Customer support AI"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    problem: "Administrative burden takes time away from patient care.",
    solution: "HIPAA-compliant automation for scheduling, billing, and patient communication.",
    features: ["HIPAA compliant", "Patient scheduling", "Billing automation"],
  },
  {
    icon: Landmark,
    title: "Finance",
    problem: "Manual data entry and compliance reporting are time-consuming and error-prone.",
    solution: "Automated data extraction, reconciliation, and regulatory compliance reporting.",
    features: ["Data extraction", "Compliance automation", "Risk monitoring"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    problem: "Production tracking and quality control processes are fragmented.",
    solution: "Connected factory automation with real-time monitoring and predictive maintenance.",
    features: ["Production tracking", "Quality control", "Predictive maintenance"],
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    problem: "Booking management and guest experience require constant manual attention.",
    solution: "Smart booking systems, personalized guest communications, and revenue optimization.",
    features: ["Smart booking", "Guest automation", "Revenue optimization"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    problem: "Administrative tasks overwhelm educators and slow down student services.",
    solution: "Automated enrollment, grading assistance, and personalized learning pathways.",
    features: ["Enrollment automation", "Grading assistance", "Learning analytics"],
  },
  {
    icon: Home,
    title: "Real Estate",
    problem: "Lead management and property documentation are inefficient.",
    solution: "Automated lead nurturing, document processing, and smart property matching.",
    features: ["Lead nurturing", "Document processing", "Property matching"],
  },
];

const Solutions = () => {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-wide relative z-10 px-4 md:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary font-semibold mb-4"
          >
            INDUSTRY SOLUTIONS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            Automation for <span className="gradient-text">Every Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover tailored AI automation solutions designed specifically for
            your industry's unique challenges and opportunities.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={gridRef} className="section-padding bg-card/30">
        <div className="container-wide px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group gradient-border rounded-2xl p-8 hover-lift cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="text-destructive font-medium">Problem:</span>{" "}
                        {solution.problem}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-medium">Solution:</span>{" "}
                        {solution.solution}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide px-4 md:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            We create custom automation solutions for any industry. Let's discuss
            your specific needs.
          </p>
          <Button variant="hero" size="lg" className="group">
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Solutions;
