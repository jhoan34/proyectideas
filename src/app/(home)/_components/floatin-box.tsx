"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // no "motion/react" ni "motion"

interface props {
  className?: string;
  initialPosition?: string | number;
}

const FloatinBox: React.FC<props> = ({ className, initialPosition }) => {
  return (
    <motion.div
      initial={{ y: initialPosition || 0, rotate: 15 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.3,
          delay: 0.8,
          type: "spring",
          stiffness: 100,
        },
      }}
      whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn(
        "z-0 absolute size-40 rounded-3xl shadow-lg dark:bg-opacity-50",
        className
      )}
    ></motion.div>
  );
};

export default FloatinBox;
