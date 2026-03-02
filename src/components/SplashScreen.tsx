import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Ensure we don't show it repeatedly during the same session
        const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
        if (hasSeenSplash) {
            setIsVisible(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem("hasSeenSplash", "true");
        }, 2000); // 2 seconds delay as requested

        return () => clearTimeout(timer);
    }, []);

    const handleSkip = () => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenSplash", "true");
    };

    // Prevent background scrolling while splash is visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center bg-primary overflow-hidden"
                >
                    {/* Logo at the top center */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="absolute top-12 left-1/2 -translate-x-1/2 w-full flex justify-center px-4"
                    >
                        <img
                            src="/myvmedlogo.png"
                            alt="Virtual Medical Solutions"
                            className="h-16 md:h-24 brightness-0 invert opacity-90 object-contain"
                        />
                    </motion.div>

                    {/* Centered Headline & Subtext */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 w-full">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-center tracking-tight leading-tight"
                        >
                            Save <span style={{ color: "#007BFF" }}>up to 70%</span> on Labor
                            Costs
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-lg md:text-2xl text-gray-300 text-center max-w-3xl leading-relaxed font-light"
                        >
                            HIPAA-compliant Virtual Assistants for Medical, Dental, Veterinary & Optometry Practices
                        </motion.p>
                    </div>

                    {/* Small Skip Button in the corner */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        onClick={handleSkip}
                        className="absolute bottom-8 right-8 text-sm md:text-base font-semibold transition-all hover:opacity-80"
                        style={{ color: "#007BFF" }}
                    >
                        Skip &rarr;
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
