import React from 'react';
import { motion } from 'framer-motion';

const skillsList = [
  "React", "TypeScript", "Flutter", "Laravel", "Tailwind CSS", 
  "JavaScript", "PHP", "UI/UX Design", "Développement Web & Mobile"
];

export const Marquee: React.FC = () => {
  return (
    <div className="py-6 bg-base-300/50 border-y border-neutral/30 overflow-hidden relative my-10">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 items-center text-lg sm:text-xl font-bold text-accent/80 uppercase tracking-widest shrink-0"
        >
          {skillsList.concat(skillsList).map((skill, index) => (
            <span key={index} className="flex items-center gap-12">
              {skill} <span className="w-2 h-2 rounded-full bg-accent/40 inline-block" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;