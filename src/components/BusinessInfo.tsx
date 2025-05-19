
import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

const BusinessInfo = () => {
  return (
    <section className="bg-barber-light py-12" id="about">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-title">FAMA Barber Shop and Beauty Salon</h2>
            <p className="mb-6 text-lg text-barber-muted">
              At FAMA Barber Shop and Beauty Salon, we provide premium grooming and beauty services in a comfortable, professional environment. Our skilled barbers and beauticians deliver exceptional results that will leave you looking and feeling your best.
            </p>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-barber-secondary mr-4">
                <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
                <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
                <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
                <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5" />
                <Star className="fill-barber-secondary stroke-barber-secondary w-5 h-5 fill-opacity-60" />
              </div>
              <p className="text-barber-dark font-medium">4.6 (116+ reviews)</p>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-barber-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Open ⋅ Closes 7 pm</p>
                  <p className="text-barber-muted text-sm">Mon-Sat: 9am - 7pm | Sun: 10am - 5pm</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-barber-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">500 N Bell Ave #109, Denton, TX 76209</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-barber-primary underline text-sm hover:text-barber-primary/80 inline-block mt-1"
                  >
                    Get Directions
                  </a>
                </div>
              </li>
              
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-barber-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">+1 940-612-9127</p>
                  <a 
                    href="tel:+19406129127" 
                    className="text-barber-primary underline text-sm hover:text-barber-primary/80 inline-block mt-1"
                  >
                    Call Now
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative h-full min-h-[300px]">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <iframe 
                title="FAMA Barber Shop Location" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.3034232711397!2d-97.13107632345683!3d33.21620387251999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4bf38f0c7c9f%3A0xc850f94d51551192!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1684805735079!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
