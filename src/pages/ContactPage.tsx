import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24">
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Ready to transform your practice? Get in touch with us today.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                            <h3 className="text-2xl font-semibold text-primary mb-4">Get Started</h3>
                            <p className="text-gray-600 mb-6">
                                Interested in hiring a virtual assistant? Fill out our inquiry form or schedule a call.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                            <h3 className="text-2xl font-semibold text-primary mb-4">Support</h3>
                            <p className="text-gray-600 mb-6">
                                Already a client or assistant? Reach out to our support team for assistance.
                            </p>
                        </div>
                    </div>
                </div>

                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
