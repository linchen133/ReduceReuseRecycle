import React, { useEffect, useState } from 'react';
import _ from 'lodash';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import Color from 'color';

import { mapToHue } from '../utils/utils';

const createRange = (min, max) => {
    return { min, max };
};

const ranges = {
    GNI: createRange(99, 190017),
    total_msw_total_msw_generated_tons_year: createRange(0, 258000000),
    waste_treatment_recycling_percent: createRange(0, 100),
    population: createRange(11097, 1371220000),
    msw_per_capita_in_kg: createRange(0, 1587),
};

const axisMapping = {
    GNI: 'GNI per capita ($)',
    waste_treatment_recycling_percent: 'Recycling rate (%)',
    population: 'Population',
    msw_per_capita_in_kg: 'Waste per capita (kg)',
    total_msw_total_msw_generated_tons_year: 'Total waste generated (t)',
    composition_food_organic_waste_percent: 'Fraction food (%)',
    composition_glass_percent: 'Fraction glass (%)',
    composition_metal_percent: 'Fraction metal (%)',
    composition_other_percent: 'Fraction other (%)',
    composition_paper_cardboard_percent: 'Fraction paper & cardboard (%)',
    composition_plastic_percent: 'Fraction plastic (%)',
    composition_rubber_leather_percent: 'Fraction rubber & leather (%)',
    composition_wood_percent: 'Fraction wood (%)',
    composition_yard_garden_green_waste_percent: 'Fraction organic (%)',
};

const calcColor = (x, y, xRange, yRange) => {
    if (isNaN(x) || isNaN(y) || x === 0 || y === 0) return Color.rgb(222, 222, 222).hex();
    const color = Color.rgb(mapToHue(x, xRange.min, xRange.max), mapToHue(y, yRange.min, yRange.max), 100);
    return color.hex();
};

