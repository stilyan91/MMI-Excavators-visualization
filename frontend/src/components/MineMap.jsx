import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import geojsonLayers from '../../config/layersConfig';
import { convertToDecimalDegrees, zoomToAllLayers } from '../../utils/mapUtils';

import LiveExcavatorPoint from './LiveExcavatorLocation';
import CoordinateBox from './CoordinateBox';



const MineMap = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
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

        mapRef.current = map;

        map.on('mousemove', e => {
            setCoords({ lng: e.lngLat.lng, lat: e.lngLat.lat });
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
            <CoordinateBox lng={coords.lng} lat={coords.lat} />

            {mapRef.current && (
                <LiveExcavatorPoint
                    map={mapRef.current}
                    latitude={convertToDecimalDegrees(42, 9.5457)}
                    longitude={convertToDecimalDegrees(26, 2.4988)}
                />
            )}
        </div>
    );
};

export default MineMap;
