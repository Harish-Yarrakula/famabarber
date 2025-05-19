
import React, { useRef } from 'react';
import { Scissors } from 'lucide-react';
import useOnScreen from '@/hooks/useOnScreen';

interface Service {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Men's Haircut",
    description: "Precision cut with styling, includes hot towel and neck shave.",
    price: "$25+",
    icon: <Scissors className="h-6 w-6" />
  },
  {
    title: "Beard Trim",
    description: "Shaping and styling for a clean, professional look.",
    price: "$15+",
    icon: <Scissors className="h-6 w-6 rotate-45" />
  },
  {
    title: "Hot Towel Shave",
    description: "Classic straight razor shave with hot towel treatment.",
    price: "$35+",
    icon: <Scissors className="h-6 w-6 rotate-90" />
  },
  {
    title: "Haircut & Beard",
    description: "Complete service combining haircut and beard trim.",
    price: "$35+",
    icon: <Scissors className="h-6 w-6 rotate-180" />
  },
  {
    title: "Kid's Haircut",
    description: "Gentle styling for children under 12 years.",
    price: "$18+",
    icon: <Scissors className="h-6 w-6 -rotate-45" />
  },
  {
    title: "Hair Color",
    description: "Professional coloring and highlights.",
    price: "$50+",
    icon: <Scissors className="h-6 w-6 -rotate-90" />
  }
];

const ServicesList = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef, 0.1);
  
  return (
    <section className="py-16 bg-barber-light" id="services" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            Our Services
          </h2>
          <p className={`text-lg text-barber-muted max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            We provide a range of professional barbering and beauty services to help you look and feel your best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const isCardVisible = useOnScreen(cardRef, 0.1);
            
            return (
              <div 
                key={index} 
                ref={cardRef}
                className={`bg-white p-6 rounded-lg shadow-sm border-l-4 border-barber-primary hover:shadow-md transition-all ${
                  isCardVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-barber-primary/10 flex items-center justify-center mr-4 text-barber-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif">{service.title}</h3>
                </div>
                <p className="text-barber-muted mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-barber-primary text-lg">{service.price}</span>
                  <button className="text-barber-secondary hover:text-barber-primary transition-colors font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;