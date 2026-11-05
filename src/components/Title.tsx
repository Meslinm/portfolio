import { motion } from "framer-motion";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center my-6"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight inline-block relative">
        {title}
        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full"></span>
      </h2>
    </motion.div>
  );
};

export default Title;