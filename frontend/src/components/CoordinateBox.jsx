import React from 'react';

const CoordinateBox = ({ lng, lat }) => {
    const isValid = typeof lng === 'number' && typeof lat === 'number';

    return (
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
            🧭 {isValid ? `${lng.toFixed(6)}, ${lat.toFixed(6)}` : 'Loading...'}
        </div>
    );
};


export default CoordinateBox;