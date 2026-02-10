import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Virtual Medical Assistants", href: "/services" },
    { label: "Administrative Support", href: "/services" },
    { label: "Clinical Support", href: "/services" },
    { label: "Revenue Cycle Support", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/about" }, // Redirecting to About for now as WhyUs is typically part of home/about
    { label: "How It Works", href: "/services" }, // Process is on Services page
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "HIPAA Compliance", href: "/" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-4 mb-6 inline-block bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <img
                src="/logo-new.jpg"
                alt="Brand Logo"
                className="h-16 w-auto rounded-lg"
              />
            </Link>
            <p className="text-sm text-white/80 max-w-xs leading-relaxed">
              Dedicated virtual medical assistants connecting world-class healthcare talent with forward-thinking practices.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-6">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info or Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <span>123 Medical Center Dr,<br />Suite 100, Tampa FL</span>
              </li>
              <li>
                <a href="tel:+15555555555" className="hover:text-white transition-colors">
                  (555) 555-5555
                </a>
              </li>
              <li>
                <a href="mailto:hello@myvmed.com" className="hover:text-white transition-colors">
                  hello@myvmed.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40"
        >
          <p>
            © {new Date().getFullYear()} Myvmed. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.label} to={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
