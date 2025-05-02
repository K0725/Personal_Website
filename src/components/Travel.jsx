import Globe from 'react-globe.gl';
import { useEffect, useRef, useState } from 'react';
import TravelCardModal from './TravelCardModal';
import { places } from '../Data/TravelData';

export default function Travel() {
  const globeRef = useRef();
  const [selectedPlace, setSelectedPlace] = useState(null); 

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      // Initial camera position
      globe.pointOfView({ lat: 20, lng: 0, altitude: 2 }, 1000);
  
      // Enable auto-rotation
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5; 
    }
  }, []);
  

  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6">Travel</h2>
      <p className="text-neutral-400 text-lg mb-4">
        I love to travel and explore new places and food. Here are some of my favorite destinations 📍
      </p>

      <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-10">
        <Globe
          ref={globeRef}
          globeImageUrl="https://raw.githubusercontent.com/vasturiano/three-globe/master/example/img/earth-blue-marble.jpg"
          backgroundColor="rgba(0,0,0,0)"
          labelsData={places}
          labelLat={(d) => d.lat}
          labelLng={(d) => d.lng}
          labelText={(d) => d.name}
          labelSize={() => 1.2}
          labelDotRadius={() => 0.5}
          labelColor={() => "red"}
          onLabelClick={(place) => setSelectedPlace(place)}
        />
      </div>

      {/* Modal for selected place */}
      <TravelCardModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
}
