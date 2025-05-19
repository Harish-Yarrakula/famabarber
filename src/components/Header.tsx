
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-barber-primary">FAMA</span> <span className="text-barber-dark">Barber Shop</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-barber-dark hover:text-barber-primary transition-colors">About</a>
          <a href="#services" className="text-barber-dark hover:text-barber-primary transition-colors">Services</a>
          <a href="#gallery" className="text-barber-dark hover:text-barber-primary transition-colors">Gallery</a>
          <a href="#testimonials" className="text-barber-dark hover:text-barber-primary transition-colors">Reviews</a>
          <a href="#contact" className="text-barber-dark hover:text-barber-primary transition-colors">Contact</a>
          <Button className="btn-primary">Book Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="text-barber-dark p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-6 bg-white border-t mt-4">
          <div className="container-custom flex flex-col space-y-4">
            <a href="#about" className="text-barber-dark hover:text-barber-primary px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="text-barber-dark hover:text-barber-primary px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#gallery" className="text-barber-dark hover:text-barber-primary px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#testimonials" className="text-barber-dark hover:text-barber-primary px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="text-barber-dark hover:text-barber-primary px-4 py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="btn-primary w-full">Book Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
