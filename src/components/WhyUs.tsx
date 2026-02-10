import { motion } from "framer-motion";
import {
  GraduationCap,
  Shield,
  TrendingDown,
  Globe,
  Award,
  Clock
} from "lucide-react";

const reasons = [
  {
    icon: TrendingDown,
    title: "Flat-Rate Pricing",
    description: "Simple, transparent pricing. No hidden fees, no payroll taxes, and no benefits to manage. Just one flat hourly rate.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Our Virtual Assistants are fully trained in HIPAA regulations, ensuring your patient data remains secure and protected at all times.",
  },
  {
    icon: Clock,
    title: "No Long-Term Contracts",
    description: "We earn your business every day. Enjoy the flexibility of month-to-month service with no long-term binding contracts.",
  },
  {
    icon: GraduationCap,
    title: "Qualified Professionals",
    description: "Our VAs are often registered nurses or allied health professionals in the Philippines, bringing clinical knowledge to your admin tasks.",
  },
  {
    icon: Award,
    title: "No Setup Fees",
    description: "Get started quickly without any upfront implementation or setup costs. We make onboarding simple and strictly efficient.",
  },
  {
    icon: Globe,
    title: "Live Charting",
    description: "Our VAs can listen in via secure connection and chart in real-time, allowing you to finish your notes by the time the patient leaves.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-warm-100/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-sm font-bold text-warm-500 uppercase tracking-wider mb-2 block">
              Why Philippines-Based VMAs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Smart Choice for Healthcare Support
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Philippines has emerged as a global leader in healthcare outsourcing,
              combining exceptional medical talent with deep cultural alignment to American healthcare standards.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary/20 p-6 rounded-2xl text-center border border-secondary/20">
                <div className="text-4xl font-bold text-primary mb-1">500K+</div>
                <div className="text-sm font-medium text-gray-600">Healthcare BPO Workers</div>
              </div>
              <div className="bg-warm-50 p-6 rounded-2xl text-center border border-warm-100">
                <div className="text-4xl font-bold text-warm-600 mb-1">96%</div>
                <div className="text-sm font-medium text-gray-600">English Proficiency</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Reasons Grid */}
          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-secondary hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  <reason.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
