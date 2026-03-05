import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, X } from "lucide-react";

const FloatingLanguageBubble = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after 1.5 seconds
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        // Hide after 6.5 seconds (1.5s delay + 5s duration)
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 6500);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-amber-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] rounded-2xl p-4 pr-10 max-w-sm"
                >
                    {/* Animated pulsing background layer behind the icon */}
                    <div className="relative shrink-0">
                        <motion.div
                            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-amber-400 rounded-full blur-md"
                        />
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg border border-amber-300/50">
                            <Globe className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-[15px] font-bold text-foreground leading-tight mb-1 flex items-center gap-2">
                            ¡Hablamos Español! <span className="text-lg">👋</span>
                        </p>
                        <p className="text-sm text-muted-foreground leading-snug">
                            Spanish-speaking VMAs are <strong className="text-amber-600 dark:text-amber-500 font-semibold">available now</strong>.
                        </p>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                        aria-label="Close notification"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingLanguageBubble;
