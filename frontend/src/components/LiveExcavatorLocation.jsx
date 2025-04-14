import { useEffect } from "react";
import maplibregl from 'maplibre-gl';
import '../styles/LiveExcavatorPoint.css'

const LiveExcavatorPoint = ({ map, latitude, longitude }) => {
    useEffect(() => {
        if (!map || !latitude || !longitude) return;

        // Create a custom div marker
        const el = document.createElement('div');
        el.className = 'blinking-marker';

        const marker = new maplibregl.Marker({ element: el })
            .setLngLat([longitude, latitude])
            .addTo(map);


        // Cleanup when component unmount or GPS changes
        return () => marker.remove();
    }, [map, latitude, longitude]);
    return null; //
};

export default LiveExcavatorPoint;