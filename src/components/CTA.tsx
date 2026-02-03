import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-display font-bold text-primary-foreground mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-body-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Schedule a free, no-obligation consultation. We'll discuss your needs, 
              answer your questions, and explore how our VMAs can help your practice thrive.
            </p>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-3xl p-8 lg:p-12 shadow-soft-lg"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Main CTA */}
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-heading font-bold text-foreground mb-4">
                  Book Your Free Consultation
                </h3>
                <p className="text-body text-muted-foreground mb-6">
                  A 20-minute call to understand your practice needs and how we can help. 
                  No pressure, just a friendly conversation.
                </p>
                <Button size="lg" className="shadow-glow group w-full lg:w-auto">
                  Schedule Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Right - Contact Info */}
              <div className="border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-12">
                <h4 className="text-heading-sm font-semibold text-foreground mb-6">
                  Or reach out directly
                </h4>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@vmacare.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-body-sm text-muted-foreground">Email us at</div>
                      <div className="text-body font-medium text-foreground group-hover:text-primary transition-colors">
                        hello@vmacare.com
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+1-555-000-0000"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-body-sm text-muted-foreground">Call us at</div>
                      <div className="text-body font-medium text-foreground group-hover:text-primary transition-colors">
                        +1 (555) 000-0000
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-body-sm text-primary-foreground/60 mt-8"
          >
            No commitment required • Response within 24 hours • HIPAA-aware team
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
