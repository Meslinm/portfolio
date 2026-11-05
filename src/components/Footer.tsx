import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Remplis seulement les liens que tu as. Un lien vide n'apparaît pas.
const socials = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/Meslinm", // ex : "https://github.com/ton-pseudo"
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "", // ex : "https://www.linkedin.com/in/ton-profil"
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "E-mail",
    href: "mailto:hounyodeborah@gmail.com", // ex : "mailto:ton.email@exemple.com"
    icon: <FaEnvelope className="w-5 h-5" />,
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="footer footer-horizontal footer-center p-10 bg-base-200 mt-20 border-t border-neutral/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />

      <aside className="space-y-3 relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="p-3 bg-base-300 rounded-2xl border border-neutral/50 w-fit mx-auto shadow-lg"
        >
          <Code2 className="w-8 h-8 text-accent" />
        </motion.div>

        <p className="font-extrabold text-xl tracking-wider">
          Déborah <span className="text-accent">Hounyo</span>
        </p>

        <p className="text-xs sm:text-sm text-base-content/70">
          Copyright © {new Date().getFullYear()} — Déborah Hounyo. Tous droits
          réservés.
        </p>
      </aside>

      <nav className="relative z-10 mt-2">
        <div className="grid grid-flow-col gap-5">
          {socials
            .filter((social) => social.href)
            .map((social) => (
              <motion.a
                key={social.id}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ scale: 1.25, y: -4, color: "#a78bfa" }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-base-300 rounded-full border border-neutral/50 text-base-content hover:border-accent shadow-md transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
        </div>
      </nav>
    </motion.footer>
  );
};

export default Footer;