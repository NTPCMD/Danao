import { useEffect, useState } from 'react';
import { HeroCustom } from '../components/HeroCustom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';
import { Compass, Headphones, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    title: 'Coordination Hub',
    description:
      'A single point of contact that coordinates across all Danao service lines—from websites to logistics, property to events.',
    icon: Compass,
  },
  {
    title: 'Service Integration',
    description:
      'Seamlessly connects you with the right specialists from our network to handle your specific needs.',
    icon: Sparkles,
  },
  {
    title: 'Request Handling',
    description:
      'Efficient management of requests across multiple service categories, ensuring quality and timely delivery.',
    icon: Headphones,
  },
];

export function ConciergePage() {
  const [scrollY, setScrollY] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <HeroCustom
        scrollY={scrollY}
        title="Danao Concierge Services"
        subtitle="Our concierge division is the gateway to every Danao capability—coordinating specialists, schedules, and service quality on your behalf."
        button1Text="Request Concierge"
        button2Text="View All Services"
        button1Href="/contact"
        button2Href="/services"
      />

      <section ref={ref} className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Concierge is one division of the Danao Group
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Think of our concierge team as your trusted control tower. They listen, plan, and then activate the right Danao
              service line—whether that’s a new luxury website, a logistics run, a property refresh, or a fully managed event.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every request benefits from the Danao Gold Standard: black-and-gold presentation, vetted partners, proactive
              updates, and a single relationship manager who keeps everything moving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-[#D4AF37] text-black font-semibold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              >
                Explore All Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
              >
                Speak with Concierge
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-[#0A0A0A] border-2 border-[#D4AF37] p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)]"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="w-10 h-10 text-[#D4AF37]" />
                    <div className="h-px flex-1 bg-[#D4AF37]/40" />
                  </div>
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
