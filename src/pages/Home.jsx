// import { HeroSection } from '../components/sections/HeroSection';
// import { AboutSection } from '../components/sections/AboutSection';
// import { VehiclesSection } from '../components/sections/VehiclesSection';
// import { ServicesSection } from '../components/sections/ServicesSection';
// import { WhyChooseUs } from '../components/sections/WhyChooseUs';
// import { TestimonialsSection } from '../components/sections/TestimonialsSection';
// import { FaqSection } from '../components/sections/FaqSection';
// import { ContactSection } from '../components/sections/ContactSection';

import CallButton from "../components/CallBtn";
import AboutSection from "../components/home/AboutSec";
import ContactUs from "../components/home/ContactSec";
import FAQSection from "../components/home/Faq";
import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSec";
import TestimonialSection from "../components/home/TestimonialSec";
import VehicleSection from "../components/home/Vehicles";
import WhyChooseUs from "../components/home/Why";
import WhatsAppFloatingButton from "../components/WhatsAppFloatButton";

export const Home = () => {
  return (
    <main className="flex flex-col">
      {/* Hero Section with Search */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Vehicles Showcase (Cars & Bikes) */}
      <section id="vehicles">
        <VehicleSection />
      </section>

      {/* About Us */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* Our Services */}
      <section id="services">
        <ServiceSection />
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialSection />
      </section>

      {/* Contact Us */}
      <section id="contact">
        <ContactUs />
      </section>
      <WhatsAppFloatingButton />
      <CallButton  phoneNumber="+919078713435" />
    </main>
  );
};