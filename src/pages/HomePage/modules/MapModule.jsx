import { useEffect } from 'react';

import useMediaBreakpoints from 'hooks/useMediaBreakpoints';

const getLatLngArray = (object) => {
  return [object?.latitude, object?.longitude];
};

const generateMarkers = (markers) => {
  let tempString = ``;

  markers.forEach((marker, index) => {
    const coord = JSON.stringify(marker);
    tempString += `var marker${index} = L.marker(${coord}).addTo(map);`;
  });

  return tempString;
};

/* eslint-disable no-unused-vars */
const MapModule = ({ coords }) => {
  const { tabletBreakpoint } = useMediaBreakpoints();

  useEffect(() => {
    const startView = coords
      ? coords[0]
      : { latitude: 51.505, longitude: -0.09 };

    const stringCoords = JSON.stringify(getLatLngArray(startView));

    if (coords) {
      const markers = coords?.map((coord) => getLatLngArray(coord));

      const script = document.createElement('script');
      script.innerHTML = `const map = L.map('map').setView(${stringCoords}, 11);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map); 
        ${generateMarkers(markers)}`;
      document.body.appendChild(script);
    }
  }, [coords]);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: tabletBreakpoint ? '350px' : '600px',
      }}
    ></div>
  );
};

export default MapModule;
