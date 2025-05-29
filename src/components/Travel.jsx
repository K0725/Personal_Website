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

      // Ensure controls exist before modifying
      const controls = globe.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5; // Adjust for faster/slower spin
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
      }

      // Trigger continuous render loop
      globe.renderer().setAnimationLoop(() => {
        globe.controls().update();
        globe.renderer().render(globe.scene(), globe.camera());
      });
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6">Travel</h2>
      <p className="text-neutral-400 text-lg mb-4">
        I love to travel and explore new places and food. Here are some of my favorite destinations 📍Click the pin location to see the images! 
      </p>

      <div className="flex justify-center items-center w-full h-[500px] rounded-xl overflow-hidden mb-10 bg-black">
        <div className="w-full h-full">
          <Globe
            ref={globeRef}
            globeImageUrl="https://raw.githubusercontent.com/vasturiano/three-globe/master/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0,0,0,0)"
            labelsData={[]} // No default labels
            htmlElementsData={places}
            htmlLat={(d) => d.lat}
            htmlLng={(d) => d.lng}
            htmlElement={(d) => {
              const el = document.createElement('div');
              el.innerHTML = `<span title="${d.name}" style="font-size: 24px; cursor: pointer;">📍</span>`;
              el.style.pointerEvents = 'auto';
              el.style.transform = 'translate(-50%, -50%)';
              el.addEventListener('click', () => setSelectedPlace(d));
              return el;
            }}
          />
        </div>
      </div>

      {/* Travel Modal */}
      <TravelCardModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
}
