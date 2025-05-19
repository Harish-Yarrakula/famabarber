
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section bg-white" id="contact">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-barber-muted max-w-2xl mx-auto">
            Book an appointment or send us a message. We'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="section-subtitle">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Smith" 
                    className="w-full" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input 
                    id="phone" 
                    placeholder="(123) 456-7890" 
                    className="w-full" 
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full" 
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">Service Interested</label>
                <select 
                  id="service" 
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="men-haircut">Men's Haircut</option>
                  <option value="beard-trim">Beard Trim</option>
                  <option value="hot-towel-shave">Hot Towel Shave</option>
                  <option value="combo">Haircut & Beard Combo</option>
                  <option value="women-haircut">Women's Haircut</option>
                  <option value="color">Color & Highlights</option>
                  <option value="child-haircut">Children's Haircut</option>
                  <option value="styling">Styling & Blowout</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your preferred date/time or any specific requests..." 
                  className="w-full min-h-[120px]"
                />
              </div>
              <Button type="submit" className="btn-primary w-full">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h3 className="section-subtitle">Our Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-barber-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-barber-muted">500 N Bell Ave #109, Denton, TX 76209, United States</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-barber-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-barber-muted">+1 940-612-9127</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-barber-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <div className="text-barber-muted">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-barber-primary text-white p-2 rounded-full hover:bg-barber-primary/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="bg-barber-primary text-white p-2 rounded-full hover:bg-barber-primary/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="bg-barber-primary text-white p-2 rounded-full hover:bg-barber-primary/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"/></svg>
                  </a>
                  <a href="#" className="bg-barber-primary text-white p-2 rounded-full hover:bg-barber-primary/90 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
