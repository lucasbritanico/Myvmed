import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhoWeServe from "@/components/WhoWeServe";
import Trust from "@/components/Trust";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-24">
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Who We Are</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We connect healthcare providers with world-class virtual medical assistants,
                            streamlining operations and improving patient care.
                        </p>
                    </div>
                </section>
                <WhoWeServe />
                <Trust />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
