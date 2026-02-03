import { motion } from "framer-motion";
import { 
  Stethoscope, 
  FileText, 
  HeartPulse, 
  DollarSign,
  Calendar,
  Phone,
  ClipboardList,
  Users
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Virtual Medical Assistants",
    description: "Dedicated healthcare professionals handling patient communications, appointment scheduling, and follow-ups.",
    features: ["Patient Outreach", "Appointment Management", "Prescription Refills"],
  },
  {
    icon: FileText,
    title: "Administrative Support",
    description: "Comprehensive back-office support to streamline your practice operations and reduce paperwork.",
    features: ["Medical Records", "Insurance Verification", "Referral Coordination"],
  },
  {
    icon: HeartPulse,
    title: "Clinical Support",
    description: "Non-diagnostic clinical assistance to help your medical team focus on patient care.",
    features: ["Chart Preparation", "Lab Result Tracking", "Prior Authorizations"],
  },
  {
    icon: DollarSign,
    title: "Revenue Cycle Support",
    description: "Optimize your billing processes and improve collections with dedicated RCM professionals.",
    features: ["Claims Management", "Payment Posting", "A/R Follow-up"],
  },
];

const additionalServices = [
  { icon: Calendar, label: "Scheduling" },
  { icon: Phone, label: "Patient Calls" },
  { icon: ClipboardList, label: "Documentation" },
  { icon: Users, label: "Care Coordination" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 section-alt">
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
            What We Do
          </span>
          <h2 className="text-display font-bold text-foreground mb-6">
            Comprehensive Healthcare Support Solutions
          </h2>
          <p className="text-body-lg text-muted-foreground">
            From patient communication to revenue cycle management, we provide the skilled support 
            your practice needs to thrive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 transition-all group-hover:bg-primary group-hover:shadow-glow">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-sm font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-secondary text-body-sm text-secondary-foreground"
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

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6"
        >
          {additionalServices.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-body-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
