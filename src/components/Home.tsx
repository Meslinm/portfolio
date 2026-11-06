import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import img from "../assets/debo.jpg";

const roles = ["Développeuse Web", "Développeuse Mobile", "Passionnée de Code"];
const nameLetters = "Déborah HOUNYO".split("");

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="Home"
      className="flex flex-col-reverse lg:flex-row justify-center items-center my-10 lg:my-28 min-h-[75vh]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold w-fit mx-auto lg:mx-0 shadow-lg shadow-accent/5"
        >
           En fin de Licence SIL & Prête pour de nouveaux défis
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center lg:text-left tracking-tight">
          Bonjour, <br /> je suis{" "}
          <span className="inline-block text-accent">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Texte dynamique des rôles avec effet de transition */}
        <div className="h-12 my-3 flex items-center justify-center lg:justify-start">
          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.4 }}
            className="px-4 py-2 rounded-xl bg-base-300 border border-accent/30 text-accent text-lg lg:text-xl font-bold shadow-inner"
          >
             {roles[roleIndex]}
          </motion.div>
        </div>

        <p className="my-2 text-md text-center lg:text-left max-w-md mx-auto lg:mx-0 text-base-content/80 leading-relaxed">
          Développeuse web et mobile. Je conçois des applications complètes :
          interfaces modernes avec React, applications mobiles avec Flutter et back-end robuste avec Laravel.
        </p>

        <motion.div 
          className="flex justify-center lg:justify-start mt-6"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#Contact"
            className="btn btn-accent lg:w-fit shadow-xl shadow-accent/30 px-8 font-bold"
            
          >
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>
        </motion.div>
      </motion.div>

      {/* Image avec effet de lueur pulsée */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="shrink-0 lg:ml-16 xl:ml-60 relative group my-6 lg:my-0"
      >
        <div className="absolute -inset-3 bg-gradient-to-r from-accent via-secondary to-accent rounded-t-full rounded-b-2xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse"></div>
        <img
          src={img}
          alt="Portrait de Déborah Hounyo"
          className="relative w-64 h-96 sm:w-80 sm:h-112 object-cover object-top rounded-t-full rounded-b-2xl border-4 sm:border-8 border-accent shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </motion.div>
    </div>
  );
};

export default Home;