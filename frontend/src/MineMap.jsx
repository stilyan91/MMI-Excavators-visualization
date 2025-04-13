import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import geojsonLayers from '../config/layersConfig';
import { zoomToAllLayers } from '../utils/mapUtils';



const MineMap = () => {
    const mapContainerRef = useRef(null);
    const [coords, setCoords] = useState({ lng: 26.0, lat: 42.0 });

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: {
                version: 8,
                sources: {},
                layers: [
                    {
                        id: 'background',
                        type: 'background',
                        paint: { 'background-color': '#f0f0f0' }
                    }
                ]
            },
            center: [26.0, 42.0],
            zoom: 13
        });

        map.on('load', async () => {
            geojsonLayers.forEach(layer => {
                map.addSource(layer.id, {
                    type: 'geojson',
                    data: `/data/${layer.file}`
                });

                const layerOption = {
                    id: `${layer.id}-layer`,
                    type: layer.type,
                    source: layer.id
                };

                // Set paint depending on type

                if (layer.type == 'line') {
                    layerOption.paint = {
                        'line-color': layer.color,
                        'line-width': layer.width
                    };
                    layerOption.layout = {
                        'line-join': 'round',
                        'line-cap': 'round'
                    };
                } else if (layer.type == 'fill') {
                    layerOption.paint = {
                        'fill-color': layer.color,
                        'fill-opacity': 0.5,
                        'fill-outline-color': '#333'
                    };
                }
                map.addLayer(layerOption);
            });
            await zoomToAllLayers(map, geojsonLayers);

        });

        return () => map.remove();
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />

            {/* Floating coordinate box */}
            <div style={{
                position: 'absolute',
                bottom: 10,
                left: 10,
                background: 'rgba(255, 255, 255, 0.85)',
                padding: '6px 10px',
                fontSize: '14px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                boxShadow: '0 0 4px rgba(0,0,0,0.3)'
            }}>
                🧭 {coords.lng}, {coords.lat}
            </div>
        </div>
    );
};

export default MineMap;
