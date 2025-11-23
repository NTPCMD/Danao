import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

export function Hero({ scrollY }: { scrollY: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#D4AF37] opacity-30 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]/80 mb-4"
        >
          Luxury Multi-Industry Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-white relative inline-block"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-5xl md:text-7xl">Danao Group</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-[#D4AF37] mt-4 origin-left"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
        >
          Premium Multi-Industry Services Across Australia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <Link
            to="/services"
            className="group relative px-10 py-4 bg-[#D4AF37] text-black overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] uppercase tracking-wide font-semibold"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
          <Link
            to="/contact"
            className="group relative px-10 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] overflow-hidden transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] uppercase tracking-wide font-semibold"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
