import { motion } from "framer-motion";

export default function TravelCardModal({ place, onClose }) {
  if (!place) return null;

  const images = place?.imgs || [];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-gray-900 text-white rounded-xl shadow-xl max-w-2xl w-full p-6 relative">
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className="text-2xl font-semibold mb-3">{place.name}</h3>
        <p className="text-sm text-gray-300 mb-4">{place.description}</p>

        {images.length > 0 && (
          <div className="overflow-hidden w-full mt-4 rounded-md">
            {images.length === 1 ? (
              <img
                src={images[0]}
                alt="Travel"
                className="w-full h-64 object-cover rounded-md"
              />
            ) : (
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
                    className="w-64 h-64 object-cover rounded-md flex-shrink-0 shadow-md"
                  />
                ))}
              </motion.div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
