// TravelCardModal.jsx
export default function TravelCardModal({ place, onClose }) {
    if (!place) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="bg-gray-900 text-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
          <button
            className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
            onClick={onClose}
          >
            &times;
          </button>
          <img
            src={place.img}
            alt={place.name}
            className="rounded-md mb-4 w-full h-48 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">{place.name}</h3>
          <p className="text-sm text-gray-300">{place.description}</p>
        </div>
      </div>
    );
  }
  