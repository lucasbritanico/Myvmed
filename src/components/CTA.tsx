import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden">

            {/* Card Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">

              {/* Left Side: Main Call to Action */}
              <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
                <div className="w-20 h-20 rounded-3xl bg-secondary/10 flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-lg shadow-secondary/10">
                  <Calendar className="w-10 h-10 text-secondary" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  Ready to elevate your practice?
                </h2>
                <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Schedule a free 20-minute consultation. We'll analyze your workflow and show you exactly how a VMA can save you 15+ hours a week.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="h-16 px-10 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-bold shadow-xl shadow-primary/25 transition-all hover:scale-[1.02] hover:-translate-y-1">
                    <Link to="/consultation">
                      Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                <p className="mt-6 text-sm text-gray-400 font-medium">
                  No commitment required • 100% Confidential
                </p>
              </div>

              {/* Right Side: Direct Contact Cards */}
              <div className="lg:col-span-5 flex flex-col justify-center gap-6">
                <div className="relative">
                  {/* Vertical line for desktop */}
                  <div className="hidden lg:block absolute -left-10 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

                  <h3 className="text-xl font-bold text-primary mb-8 text-center lg:text-left">Or reach out directly</h3>

                  <div className="space-y-4">
                    {/* Email Card */}
                    <a href="mailto:hello@healthbridge.com" className="group block">
                      <div className="bg-gray-50 p-6 rounded-[2rem] border border-transparent hover:bg-white hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 flex items-center gap-6 group-hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-400 mb-1">Email us anytime</p>
                          <p className="text-lg font-bold text-primary">hello@healthbridge.com</p>
                        </div>
                        <ArrowRight className="ml-auto w-5 h-5 text-gray-300 group-hover:text-secondary -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </a>

                    {/* Phone Card */}
                    <a href="tel:+18921248055" className="group block">
                      <div className="bg-gray-50 p-6 rounded-[2rem] border border-transparent hover:bg-white hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 flex items-center gap-6 group-hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-400 mb-1">Call direct line</p>
                          <p className="text-lg font-bold text-primary">+91 89212 48055</p>
                        </div>
                        <ArrowRight className="ml-auto w-5 h-5 text-gray-300 group-hover:text-secondary -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative Blobs inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
