import React, { useLayoutEffect, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../action/user';
import Spinner from '../spinners/Spinner';
import './analytics.css';

am4core.useTheme(am4themes_animated);

const Analytics = () => {
  const loading = useSelector((state) => state.user.allUserloading);
  const isSucess = useSelector((state) => state.user.allUsersDataSucess);
  const allUsers = useSelector((state) => state.user.AllUsersData);
  let chart, dateAxis, valueAxis, series, scrollbarX;
  const dispatch = useDispatch();
  useLayoutEffect(
    () => { dispatch(getAllUsers()); }, []
  );

  useEffect(() => {
    console.log('this is our data', allUsers);
    chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.paddingRight = 20;

    const data = [];
    let computationData = [];

    if (allUsers.status === 200) {
      const counter = {};
      allUsers.Data.map((obj) => {
        const key = obj.createdon;
        counter[key] = (counter[key] || 0) + 1;
      });
      computationData = Object.entries(counter);
      for (let i = 0; i < computationData.length; i++) {
        const details = Object.values(computationData[i]);
        data.push({ date: details[0], count: details[1] });
      }
    }

    chart.data = data;

    dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'count';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
  }, [allUsers]);

  return (
    <div className="analytics">
      {(loading === true) && <Spinner />}
      {<div id="chartdiv" style={{ width: '80%', height: '300px' }} />}
    </div>
  );
};

export default Analytics;
