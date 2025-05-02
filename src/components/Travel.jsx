import Globe from 'react-globe.gl';
import { useEffect, useRef, useState } from 'react';
import TravelCardModal from './TravelCardModal';
import { places } from '../Data/TravelData';

export default function Travel() {
  const globeRef = useRef();
  const [selectedPlace, setSelectedPlace] = useState(null); // Add this to track modal state

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      // Initial camera position
      globe.pointOfView({ lat: 20, lng: 0, altitude: 2 }, 1000);
  
      // Enable auto-rotation
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5; // Adjust speed here
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
        labelsData={[]} // Disable default labels
        htmlElementsData={places}
        htmlLat={(d) => d.lat}
        htmlLng={(d) => d.lng}
        htmlElement={(d) => {
          const el = document.createElement('div');
          el.innerHTML = `<span title="${d.name}" style="font-size: 24px; cursor: pointer;">📍</span>`;
          el.style.pointerEvents = 'auto'; // allow interaction
          el.style.transform = 'translate(-50%, -50%)'; // center emoji on point
        
          el.addEventListener('click', () => {
            setSelectedPlace(d); // this works if setSelectedPlace is in scope
          });
        
          return el;
        }}
      />      


      </div>

      {/* Modal for selected place */}
      <TravelCardModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
}
