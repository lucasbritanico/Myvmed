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
    icon: GraduationCap,
    title: "Skilled Professionals",
    description: "Our VMAs are college-educated healthcare professionals with strong English proficiency and extensive training in US healthcare systems.",
  },
  {
    icon: Shield,
    title: "HIPAA-Aware Training",
    description: "Every team member undergoes comprehensive HIPAA awareness training, ensuring your patient data is handled with the utmost care and compliance.",
  },
  {
    icon: TrendingDown,
    title: "Cost-Efficient Solutions",
    description: "Reduce operational costs by up to 40% compared to US-based staffing while maintaining high quality standards and service excellence.",
  },
  {
    icon: Globe,
    title: "US Healthcare Aligned",
    description: "Deep understanding of American healthcare workflows, terminology, and patient expectations ensures seamless integration with your practice.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous screening, continuous training, and performance monitoring ensure consistent, high-quality service delivery.",
  },
  {
    icon: Clock,
    title: "Flexible Coverage",
    description: "From standard business hours to 24/7 coverage, we customize schedules to match your practice needs and timezone requirements.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/30 to-transparent" />
      
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
            <span className="text-body-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Why Philippines-Based VMAs
            </span>
            <h2 className="text-display font-bold text-foreground mb-6">
              The Smart Choice for Healthcare Support
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              The Philippines has emerged as a global leader in healthcare outsourcing, 
              combining exceptional talent with cultural alignment to American healthcare standards.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-premium p-6 text-center">
                <div className="text-display-lg font-bold text-primary mb-2">500K+</div>
                <div className="text-body-sm text-muted-foreground">Healthcare BPO Workers</div>
              </div>
              <div className="card-premium p-6 text-center">
                <div className="text-display-lg font-bold text-primary mb-2">96%</div>
                <div className="text-body-sm text-muted-foreground">English Proficiency</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Reasons Grid */}
          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
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
