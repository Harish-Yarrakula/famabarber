
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BusinessInfo from '@/components/BusinessInfo';
import ServicesList from '@/components/ServicesList';
import ReviewSection from '@/components/ReviewSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200); // Slightly longer than LoadingScreen timeout
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <LoadingScreen />
      <div className={`min-h-screen bg-white flex flex-col transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <Hero />
        <BusinessInfo />
        <ServicesList />
        <Gallery />
        <div className="bg-barber-dark py-16 text-center text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif animate-fade-in">
              Ready for a Fresh New Look?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Book your appointment today and experience the FAMA difference.
            </p>
            <a 
              href="tel:+19406129127" 
              className="btn-secondary inline-block hover-glow"
            >
              Call (940) 612-9127
            </a>
          </div>
        </div>
        <ReviewSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
