import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import _ from 'lodash';

import Map from './map/Map';
import mapPath from './res/data_for_visualisations.csv';
import wastePath from './res/data_bar_chart_race.csv';
import Race from './race/Race';
import Line from './line/Line';
import Welcome from './Welcome';

function App() {
    const [mapData, setMapData] = useState();
    const [raceData, setRaceData] = useState();
    const [lineData, setlineData] = useState();
    const [currentElement, setCurrentElement] = useState(0);

    // Load data
    useEffect(() => {
        // TODO no duplication
        fetch(mapPath)
            .then((res) => res.text())
            .then((text) => {
                const csv = Papa.parse(text, { delimiter: ';', header: true });
                setMapData(csv.data);
            });
        fetch(wastePath)
            .then((res) => res.text())
            .then((text) => {
                const csv = Papa.parse(text, { delimiter: ';', header: true });
                // Transform data

                // TODO should probably not be here also is very hacked together and unsafe
                const raceRange = Array.from({ length: 19 }, (_, i) => i + 2000);

                setRaceData(
                    _.reduce(
                        raceRange,
                        (acc, year) => {
                            return {
                                ...acc,
                                [year]: _.map(csv.data, (country) => {
                                    const value = _.get(country, year);
                                    return { id: country['Country'], value: isNaN(value) ? '0' : value };
                                }),
                            };
                        },
                        {}
                    )
                );

                setlineData(_.groupBy(csv.data, (country) => country.Country));
            });
    }, []);

    const elements = [
        <Welcome key={0} />,
        <Line data={lineData} key={1} />,
        <Race data={raceData} key={2} />,
        <Map data={mapData} key={3} />,
    ];

    const handlePrev = () => {
        if (currentElement === 0) setCurrentElement(elements.length - 1);
        else setCurrentElement(currentElement - 1);
    };

    const handleNext = () => {
        if (currentElement === elements.length - 1) setCurrentElement(0);
        else setCurrentElement(currentElement + 1);
    };

    return (
        <div className="App" style={{ width: '100vw', height: '90vh' }}>
            <button
                onClick={handlePrev}
                style={{
                    position: 'absolute',
                    width: 50,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 99,
                    border: 0,
                    background: 'transparent',
                    outline: 'none',
                }}
            >
                <i className="fa fa-angle-double-left" style={{ fontSize: '3em', opacity: '30%' }} />
            </button>
            <button
                onClick={handleNext}
                style={{
                    position: 'absolute',
                    width: 50,
                    top: 0,
                    left: 'calc(100% - 50px)',
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 99,
                    border: 0,
                    background: 'transparent',
                    outline: 'none',
                }}
            >
                <i className="fa fa-angle-double-right" style={{ fontSize: '3em', opacity: '30%' }} />
            </button>
            {elements[currentElement]}
        </div>
    );
}

export default App;
