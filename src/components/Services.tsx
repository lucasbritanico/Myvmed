import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "Bilingual Virtual Assistants",
    description: "Expand your patient reach with our Spanish-speaking Virtual Medical Assistants, ensuring seamless communication and care.",
    href: "/services",
  },
  {
    id: "02",
    title: "Medical Virtual Assistants",
    description: "Live charting, transcription, referrals, and phone triage. Our HVAs integrate seamlessly into your practice workflow.",
    href: "/services",
  },
  {
    id: "03",
    title: "Dental Virtual Assistants",
    description: "Insurance verification, appointment scheduling, and treatment planning coordination for modern dental practices.",
    href: "/services",
  },
  {
    id: "04",
    title: "Veterinary Virtual Assistants",
    description: "Support for veterinary clinics including record keeping, client communications, and administrative tasks.",
    href: "/services",
  },
  {
    id: "05",
    title: "Optometry Virtual Assistants",
    description: " specialized support for eye care professionals, handling pre-testing documentation, billing, and patient recall.",
    href: "/services",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Finovo Style Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-8 bg-gray-300 block"></span>
              <span className="text-gray-500 font-bold tracking-widest text-xs uppercase">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight tracking-tight">
              Comprehensive <br />
              <span className="text-secondary">Healthcare Support.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/services"
              className="group flex items-center gap-2 text-primary font-bold text-lg border-b border-gray-200 pb-1 hover:border-secondary transition-colors"
            >
              View all services
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Minimalist List Layout */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group border-t border-gray-200 py-16 transition-all duration-300 hover:bg-gray-50/80 hover:px-6 hover:-mx-6 rounded-3xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="col-span-1 md:col-span-2">
                  <span className="text-sm font-bold text-secondary border border-secondary/20 rounded-full px-3 py-1 bg-secondary/5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {service.id}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-1 md:col-span-4">
                  <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-1 md:col-span-4">
                  <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-600">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Action */}
                <div className="col-span-1 md:col-span-2 flex justify-end">
                  <Link
                    to={service.href}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default Services;
