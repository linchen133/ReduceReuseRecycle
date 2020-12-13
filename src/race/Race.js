import React, { useEffect } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

function Race({ data }) {
    useEffect(() => {
        if (!data) return;

        am4core.useTheme(am4themes_animated);

        const chart = am4core.create('racediv', am4charts.XYChart);
        chart.padding(40, 40, 40, 40);

        const label = chart.plotContainer.createChild(am4core.Label);
        label.x = am4core.percent(97);
        label.y = am4core.percent(95);
        label.horizontalCenter = 'right';
        label.verticalCenter = 'middle';
        label.dx = -15;
        label.fontSize = 50;

        const playButton = chart.plotContainer.createChild(am4core.PlayButton);
        playButton.x = am4core.percent(97);
        playButton.y = am4core.percent(95);
        playButton.dy = -2;
        playButton.verticalCenter = 'middle';
        playButton.events.on('toggled', function (event) {
            if (event.target.isActive) {
                play();
            } else {
                stop();
            }
        });

        const stepDuration = 2000;

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = 'id';
        categoryAxis.renderer.minGridDistance = 1;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.rangeChangeEasing = am4core.ease.linear;
        valueAxis.rangeChangeDuration = stepDuration;
        valueAxis.extraMax = 0.1;

        const series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryY = 'id';
        series.dataFields.valueX = 'value';
        series.tooltipText = '{valueX.value}';
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;
        series.interpolationDuration = stepDuration;
        series.interpolationEasing = am4core.ease.linear;

        const labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.horizontalCenter = 'right';
        labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.as')}";
        labelBullet.label.textAlign = 'end';
        labelBullet.label.dx = -10;

        chart.zoomOutButton.disabled = true;

        series.columns.template.adapter.add('fill', function (_fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        let year = 2000;
        label.text = year.toString();

        let interval;

        function play() {
            if (year >= 2018) {
                year = 1999;
            }
            interval = setInterval(function () {
                nextYear();
            }, stepDuration);
            nextYear();
        }

        function stop() {
            if (interval) {
                clearInterval(interval);
            }
        }

        function nextYear() {
            year++;

            if (year > 2018) {
                // repeat
                // year = 2000;

                // stop at 2018
                year = 2018;
                playButton.isActive = false;
            }

            const newData = data[year];
            for (let i = 0; i < chart.data.length; i++) {
                chart.data[i].value = newData[i].value;
            }

            series.interpolationDuration = stepDuration;
            valueAxis.rangeChangeDuration = stepDuration;

            chart.invalidateRawData();
            label.text = year.toString();
        }

        categoryAxis.sortBySeries = series;

        chart.data = JSON.parse(JSON.stringify(data[year]));

        series.events.on('inited', function () {
            categoryAxis.zoom({ start: 0, end: 20 / categoryAxis.dataItems.length });
            setTimeout(function () {
                playButton.isActive = true;
            }, 2000);
        });
    }, [data]);

    return <div id="racediv" style={{ width: '100%', height: '100%' }} />;
}

export default Race;
