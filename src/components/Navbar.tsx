import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const links = [
  { href: "#Home", label: "Accueil" },
  { href: "#About", label: "À propos" },
  { href: "#Experience", label: "Mes expériences" },
  { href: "#Projects", label: "Mes projets" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 flex justify-between items-center px-4 py-4 transition-all duration-300 ${
        scrolled ? "bg-base-100/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Barre de progression du défilement */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX }}
      />

      <motion.a 
        href="#" 
        className="flex items-center font-bold text-lg sm:text-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Code2 className="mr-2 text-accent" />
        Déborah&nbsp;
        <span className="text-accent">HOUNYO</span>
      </motion.a>

      {/* Menu desktop */}
      <ul className="hidden lg:flex flex-row items-center space-x-2">
        {links.map((link) => (
          <motion.li key={link.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <a href={link.href} className="btn btn-sm btn-ghost hover:text-accent transition-colors">
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Bouton burger mobile */}
      <motion.button
        type="button"
        className="btn btn-ghost btn-square lg:hidden"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
      >
        {open ? <X /> : <Menu />}
      </motion.button>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {open && (
          <motion.ul 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute left-4 right-4 top-full z-50 flex flex-col bg-base-200 border border-neutral/50 rounded-box shadow-2xl p-3 mt-2"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="btn btn-ghost w-full justify-start hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;