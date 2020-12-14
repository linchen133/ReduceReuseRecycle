import React, { useEffect, useState } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const raceRange = Array.from({ length: 19 }, (_, i) => i + 2000);

// TODO lots of duplication

function Line({ data }) {
    const [countryA, setCountryA] = useState('Germany');
    const [countryB, setCountryB] = useState('Finland');

    const [seriesA, setSeriesA] = useState();
    const [seriesB, setSeriesB] = useState();

    const [chart, setChart] = useState();

    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        const newChart = am4core.create('linediv', am4charts.XYChart);

        // Axis'
        const dateAxis = newChart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 20;

        const valueAxis = newChart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = 'Waste per capita (kg)';
        valueAxis.title.fontWeight = 'bold';

        // Series'
        const countryASeries = newChart.series.push(new am4charts.LineSeries());
        countryASeries.dataFields.valueY = 'countryA';
        countryASeries.dataFields.dateX = 'date';

        countryASeries.tooltipText = '{countryA}';
        countryASeries.tooltip.pointerOrientation = 'vertical';

        countryASeries.strokeWidth = 4;
        countryASeries.stroke = am4core.color('#4ea7ff');
        countryASeries.tooltip.getFillFromObject = false;
        countryASeries.tooltip.background.fill = am4core.color('#4ea7ff');

        setSeriesA(countryASeries);

        const countryBSeries = newChart.series.push(new am4charts.LineSeries());
        countryBSeries.dataFields.valueY = 'countryB';
        countryBSeries.dataFields.dateX = 'date';

        countryBSeries.tooltipText = '{countryB}';
        countryBSeries.tooltip.pointerOrientation = 'vertical';

        countryBSeries.strokeWidth = 4;
        countryBSeries.stroke = am4core.color('#ff6720');
        countryBSeries.tooltip.getFillFromObject = false;
        countryBSeries.tooltip.background.fill = am4core.color('#ff6720');

        setSeriesB(countryBSeries);

        newChart.cursor = new am4charts.XYCursor();
        newChart.cursor.fullWidthLineX = true;
        newChart.cursor.xAxis = dateAxis;
        newChart.cursor.lineX.strokeWidth = 0;
        newChart.cursor.lineY.strokeWidth = 0;
        newChart.cursor.lineX.fill = am4core.color('#000');
        newChart.cursor.lineX.fillOpacity = 0.1;

        newChart.legend = new am4charts.Legend();

        setChart(newChart);
    }, []);

    useEffect(() => {
        if (!data || !chart) return;

        const transformedData = _.map(raceRange, (date) => {
            const valA = parseInt(_.get(data, countryA)[0][date]);
            const valB = parseInt(_.get(data, countryB)[0][date]);
            if (!isNaN(valA) && !isNaN(valB)) return { date: new Date(date, 1, 1), countryA: valA, countryB: valB };
        });

        seriesA.name = countryA;
        seriesB.name = countryB;
        chart.data = transformedData;
    }, [data, chart, countryA, countryB]);

    const countries = _.map(data, (_, name) => name);

    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <h4 className={'text-center pt-2'}>
                    Compare the municipal waste generation between two countries of the EU
                </h4>
                <form className={'d-flex justify-content-center p-2'}>
                    <select
                        value={countryA}
                        onChange={(selected) => setCountryA(selected.target.value)}
                        className={'mr-2'}
                    >
                        {_.map(countries, (c) => (
                            <option value={c} key={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                    <select value={countryB} onChange={(selected) => setCountryB(selected.target.value)}>
                        {_.map(countries, (c) => (
                            <option value={c} key={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </form>
                <div id="linediv" style={{ width: '95%', height: '100%', marginLeft: '2.5%' }} />
            </div>
        </>
    );
}

export default Line;
