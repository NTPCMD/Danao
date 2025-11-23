import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, Users, TrendingUp } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import { Footer } from '../components/Footer';

export function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the Danao Gold Standard in every service we deliver.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through reliability and transparency.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Working with vetted specialists to ensure premium service quality.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Helping businesses scale with flexible, multi-industry solutions.',
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            About Danao Group
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-[#D4AF37] mx-auto w-32 mb-6"
          />
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for premium multi-industry services across Perth and Western Australia.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <section ref={ref} className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Who We Are
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
              Danao Group is a multi-service organisation that coordinates and subcontracts through a premium network 
              of specialist providers across Western Australia.
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From digital and creative to logistics, property, hospitality, events, and retail—we bring together 
              vetted professionals who deliver consistent quality under one trusted brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-[#0A0A0A] border border-gray-800 p-8 text-center hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(212,175,55,0.3)]"
                >
                  <div className="mb-4 flex justify-center">
                    <Icon className="w-12 h-12 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Danao Gold Standard
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Approach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We don't just provide services—we coordinate excellence. Every business in our network is carefully 
                vetted to meet our high standards of professionalism, reliability, and quality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team acts as your single point of contact, managing coordination across multiple service lines 
                to ensure seamless delivery and consistent communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why Choose Us
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're a small business or large enterprise, Danao Group offers the flexibility to scale 
                services as your needs grow—without the complexity of managing multiple vendors.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From one-off projects to ongoing partnerships, we provide professional care and precision in every 
                interaction, embodying the Danao Gold Standard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
