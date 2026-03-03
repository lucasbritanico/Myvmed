import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Only show if not dismissed in this session
        const dismissed = sessionStorage.getItem("bannerDismissed");
        if (!dismissed) {
            // Small delay before it pops up nicely
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem("bannerDismissed", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && !isDismissed && (
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 40, scale: 0.95 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
                    className="fixed bottom-6 inset-x-0 mx-auto z-[100] w-[95%] max-w-3xl pointer-events-none"
                >
                    <div className="relative overflow-hidden rounded-2xl bg-[#0f172a]/85 backdrop-blur-xl border border-blue-500/30 p-[1px] shadow-[0_10px_40px_-10px_rgba(0,123,255,0.4)] pointer-events-auto">

                        {/* Animated glowing gradient background within the border */}
                        <motion.div
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/0 via-[#007BFF]/15 to-[#007BFF]/0 bg-[length:200%_auto] pointer-events-none"
                        />

                        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 py-3.5 px-4 sm:px-6 bg-[#0f172a]/60 backdrop-blur-sm rounded-2xl">

                            {/* Icon & Details */}
                            <div className="flex items-center gap-4 flex-1">
                                <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-[#007BFF]/20 border border-[#007BFF]/40 shadow-[0_0_15px_rgba(0,123,255,0.3)]">
                                    <TrendingDown className="w-6 h-6 text-[#4da3ff]" />
                                </div>

                                <div className="flex flex-col text-center sm:text-left">
                                    <span className="text-white font-bold text-lg md:text-xl leading-tight inline-flex items-center justify-center sm:justify-start gap-2">
                                        Save <span className="text-[#4da3ff]">up to 70%</span> on Labor Costs
                                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400 animate-pulse-soft" />
                                    </span>
                                    <span className="text-gray-300 text-xs sm:text-sm leading-snug mt-1 max-w-[400px]">
                                        HIPAA-compliant Virtual Assistants for Medical, Dental, Veterinary & Optometry Practices.
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <Link to="/consultation" className="flex-1 sm:flex-none">
                                    <button className="w-full sm:w-auto whitespace-nowrap bg-[#007BFF] hover:bg-[#0069d9] text-white text-sm font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#007BFF]/25 hover:shadow-[#007BFF]/50 active:scale-95 hover:-translate-y-0.5 border border-white/10">
                                        Get Started
                                    </button>
                                </Link>
                                <div className="hidden sm:block w-[1px] h-10 bg-white/10 mx-1"></div>
                                <button
                                    onClick={handleDismiss}
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden sm:block"
                                    aria-label="Dismiss"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Mobile overlay close button */}
                            <button
                                onClick={handleDismiss}
                                className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors sm:hidden"
                                aria-label="Dismiss"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingBanner;
