import { motion } from 'framer-motion';

interface TransitionLineProps {
  isActive?: boolean;
  delay?: number;
}

export default function TransitionLine({ isActive = true, delay = 0 }: TransitionLineProps) {
  return (
    <motion.div
      className="w-full py-10 flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ width: '80%' }}
        variants={{
          hidden: { 
            scaleX: 0,
            opacity: 0
          },
          visible: { 
            scaleX: 1,
            opacity: 1,
            transition: { 
              duration: 0.8,
              ease: "easeInOut",
              delay: delay
            }
          }
        }}
      />
    </motion.div>
  );
}