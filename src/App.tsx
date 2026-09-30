import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Intercom from './components/Intercom';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import References from './components/References';
import Partners from './components/Partners';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingButtons from './components/FloatingButtons';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
    return (
        <ThemeProvider>
            {/* pb reserves room for the fixed mobile action bar (FloatingButtons). */}
            <div className="min-h-screen bg-canvas pb-[73px] font-sans text-ink lg:pb-0">
                <Navbar />
                <main>
                    <Hero />
                    <Services />
                    <Intercom />
                    <WhyUs />
                    <Partners />
                    <References />
                    <Process />
                    <Reviews />
                    <ContactForm />
                </main>
                <Footer />
                <BackToTop />
                <FloatingButtons />
            </div>
        </ThemeProvider>
    );
}
