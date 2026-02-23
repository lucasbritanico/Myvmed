import { motion } from "framer-motion";
import { MessageSquare, UserCheck, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="process" className="py-16 lg:py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-bold text-primary uppercase tracking-wider mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple Process, Exceptional Results
          </h2>
          <p className="text-lg text-gray-600">
            Getting started is easy. We handle the complexity so you can focus on what matters most — your patients.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Animated Connector - Desktop Only */}
          <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-0.5 bg-gray-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div className="bg-white p-8 text-center rounded-2xl shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 h-full relative z-10 flex flex-col items-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-white text-sm font-bold rounded-full shadow-lg shadow-secondary/30 ring-4 ring-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-secondary/5 mx-auto mb-6 flex items-center justify-center mt-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300 mt-6">
                  <step.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-3 font-medium">
            Ready to transform your practice?
          </p>
          <Link
            to="/consultation"
            className="text-primary font-bold hover:text-secondary inline-flex items-center gap-2 text-lg group transition-colors"
          >
            Start with a free consultation
            <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
