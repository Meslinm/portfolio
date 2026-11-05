import Title from "./Title";
import img from "../assets/debo.jpg";
import { Monitor, Smartphone, Server } from "lucide-react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    id: 1,
    title: "Développement web",
    description:
      "Je crée des interfaces modernes et responsives avec React et Tailwind CSS.",
    icon: <Monitor className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développement mobile",
    description:
      "Je développe des applications mobiles multiplateformes avec Flutter.",
    icon: <Smartphone className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Back-end",
    description:
      "Je conçois la logique serveur et les API de mes applications avec Laravel.",
    icon: <Server className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-6 md:p-10 mb-10 md:mb-32 rounded-3xl mx-4 md:mx-10 xl:mx-[10%]" id="About">
      <Title title="À propos" />
      <div className="lg:min-h-[75vh] flex flex-col lg:flex-row justify-center items-center gap-10 mt-8">
        
        {/* Image de profil */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block shrink-0"
        >
          <img
            src={img}
            alt="Portrait de Déborah Hounyo"
            className="w-80 h-112 object-cover object-top rounded-3xl shadow-xl border-2 border-accent/20"
          />
        </motion.div>

        {/* Cartes de compétences à propos */}
        <div className="w-full max-w-md lg:w-[420px] space-y-4">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="flex flex-col md:flex-row items-center w-full bg-base-100 p-5 rounded-2xl shadow-xl border border-neutral/30 transition-all duration-300"
            >
              <div className="mb-3 md:mb-0 shrink-0 p-3 bg-base-200 rounded-xl">{section.icon}</div>
              <div className="md:ml-5 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1 text-accent">{section.title}</h2>
                <p className="text-sm text-base-content/80">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;