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

interface HeroCustomProps {
  scrollY: number;
  title: string;
  subtitle: string;
  button1Text?: string;
  button2Text?: string;
  button1Href?: string;
  button2Href?: string;
}

export function HeroCustom({ scrollY, title, subtitle, button1Text, button2Text, button1Href, button2Href }: HeroCustomProps) {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#C9A961] opacity-30 blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-white relative inline-block"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="text-5xl md:text-7xl">{title}</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-[#C9A961] mt-4 origin-left"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {(button1Text || button2Text) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {button1Text && (
              button1Href ? (
                <Link
                  to={button1Href}
                  className="group relative px-8 py-4 bg-[#C9A961] text-black overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.6)]"
                >
                  <span className="relative z-10">{button1Text}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
              ) : (
                <button className="group relative px-8 py-4 bg-[#C9A961] text-black overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,97,0.6)]">
                  <span className="relative z-10">{button1Text}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              )
            )}
            {button2Text && (
              button2Href ? (
                <Link
                  to={button2Href}
                  className="group relative px-8 py-4 bg-transparent border-2 border-[#C9A961] text-[#C9A961] overflow-hidden transition-all duration-300 hover:bg-[#C9A961] hover:text-black hover:shadow-[0_0_30px_rgba(201,169,97,0.6)]"
                >
                  <span className="relative z-10">{button2Text}</span>
                </Link>
              ) : (
                <button className="group relative px-8 py-4 bg-transparent border-2 border-[#C9A961] text-[#C9A961] overflow-hidden transition-all duration-300 hover:bg-[#C9A961] hover:text-black hover:shadow-[0_0_30px_rgba(201,169,97,0.6)]">
                  <span className="relative z-10">{button2Text}</span>
                </button>
              )
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
