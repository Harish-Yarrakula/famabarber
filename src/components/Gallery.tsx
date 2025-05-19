
import React, { useState, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { GalleryHorizontal } from "lucide-react";
import useOnScreen from '@/hooks/useOnScreen';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070",
    alt: "Barber shop interior",
    title: "Our Workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070",
    alt: "Haircut session",
    title: "Expert Styling"
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1844",
    alt: "Beard trimming",
    title: "Precision Grooming"
  },
  {
    src: "https://images.unsplash.com/photo-1621605810052-80936645ddde?q=80&w=2070",
    alt: "Hair washing",
    title: "Salon Services"
  }
];

const Gallery = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<{ [key: number]: boolean }>({});
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(sectionRef, 0.1);

  const handleImageLoaded = (index: number) => {
    setIsImageLoaded(prev => ({...prev, [index]: true}));
  };

  return (
    <section className="py-16 bg-barber-light" ref={sectionRef}>
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <GalleryHorizontal className={`h-6 w-6 text-barber-primary ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} />
          <h2 className={`section-title ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Our Gallery</h2>
        </div>
        <p className={`text-lg text-gray-700 mb-8 max-w-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '100ms' }}>
          Take a look at our barbershop ambiance and the quality of our work. We take pride in creating a comfortable environment and delivering exceptional results.
        </p>
        
        <Carousel className={`w-full max-w-5xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <CarouselContent>
            {galleryImages.map((image, index) => {
              const cardRef = useRef<HTMLDivElement>(null);
              const isCardVisible = useOnScreen(cardRef, 0.1);
              
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className={`border-none overflow-hidden hover-scale ${
                    isCardVisible ? 'animate-scale-up' : 'opacity-0 scale-95'
                  }`} style={{ transitionDelay: `${index * 100}ms` }} ref={cardRef}>
                    <CardContent className="p-1">
                      <div className="relative h-80 overflow-hidden rounded-md bg-muted">
                        {!isImageLoaded[index] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className={`object-cover w-full h-full transition-opacity duration-300 ${isImageLoaded[index] ? 'opacity-100' : 'opacity-0'}`}
                          onLoad={() => handleImageLoaded(index)}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="text-white font-serif text-xl">{image.title}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
