
import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import useOnScreen from '@/hooks/useOnScreen';

const reviews = [
  {
    name: "Michael Thompson",
    date: "March 15, 2023",
    rating: 5,
    text: "Great experience at Fama Barber Shop! My barber took his time and gave me exactly the style I was looking for. Clean shop and friendly staff."
  },
  {
    name: "Sarah Johnson",
    date: "February 3, 2023",
    rating: 4,
    text: "Got a great haircut at a reasonable price. The stylists are skilled and the atmosphere is welcoming. Will definitely return!"
  },
  {
    name: "David Williams",
    date: "April 20, 2023",
    rating: 5,
    text: "Best barber shop in Denton! I've been going here for years and have never been disappointed. Highly recommended for anyone looking for quality service."
  },
  {
    name: "Jennifer Martinez",
    date: "January 12, 2023",
    rating: 4,
    text: "The beauty salon services are excellent. The stylist really listened to what I wanted and delivered great results. Slightly pricier than other places but worth it."
  },
  {
    name: "Robert Garcia",
    date: "May 5, 2023",
    rating: 3,
    text: "Costly compared to other barbershops with better haircuts. Service was okay, but I expected more for the price."
  }
];

const ReviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, 0.1);

  return (
    <section className="section bg-barber-light" id="testimonials" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>What Our Clients Say</h2>
          <div className={`flex justify-center items-center gap-1 mb-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
            <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
            <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
            <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
            <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5 fill-opacity-60" />
            <span className="ml-2 font-medium">4.6 from 116+ reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const isCardVisible = useOnScreen(cardRef, 0.1);
            
            return (
              <div 
                key={index} 
                ref={cardRef}
                className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ${
                  isCardVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-lg">{review.name}</h3>
                  <span className="text-sm text-barber-muted">{review.date}</span>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-barber-secondary stroke-barber-secondary" : "stroke-gray-300"}`}
                    />
                  ))}
                </div>
                
                <p className="text-barber-muted">{review.text}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className={`text-barber-primary hover:text-barber-primary/80 font-medium inline-flex items-center ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            View All Reviews
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;