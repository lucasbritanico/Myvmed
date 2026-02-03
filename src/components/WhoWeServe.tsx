import { motion } from "framer-motion";
import { Building2, Stethoscope, Building, Users } from "lucide-react";

const audiences = [
  {
    icon: Stethoscope,
    title: "Private Practices",
    description: "Solo practitioners and small practices looking to reduce administrative burden and improve patient care.",
    benefits: ["Reduce overhead costs", "More time with patients", "Improved work-life balance"],
  },
  {
    icon: Building2,
    title: "Medical Clinics",
    description: "Multi-provider clinics seeking efficient support for scheduling, billing, and patient communication.",
    benefits: ["Streamlined operations", "Better patient flow", "Consistent service quality"],
  },
  {
    icon: Building,
    title: "Hospitals",
    description: "Healthcare facilities requiring scalable support for various departments and specialties.",
    benefits: ["Scalable workforce", "24/7 coverage options", "Cost-effective staffing"],
  },
  {
    icon: Users,
    title: "Healthcare Groups",
    description: "Multi-location practices needing centralized support with consistent standards across sites.",
    benefits: ["Standardized processes", "Centralized management", "Quality assurance"],
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
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
            Who We Serve
          </span>
          <h2 className="text-display font-bold text-foreground mb-6">
            Tailored Solutions for Every Healthcare Setting
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Whether you're a solo practitioner or a large healthcare system, we customize our services to meet your unique needs.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 transition-all group-hover:bg-primary group-hover:shadow-glow">
                <audience.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-heading-sm font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-body-sm text-muted-foreground mb-4">
                {audience.description}
              </p>
              
              <ul className="space-y-2">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-body-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
