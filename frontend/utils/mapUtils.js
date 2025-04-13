import { Padding } from "maplibre-gl";

export async function zoomToAllLayers(map, geojsonLayers) {
    const allCords = [];

    for (const layer of geojsonLayers) {
        try {
            const res = await fetch(`/data/${layer.file}`);
            const geojson = await res.json();

            geojson.features.forEach(feature => {
                const geom = feature.geometry;

                if (geom.type === 'LineString') {
                    geom.coordinates.forEach(c => allCords.push([c[0], c[1]]));
                } else if (geom.type === 'Polygon') {
                    geom.coordinates.flat().forEach(c => allCords.push([c[0], c[1]]));
                } else if (geom.type === 'MultiPolygon') {
                    geom.coordinates.flat(2).forEach(c => allCords.push([c[0], c[1]]));
                } else if (geom.type === 'Point') {
                    allCords.push([geom.coordinates[0], geom.coordinates[1]]);
                }

            });
        } catch (err) {
            console.warn(`Could not load or parse ${layer.file}`, err);
        }
    }

    if (allCords.length > 0) {
        const lats = allCords.map(c => c[1]);
        const lngs = allCords.map(c => c[0]);
        const alt = allCords.map(c => c[2]);


        const bounds = [
            [Math.min(...lngs), Math.min(...lats)],
            [Math.max(...lngs), Math.max(...lats)]
        ];


        map.fitBounds(bounds, { Padding: 30 });
    } else {
        console.warn('No coordinates found in any GeoJson layer');
    }
}