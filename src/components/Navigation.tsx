import { Link, useLocation } from 'react-router-dom';
import { LayoutGroup, motion } from 'framer-motion';

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#D4AF37]/20"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white hover:text-[#D4AF37] transition-colors duration-300">
          <img 
            src="/D copy 3 2.jpeg" 
            alt="Danao Group Logo" 
            className="h-11 w-11 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          />
        </Link>

        <LayoutGroup>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative text-sm tracking-wide uppercase text-white transition-colors duration-300"
                >
                  <span className={isActive ? 'text-[#D4AF37]' : 'group-hover:text-[#D4AF37] transition-colors duration-300'}>
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transform bg-[#D4AF37] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="activeGlow"
                      className="absolute inset-0 -z-10 rounded-full bg-[#D4AF37]/10 blur-md"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </motion.nav>
  );
}
