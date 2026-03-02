import { motion } from "framer-motion";
import { Heart, Target, Users, Globe } from "lucide-react";

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
  {
    icon: Globe,
    title: "Bilingual Patient Support",
    description: "Our Spanish-speaking VMAs from Mexico and Latin America ensure no patient is lost in translation.",
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
              World-Class Talent, Built for US Healthcare
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
              <p>
                Additionally, we are proud to offer bilingual capabilities. Our Virtual Medical Assistants
                (VMAs) from Mexico and other Spanish-speaking Latin American countries allow your practice
                to serve Spanish-speaking patients seamlessly and with a cultural connection.
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover="hover"
                variants={{
                  hover: {
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(0, 119, 255, 0.2)",
                    borderColor: "rgba(0, 119, 255, 0.2)",
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }
                }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 + index * 0.15 }}
                className="card-premium p-6 flex gap-5"
              >
                <div className="shrink-0">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      variants={{
                        hover: {
                          rotate: [0, -8, 8, -6, 6, 0],
                          scale: 1.05,
                          transition: { duration: 0.5, ease: "easeInOut" }
                        }
                      }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-glow"
                    >
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </motion.div>
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
