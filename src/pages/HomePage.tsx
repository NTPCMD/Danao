import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { ServicesGrid } from '../components/ServicesGrid';
import { AboutStrip } from '../components/AboutStrip';
import { WhyChoose } from '../components/WhyChoose';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden pt-20">
      <Hero scrollY={scrollY} />
      <ServicesGrid />
      <AboutStrip />
      <WhyChoose />
      <ContactCTA />
      <Footer />
    </div>
  );
}
