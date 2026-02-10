import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, ChevronLeft, User, Stethoscope, Globe, Laptop, Building2, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

// EmailJS Configuration
const SERVICE_ID = "service_z5sw1gl";
const TEMPLATE_ID = "template_w5sxuo3";
const PUBLIC_KEY = "KQiNVVht7_rS5E4l-";

// Step Types
type StepData = {
    practiceSize: string;
    name: string;
    phone: string;
    email: string;
    companyName: string;
    specialtyCategory: string;
    website: string;
    hvaType: string;
    specificSpecialty: string;
    location: string;
    software: string;
    source: string;
};

const INITIAL_DATA: StepData = {
    practiceSize: "",
    name: "",
    phone: "",
    email: "",
    companyName: "",
    specialtyCategory: "",
    website: "",
    hvaType: "",
    specificSpecialty: "",
    location: "",
    software: "",
    source: "",
};

const Consultation = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<StepData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    // Helper to update fields
    const updateField = (field: keyof StepData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Navigation
    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => Math.max(1, prev - 1));

    const totalSteps = 10;
    const progress = (currentStep / totalSteps) * 100;

    // Handle Form Submission
    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                { ...formData },
                PUBLIC_KEY
            );

            setIsSuccess(true);
            toast.success("Inquiry sent successfully!");
        } catch (error) {
            console.error("Email error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Auto-redirect effect
    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                navigate("/");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess, navigate]);

    // Render Step Content
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 01</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Practice Size</h2>
                            <p className="text-gray-500 mt-2 text-lg">How many employees are currently at your practice?</p>
                        </div>
                        <div className="grid gap-4">
                            {["< 10 Employees", "10-50 Employees", "51-200 Employees", "201+ Employees"].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => { updateField("practiceSize", opt); nextStep(); }}
                                    className="relative p-6 text-left bg-white border-2 border-gray-100 rounded-2xl hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-lg font-semibold text-gray-700 group-hover:text-primary transition-colors">{opt}</span>
                                    <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 02</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Your Details</h2>
                            <p className="text-gray-500 mt-2 text-lg">What should we call you?</p>
                        </div>
                        <div className="relative">
                            <Input
                                value={formData.name}
                                onChange={(e) => updateField("name", e.target.value)}
                                placeholder="Dr. John Doe"
                                className="h-20 text-2xl px-8 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all placeholder:text-gray-300"
                                autoFocus
                            />
                        </div>
                        <Button onClick={nextStep} disabled={!formData.name} className="w-full h-16 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                            Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 03</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Contact Info</h2>
                            <p className="text-gray-500 mt-2 text-lg">How can we reach you?</p>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Company / Practice Name</label>
                                <Input
                                    value={formData.companyName}
                                    onChange={(e) => updateField("companyName", e.target.value)}
                                    placeholder="City Medical Group"
                                    className="h-16 text-lg px-6 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                    <Input
                                        value={formData.phone}
                                        onChange={(e) => updateField("phone", e.target.value)}
                                        placeholder="(555) 000-0000"
                                        className="h-16 text-lg px-6 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        placeholder="doctor@clinic.com"
                                        className="h-16 text-lg px-6 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                        <Button onClick={nextStep} disabled={!formData.email || !formData.phone} className="w-full h-16 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                            Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 04</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Specialty</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Medical", icon: Stethoscope },
                                { label: "Dental", icon: User },
                                { label: "Veterinary", icon: User }, // Can replace icons if imported
                                { label: "Other", icon: Globe },
                            ].map((opt) => (
                                <button
                                    key={opt.label}
                                    onClick={() => { updateField("specialtyCategory", opt.label); nextStep(); }}
                                    className="p-8 border-2 border-gray-100 rounded-[2rem] hover:border-secondary hover:bg-secondary/5 transition-all flex flex-col items-center justify-center gap-4 text-center group bg-white shadow-sm"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                        <opt.icon className="w-8 h-8" />
                                    </div>
                                    <span className="font-bold text-lg text-gray-700 group-hover:text-primary">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 05</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Website</h2>
                        </div>
                        <Input
                            value={formData.website}
                            onChange={(e) => updateField("website", e.target.value)}
                            placeholder="www.yourpractice.com"
                            className="h-20 text-2xl px-8 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all placeholder:text-gray-300"
                        />
                        <div className="flex gap-4">
                            <Button variant="ghost" onClick={nextStep} className="w-1/3 h-16 rounded-full text-lg font-medium text-gray-500 hover:text-gray-900">Skip</Button>
                            <Button onClick={nextStep} className="w-2/3 h-16 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">Next Step</Button>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 06</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Role Type</h2>
                            <p className="text-gray-500 mt-2 text-lg">What position are you looking to fill?</p>
                        </div>
                        <div className="grid gap-4">
                            {["Virtual Scribe", "Virtual Receptionist", "Admin Assistant", "All of the above"].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => { updateField("hvaType", opt); nextStep(); }}
                                    className="relative p-6 text-left bg-white border-2 border-gray-100 rounded-2xl hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-lg font-semibold text-gray-700 group-hover:text-primary transition-colors">{opt}</span>
                                    <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 7:
                const label = formData.specialtyCategory === "Dental" ? "Dental Specialty" : "Specific Specialty";
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 07</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">{label}</h2>
                            <p className="text-gray-500 mt-2 text-lg">e.g. Pediatrics, Orthodontics, Family Medicine</p>
                        </div>
                        <Input
                            value={formData.specificSpecialty}
                            onChange={(e) => updateField("specificSpecialty", e.target.value)}
                            placeholder="Type specialty..."
                            className="h-20 text-2xl px-8 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all placeholder:text-gray-300"
                            autoFocus
                        />
                        <Button onClick={nextStep} className="w-full h-16 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                            Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                );
            case 8:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 08</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Location</h2>
                        </div>
                        <div className="grid gap-4">
                            {["United States", "Canada", "Australia", "United Kingdom", "Other"].map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => { updateField("location", opt); nextStep(); }}
                                    className="p-5 text-left border-2 border-gray-100 rounded-2xl hover:border-secondary hover:bg-white transition-all font-semibold text-lg hover:shadow-md text-gray-700 hover:text-primary"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 9:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Step 09</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Software / EMR</h2>
                            <p className="text-gray-500 mt-2 text-lg">What tools does your team use?</p>
                        </div>
                        <Input
                            value={formData.software}
                            onChange={(e) => updateField("software", e.target.value)}
                            placeholder="e.g. Epic, Athena, Dentrix..."
                            className="h-20 text-2xl px-8 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all placeholder:text-gray-300"
                            autoFocus
                        />
                        <Button onClick={nextStep} className="w-full h-16 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                            Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                );
            case 10:
                return (
                    <div className="space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-2 block">Final Step</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">How did you find us?</h2>
                        </div>
                        <Input
                            value={formData.source}
                            onChange={(e) => updateField("source", e.target.value)}
                            placeholder="Google, Colleague, Podcast..."
                            className="h-20 text-2xl px-8 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all placeholder:text-gray-300"
                            autoFocus
                        />
                        <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full h-16 rounded-full text-lg font-bold bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/20 hover:scale-[1.02] transition-all">
                            {isSubmitting ? "Sending..." : "Submit Inquiry"}
                            {!isSubmitting && <Check className="ml-2 w-5 h-5" />}
                        </Button>
                    </div>
                );
            default:
                return null;
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#001F3F] flex items-center justify-center p-4 relative overflow-hidden">
                {/* Vibrant Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-900 to-black opacity-90" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[150px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -50, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
                />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="relative z-10 text-center max-w-2xl px-6"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-32 h-32 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(74,222,128,0.5)] border-4 border-white/20"
                    >
                        <Check className="w-16 h-16 text-white stroke-[3]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-xl"
                    >
                        Success!
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/80 text-xl md:text-2xl mb-12 leading-relaxed font-light"
                    >
                        Your inquiry has been secured. <br />
                        <span className="text-secondary font-semibold">Redirecting you to the future of healthcare...</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-t-transparent border-white/50 animate-spin" />
                        <span className="text-sm text-white/50 uppercase tracking-widest mt-2">Returning Home</span>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden font-sans">
            {/* Finovo Ambient Glow Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            <div className="w-full max-w-2xl relative z-10">
                {/* Header / Nav */}
                <div className="flex items-center justify-between mb-8 px-2">
                    {currentStep > 1 ? (
                        <button
                            onClick={prevStep}
                            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-medium px-4 py-2 rounded-full hover:bg-white/50"
                        >
                            <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                    ) : (
                        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-medium px-4 py-2 rounded-full hover:bg-white/50">
                            <ChevronLeft className="w-5 h-5" /> Home
                        </Link>
                    )}
                    <div className="text-sm font-bold text-gray-400 bg-white/50 px-4 py-2 rounded-full">
                        {Math.round(progress)}% Complete
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/40 p-8 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col justify-center">

                    {/* Top Progress Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100">
                        <motion.div
                            className="h-full bg-secondary shadow-[0_0_10px_rgba(0,119,255,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full"
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer Trust */}
                <div className="text-center mt-8 opacity-60 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-sm text-gray-500 font-medium">100% Secure & Confidential</p>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
