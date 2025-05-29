import { motion } from "framer-motion";

export default function Home() {
  return (
    
    <div className="max-w-3xl mx-auto text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hi, I'm Koki
      </motion.h1>

      <motion.p
        className="text-neutral-400 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        day dreamer and engineer passoinate about building things and problem solving.
      </motion.p>

      
    </div>
  );
}
