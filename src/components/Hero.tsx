import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 40, damping: 20, delay: 0.4 }
    },
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-primary pt-40 md:pt-56 pb-20 text-white selection:bg-secondary selection:text-white">
      {/* Finovo-style Active Ambient Glow */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          x: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="h-[1px] w-8 bg-secondary/50 block"></span>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase">Premium Virtual Staffing</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-6"
            >
              Leading Healthcare <br />
              <span className="text-secondary">
                Virtual Assistant
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Solutions.
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              Cut staffing costs by up to 70% — without sacrificing quality.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              <strong className="text-white block mb-2">For Medical, Dental, Veterinary & Optometry Practices.</strong>
              Reclaim your time and go home before 5 o'clock. Our HIPAA-compliant virtual assistants handle the busywork so you can focus on your patients.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-base shadow-[0_4px_20px_rgba(0,119,255,0.3)] shrink-0"
                asChild
              >
                <Link to="/consultation" className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    Get Started <span className="text-xl">↗</span>
                  </motion.div>
                </Link>
              </Button>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                {/* Social Proof Avatar Stack */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-800 overflow-hidden shrink-0">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm leading-none">100+</p>
                    <p className="text-gray-400 text-xs">Trusted Clinics</p>
                  </div>
                </div>

                {/* Golden USP Badge */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <motion.div
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-amber-500/25 rounded-full blur-md"
                  />
                  <div className="relative flex items-center gap-3 px-4 py-2 rounded-full border border-amber-400/40 bg-amber-950/20 backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.15)]">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-[0_0_10px_rgba(251,191,36,0.3)] shrink-0">
                      <DollarSign className="w-5 h-5 text-indigo-950" strokeWidth={2.5} />
                    </div>
                    <div className="text-left py-0.5">
                      <span className="block text-[13px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 leading-none mb-1">
                        SAVE UP TO 70%
                      </span>
                      <span className="block text-[10px] font-bold text-amber-200/70 tracking-wider uppercase leading-none">
                        On Labor Costs
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual - Large Rounded Card with Floating Animation */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-3"
            >
              <div className="rounded-[2rem] overflow-hidden relative aspect-[4/3] group">
                <img
                  src="/hero-image.png"
                  alt="Medical Professional"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Available Now</span>
                  </div>
                  <p className="text-white text-xl font-medium leading-snug">
                    "The most reliable staffing update we've ever made."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-[40px] opacity-40 pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
