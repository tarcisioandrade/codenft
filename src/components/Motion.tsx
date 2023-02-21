import { main } from "@/lib/Variants";
import { motion } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const Motion = ({ children, className, id }: MotionProps) => {
  return (
    <motion.div
      id={id}
      variants={main}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
