import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, FileCheck, Eye, Server } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "HIPAA Awareness",
    description: "All team members complete comprehensive HIPAA training before client engagement.",
  },
  {
    icon: Lock,
    title: "Data Security",
    description: "Enterprise-grade security protocols protect all patient information and communications.",
  },
  {
    icon: UserCheck,
    title: "Background Screening",
    description: "Rigorous vetting process including background checks and reference verification.",
  },
  {
    icon: FileCheck,
    title: "Compliance Training",
    description: "Ongoing education on US healthcare regulations and compliance requirements.",
  },
  {
    icon: Eye,
    title: "Quality Monitoring",
    description: "Continuous performance tracking and quality assurance reviews.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "HIPAA-compliant technology stack with encrypted communications.",
  },
];

const Trust = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-background">
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
            Trust & Compliance
          </span>
          <h2 className="text-display font-bold text-foreground mb-6">
            Your Data Security is Our Priority
          </h2>
          <p className="text-body-lg text-muted-foreground">
            We understand the critical importance of protecting patient information. 
            Our comprehensive security measures ensure your practice stays compliant and your data stays safe.
          </p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-body-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-body-sm font-medium text-foreground">
              HIPAA Awareness Trained & Certified Team
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
