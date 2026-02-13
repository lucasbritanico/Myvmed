import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 pointer-events-auto"
          : "pt-6 px-4 md:px-8 h-auto pointer-events-none bg-transparent"
        }`}
    >
      {/* Max Width Container to hold aligned elements */}
      <div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto px-4 md:px-8">

        {/* Logo - Independent & Large */}
        <Link to="/" className="relative group shrink-0">
          {/* Logo Glow */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src="/myvmedlogo.png"
            alt="Myvmed"
            className={`relative w-auto object-contain transition-all duration-500 group-hover:scale-105 drop-shadow-xl ${isScrolled
                ? "h-14 md:h-16"
                : "h-32 md:h-48 brightness-0 invert opacity-90"
              }`}
          />
        </Link>

        {/* Navigation Pill - Centered & Floating */}
        <div
          className={`hidden md:flex items-center gap-8 rounded-full transition-all duration-500 
             ${isScrolled
              ? "bg-transparent py-2"
              : "bg-white/80 backdrop-blur-md border border-white/10 py-4 px-10"
            }`}
        >
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-bold transition-all hover:text-secondary hover:-translate-y-0.5 ${isLinkActive(link.href) ? "text-secondary" : "text-gray-600"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA / Mobile Menu - Right Side */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              size="default"
              className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 shadow-xl shadow-primary/25 border border-white/10 transition-all hover:scale-105 hover:-translate-y-1 font-semibold text-base"
              asChild
            >
              <Link to="/consultation">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className={`md:hidden rounded-full p-2 transition-all ${isScrolled ? "bg-gray-100" : "bg-white/90 backdrop-blur-md shadow-lg border border-white/20"}`}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary hover:bg-gray-200 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-20 left-4 right-4 md:hidden bg-white rounded-3xl border border-gray-100 shadow-2xl p-4 overflow-hidden z-50 origin-top"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-6 py-4 text-lg font-bold rounded-2xl transition-colors flex justify-between items-center ${isLinkActive(link.href) ? "bg-secondary/10 text-secondary" : "text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                    {isLinkActive(link.href) && <span className="w-2 h-2 rounded-full bg-secondary" />}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button className="w-full rounded-2xl bg-primary h-14 text-lg font-bold shadow-lg shadow-primary/20" asChild>
                    <Link to="/consultation">Let's Talk</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
