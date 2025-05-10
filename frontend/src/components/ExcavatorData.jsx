import React, { useEffect, useState } from 'react';
import './styles/ExcavatorData.css';

const ExcavatorData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch data from the backend API
        fetch('/api/last10records/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="excavator-data">
            {Object.entries(data).map(([code, records]) => (
                <div key={code} className="excavator">
                    <h3>Excavator: {code}</h3>
                    <ul>
                        {records.map((record, index) => (
                            <li
                                key={record.timestamp}
                                style={{
                                    color: index === 0 ? 'blue' : 'rgb(253, 253, 253)',
                                }}
                            >
                                {`Timestamp: ${record.timestamp}, Latitude: ${record.latitude}, Longitude: ${record.longitude}, Altitude: ${record.altitude}`}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ExcavatorData;