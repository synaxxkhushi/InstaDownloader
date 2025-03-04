import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowToUse from './components/HowToUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'how-to-use':
        return <HowToUse />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'contact-us':
        return <ContactUs />;
      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {renderSection()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;