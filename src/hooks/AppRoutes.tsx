import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePageTracking } from "./usePageTracking";
import Index from "../pages/Index";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";
import Consultation from "../pages/Consultation";
import NotFound from "../pages/NotFound";
import FloatingBanner from "@/components/FloatingBanner";

const AppRoutes = () => {
    usePageTracking();

    return (
        <>
            <FloatingBanner />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/consultation" element={<Consultation />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
