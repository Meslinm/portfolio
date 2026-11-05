import Title from "./Title";
import imgTicketgoWeb from "../assets/projects/ticketgo-web.png";
import imgTicketgoMobile from "../assets/projects/ticketgo-mobile.png";
import imgLavage from "../assets/projects/lavage.png";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "TicketGo (web)",
    description:
      "Application web de billetterie pour événements : les organisateurs gèrent leurs événements et suivent leurs ventes depuis un tableau de bord. Projet de fin de formation chez CITECH SARL.",
    technologies: ["Laravel", "PHP"],
    demoLink: "",
    repoLink: "",
    image: imgTicketgoWeb,
  },
  {
    id: 2,
    title: "TicketGo Scan (mobile)",
    description:
      "Application mobile qui accompagne TicketGo : elle permet de scanner les billets à l'entrée d'un événement.",
    technologies: ["Flutter", "Dart"],
    demoLink: "",
    repoLink: "",
    image: imgTicketgoMobile,
  },
  {
    id: 3,
    title: "Site de service de lavage",
    description:
      "Site web d'un service de lavage de véhicules, réalisé en classe dans le cadre de ma formation.",
    technologies: ["Angular", "TypeScript"],
    demoLink: "",
    repoLink: "",
    image: imgLavage,
  },
];

const Projects = () => {
  return (
    <div className="mt-16 md:mt-24" id="Projects">
      <Title title="Mes Projets" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto sm:px-4 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-base-300 p-5 h-full flex flex-col rounded-2xl shadow-xl border border-neutral/30 group overflow-hidden transition-all duration-300"
          >
            {/* Image avec zoom subtil au survol */}
            <div className="overflow-hidden rounded-xl mb-4 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex-1 flex flex-col">
              <h1 className="text-xl font-bold mb-2 text-accent">{project.title}</h1>
              <p className="text-sm text-base-content/80 flex-1 leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 my-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-accent badge-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>

            {(project.demoLink || project.repoLink) && (
              <div className="flex gap-2 pt-2 border-t border-neutral/40">
                {project.demoLink && (
                  <motion.a
                    className="btn btn-accent flex-1 btn-sm"
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Demo
                    <ExternalLink className="w-4" />
                  </motion.a>
                )}
                {project.repoLink && (
                  <motion.a
                    className="btn btn-neutral flex-1 btn-sm"
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;