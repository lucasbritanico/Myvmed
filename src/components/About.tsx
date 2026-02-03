import { motion } from "framer-motion";
import { Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Mindset",
    description: "Every task we handle is done with patient well-being at the center.",
  },
  {
    icon: Target,
    title: "Excellence in Delivery",
    description: "US-standard quality in every interaction and task completion.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We become an extension of your team, not just a vendor.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-body-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="text-display font-bold text-foreground mb-6">
              Bridging Filipino Talent with US Healthcare
            </h2>
            <div className="space-y-4 text-body-lg text-muted-foreground mb-8">
              <p>
                We started with a simple belief: US healthcare providers deserve access to exceptional 
                talent that understands their needs, shares their commitment to patient care, and 
                delivers consistent, high-quality support.
              </p>
              <p>
                Based in the Philippines, we've assembled a team of dedicated healthcare professionals 
                who bring not just skills, but genuine care to every interaction. We train them to 
                US standards because that's what your patients deserve.
              </p>
              <p>
                We're not the biggest, and we don't claim to be. But we are committed, thorough, 
                and genuinely invested in helping your practice succeed.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Let's talk about your practice
              <span className="text-lg">→</span>
            </motion.a>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-premium p-6 flex gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-glow">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-heading-sm font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
