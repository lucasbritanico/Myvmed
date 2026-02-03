import { motion } from "framer-motion";
import { MessageSquare, UserCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We learn about your practice, understand your needs, and discuss how our VMAs can help streamline your operations.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Custom Matching",
    description: "We carefully select and train VMAs specifically for your practice, ensuring they understand your workflows and systems.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Seamless Launch",
    description: "Your dedicated VMA integrates smoothly with your team, with ongoing support and quality monitoring from day one.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-body-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="text-display font-bold text-foreground mb-6">
            Simple Process, Exceptional Results
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Getting started is easy. We handle the complexity so you can focus on what matters most — your patients.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="card-premium p-8 text-center relative z-10 h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-body-sm font-bold rounded-full shadow-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-6 flex items-center justify-center mt-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-heading-sm font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-body-lg text-muted-foreground mb-2">
            Ready to transform your practice?
          </p>
          <a
            href="#contact"
            className="text-primary font-medium hover:underline inline-flex items-center gap-2"
          >
            Start with a free consultation
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