function Map({ data }) {
    const [map, setMap] = useState();
    const [polygons, setPolygons] = useState();

    const [xAxis, setxAxis] = useState('GNI');
    const [yAxis, setyAxis] = useState('msw_per_capita_in_kg');

    const [xAxisLegend, setXAxisLegend] = useState();
    const [yAxisLegend, setYAxisLegend] = useState();

    const [isMapCreated, setIsMapCreated] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    // Create map hook
    useEffect(() => {
        const newMap = am4core.create('mapdiv', am4maps.MapChart);
        newMap.geodata = am4geodata_worldLow;
        newMap.projection = new am4maps.projections.Miller();

        newMap.homeZoomLevel = 3;
        newMap.homeGeoPoint = { longitude: 12, latitude: 54 };

        setMap(newMap);

        // Polygons
        const polygonSeries = newMap.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.exclude = ['AQ'];
        setPolygons(polygonSeries);

        // Create Legend
        const legendContainer = newMap.chartContainer.createChild(am4core.Container);

        legendContainer.x = am4core.percent(0);
        legendContainer.y = am4core.percent(100);
        legendContainer.dx = 25;
        legendContainer.dy = -275;
        legendContainer.width = 250;
        legendContainer.height = 250;
        legendContainer.background.fill = am4core.color('#000');
        legendContainer.background.fillOpacity = 0.3;
        legendContainer.background.stroke = am4core.color('#000');
        legendContainer.background.strokeOpacity = 0.4;
        legendContainer.background.strokeWidth = 2;

        const legend = legendContainer.createChild(am4core.Container);

        legend.width = 200;
        legend.height = 200;
        legend.align = 'center';
        legend.dy = 25;
        legend.layout = 'grid';
        legend.background.stroke = am4core.color('#000');
        legend.background.strokeOpacity = 0.8;
        legend.background.strokeWidth = 3;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const col = Color.rgb(40 * j, 40 * i, 100);
                const rect = legend.createChild(am4core.Rectangle);
                rect.width = 40;
                rect.height = 40;
                rect.fill = col.hex();
            }
        }

        // Legend axis
        const legendXAxis = legendContainer.createChild(am4core.Label);
        legendXAxis.x = am4core.percent(10);
        legendXAxis.y = am4core.percent(0.5);
        legendXAxis.text = 'GNI per capita ($) --->';
        legendXAxis.fontWeight = 'bold';
        setXAxisLegend(legendXAxis);

        const legendYAxis = legendContainer.createChild(am4core.Label);
        legendYAxis.x = am4core.percent(0.5);
        legendYAxis.y = am4core.percent(90);
        legendYAxis.rotation = -90;
        legendYAxis.text = '<--- Waste per capita (kg)';
        legendYAxis.fontWeight = 'bold';
        setYAxisLegend(legendYAxis);

        setIsMapCreated(true);
    }, []);

    // Generate polygons from data
    // Should pobably be called less often for the sake of performance
    useEffect(() => {
        if (data && isMapCreated) {
            const currentViewData = _.map(data, (country) => {
                const xVal = Math.round(country[xAxis]);
                const yVal = Math.round(country[yAxis]);
                const xRange = _.get(ranges, xAxis);
                const yRange = _.get(ranges, yAxis);

                xAxisLegend.text = `${axisMapping[xAxis]} --->`;
                yAxisLegend.text = `<--- ${axisMapping[yAxis]}`;

                const values = _.reduce(
                    axisMapping,
                    (acc, _key, desc) => {
                        const value = Math.round(_.get(country, desc));
                        return { ...acc, [desc]: isNaN(value) || value === 0 ? 'no data' : value };
                    },
                    {}
                );

                return {
                    id: country.ID,
                    xAxis: xVal,
                    yAxis: yVal,
                    fill: am4core.color(calcColor(xVal, yVal, xRange, yRange)),
                    ...values,
                };
            });

            polygons.data = currentViewData;

            const polygonTemplate = polygons.mapPolygons.template;

            let tooltip = '[bold]{name}[/]';
            _.forEach(axisMapping, (key, value) => {
                if (!showDetail && value.includes('composition')) {
                    return;
                }
                if (value === xAxis || value === yAxis) {
                    tooltip = tooltip.concat(`\n[bold]${key}: {${value}}[/]`);
                } else {
                    tooltip = tooltip.concat(`\n${key}: {${value}}`);
                }
            });
            polygonTemplate.tooltipText = tooltip;

            polygonTemplate.propertyFields.fill = 'fill';
        }
    }, [data, map, polygons, xAxis, yAxis, showDetail]);

    return (
        <>
            <div className={''} style={{ width: '100%', height: '100%' }}>
                <h4 className={'text-center pt-2'}>Select two variables and learn more about their correlation</h4>
                <form className={'d-flex justify-content-center pb-2'}>
                    <select className={'mr-2'} value={xAxis} onChange={(selected) => setxAxis(selected.target.value)}>
                        <option value={'GNI (income in $)'}>GNI per capita ($)</option>
                        <option value={'population'}>Population</option>
                        <option value={'total_msw_total_msw_generated_tons_year'}>Total waste generated (t)</option>
                        <option value={'msw_per_capita_in_kg'}>Waste per capita (kg)</option>
                    </select>
                    <select className={'mr-2'} value={yAxis} onChange={(selected) => setyAxis(selected.target.value)}>
                        <option value={'total_msw_total_msw_generated_tons_year'}>Total waste generated (t)</option>
                        <option value={'msw_per_capita_in_kg'}>Waste per capita (kg)</option>
                        <option value={'waste_treatment_recycling_percent'}>Recycling rate (%)</option>
                    </select>
                    <div className="btn-group-toggle" data-toggle="buttons">
                        <label className={`btn  ${showDetail ? 'btn-success' : 'btn-outline-success'}`}>
                            <input type="checkbox" onChange={() => setShowDetail(!showDetail)} />
                            Show detailed composition
                        </label>
                    </div>
                </form>

                <div className={'border rounded'} id="mapdiv" style={{ width: '100%', height: '100%' }} />
            </div>
        </>
    );
}

export default Map;
