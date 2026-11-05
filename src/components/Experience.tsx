import Title from "./Title";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiFlutter,
    SiLaravel,
    SiPhp,
} from "react-icons/si";

const skills = [
    { id: 1, name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { id: 2, name: "CSS", icon: <SiCss />, color: "#1572B6" },
    { id: 3, name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { id: 4, name: "React", icon: <SiReact />, color: "#61DAFB" },
    { id: 5, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { id: 6, name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { id: 7, name: "Flutter", icon: <SiFlutter />, color: "#54C5F8" },
    { id: 8, name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
    { id: 9, name: "PHP", icon: <SiPhp />, color: "#777BB4" },
];

const experience = [
    {
        id: 1,
        role: "Stage et formation professionnelle",
        company: "CITECH SARL",
        period: "Juin 2026 - Août 2026",
        description: [
            "Formation de deux mois en développement web avec Laravel, développement mobile et bases de données.",
            "Conception de TicketGo, une plateforme de billetterie, présentée lors de la mini-soutenance de fin de formation.",
            "Attestation de fin de formation avec la mention Excellente.",
        ],
    },
    {
        id: 2,
        role: "Licence en Systèmes Informatiques et Logiciels",
        company: "LES COURS SONOU",
        period: "2026 - 2027 (soutenance à venir)",
        description: [
            "Formation en développement web et mobile, bases de données et génie logiciel.",
            "Réalisation de projets de groupe et préparation du mémoire de fin de cycle.",
        ],
    },
];

const Experience = () => {
    return (
        <div id="Experience" className="scroll-mt-24">
            <Title title="Expériences" />
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-16 max-w-6xl mx-auto sm:px-4 mt-8">
                
                {/* Compétences techniques avec micro-interactions */}
                <div className="grid grid-cols-3 lg:grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-6 lg:gap-y-8 place-items-center w-full max-w-sm lg:w-auto lg:max-w-none shrink-0">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex justify-center items-center flex-col lg:last:odd:col-span-2 cursor-pointer"
                        >
                            <div
                                className="w-20 h-20 p-5 text-4xl lg:w-24 lg:h-24 lg:p-6 lg:text-5xl rounded-full border-2 border-accent/40 bg-base-200 shadow-lg flex justify-center items-center transition-shadow hover:shadow-accent/20 hover:shadow-xl"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </div>
                            <span className="mt-2 text-sm text-center font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline / Cartes d'expériences */}
                <div className="flex flex-col gap-6 w-full lg:w-auto lg:flex-1 min-w-0">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -3 }}
                            className="flex flex-col bg-base-200 p-5 sm:p-7 rounded-2xl shadow-xl border border-neutral/30 transition-all duration-300"
                        >
                            <div className="flex items-center">
                                <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                                    <GraduationCap className="h-8 w-8 text-accent" />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-lg sm:text-xl text-accent font-bold">
                                        {exp.role}, {exp.company}
                                    </h1>
                                    <span className="text-xs sm:text-sm text-base-content/70 font-medium">{exp.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-5 sm:ml-16 mt-4 space-y-1.5 text-base-content/80 text-sm">
                                {exp.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;