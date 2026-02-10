import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Process from "@/components/Process";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24">
                <section className="py-20 bg-primary text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Specialized Virtual Staffing</h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Expert virtual assistants for Medical, Dental, Veterinary, and Optometry practices.
                        </p>
                    </div>
                </section>
                <Services />
                <Process />
            </main>
            <Footer />
        </div>
    );
};

export default ServicesPage;
