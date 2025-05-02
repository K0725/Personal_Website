import asakusa from '/assets/asakusa.jpg';
import dc from '/assets/dc_image.jpg';
import kauai from '/assets/kauai.jpg';
import disney from '/assets/disney_image.jpg';
import { motion } from "framer-motion";

const images = [asakusa, dc, kauai, disney];

export default function AboutMe() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-10">Little  About Me </h2>
      <p className="text-neutral-400 text-lg mb-8">
        Born and raise Japan, but I also grow up half of my teenage life in Hawaii, shoots 🤙
      </p>

      <div className="overflow-hidden mt-10 w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`travel-${index}`}
              className="w-64 h-auto rounded-lg shadow-md flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
