
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-barber-dark text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-barber-dark to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1974')] bg-cover bg-center opacity-50"></div>
      
      <div className="container-custom min-h-[80vh] flex flex-col justify-center relative z-20 py-20">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-scale-up">
            Premium Grooming Experience at FAMA
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Experience exceptional haircuts, beard trims, and beauty services from our skilled professionals in Denton, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button className="btn-secondary hover-glow">View Services</Button>
            <Button className="btn-primary hover-shadow">Book Appointment</Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-barber-dark to-transparent h-16"></div>
    </section>
  );
};

export default Hero;
