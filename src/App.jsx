import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import QA from './components/QA';

function App() {
    return (
        <div className="app">
            <CookieConsent />
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <UseCases />
                <Pricing />
                <QA />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}

export default App;
