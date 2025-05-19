
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-barber-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-barber-secondary">FAMA</span> Barber Shop
            </h3>
            <p className="text-gray-300 mb-4">
              Premium grooming and beauty services in Denton, TX. Our skilled professionals 
              are dedicated to making you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-barber-secondary">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-barber-secondary">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-barber-secondary">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-barber-secondary">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-barber-secondary">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-barber-secondary">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-barber-secondary">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-barber-secondary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">500 N Bell Ave #109</p>
              <p className="mb-2">Denton, TX 76209, United States</p>
              <p className="mb-2">
                <a href="tel:+19406129127" className="hover:text-barber-secondary">+1 940-612-9127</a>
              </p>
              <p className="mb-2">
                <a href="mailto:info@famabarber.com" className="hover:text-barber-secondary">info@famabarber.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} FAMA Barber Shop and Beauty Salon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
