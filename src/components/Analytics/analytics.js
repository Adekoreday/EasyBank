import React, { useLayoutEffect, useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../action/user';
import { getAllTransactions } from '../../action/transaction';
import Spinner from '../spinners/Spinner';
import './analytics.css';

am4core.useTheme(am4themes_animated);

const sortData = (alldata) => {
  const fecthedData = alldata;
  let computationData = [];
  const data = [];
  if (fecthedData.status === 200) {
    const counter = {};
    fecthedData.Data.map((obj) => {
      const key = obj.createdon;
      counter[key] = (counter[key] || 0) + 1;
    });
    computationData = Object.entries(counter);
    for (let i = 0; i < computationData.length; i++) {
      const details = Object.values(computationData[i]);

      data.push({ date: details[0], count: details[1] });
    }
  }
  return data;
};

const Analytics = () => {
  const loading = useSelector((state) => state.user.allUserloading);
  const isSucess = useSelector((state) => state.user.allUsersDataSucess);
  const allUsers = useSelector((state) => state.user.AllUsersData);
  const allTransactionFailed = useSelector((state) => state.transaction.allTransactionData);
  const allTransactionData = useSelector((state) => state.transaction.allTransactionData);
  const transactionloading = useSelector((state) => state.transaction.isloadingAllTransaction);

  let chart, transactionChart, dateAxis, valueAxis, series, scrollbarX;
  const dispatch = useDispatch();
  useLayoutEffect(
    () => { dispatch(getAllUsers()); dispatch(getAllTransactions()); }, []
  );

  useEffect(() => {
    const container = am4core.create('container', am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = 'vertical';
    chart = new am4charts.XYChart();
    chart.paddingRight = 20;
    chart.parent = container;
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

    chart.data = sortData(allUsers);

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

    // transaction charts
    transactionChart = new am4charts.XYChart();
    transactionChart.hiddenState.properties.opacity = 0;
    transactionChart.parent = container;
    transactionChart.data = sortData(allTransactionData);

    const categoryAxis = transactionChart.xAxes.push(new am4charts.DateAxis());
    categoryAxis.renderer.grid.template.location = 0;

    const transactionChartvalueAxis = transactionChart.yAxes.push(new am4charts.ValueAxis());
    transactionChartvalueAxis.min = 0;
    transactionChartvalueAxis.max = 100;
    transactionChartvalueAxis.strictMinMax = true;
    transactionChartvalueAxis.renderer.minGridDistance = 10;
    // axis break
    const axisBreak = transactionChartvalueAxis.axisBreaks.create();
    axisBreak.startValue = 70;
    axisBreak.endValue = 100;

    // fixed axis break
    const d = (axisBreak.endValue - axisBreak.startValue) / (transactionChartvalueAxis.max - transactionChartvalueAxis.min);
    axisBreak.breakSize = 0.05 * ((1 - d) / d); // 0.05 means that the break will take 5% of the total value axis height

    // make break expand on hover
    const hoverState = axisBreak.states.create('hover');
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;

    axisBreak.defaultState.transitionDuration = 1000;

    const transactionSeries = transactionChart.series.push(new am4charts.ColumnSeries());
    transactionSeries.dataFields.dateX = 'date';
    transactionSeries.dataFields.valueY = 'count';
    transactionSeries.columns.template.tooltipText = '{valueY.value}';
    transactionSeries.columns.template.tooltipY = 0;
    transactionSeries.columns.template.strokeOpacity = 0;
    transactionSeries.columns.template.adapter.add('fill', (fill, target) => transactionChart.colors.getIndex(target.dataItem.index));
  }, [allUsers, allTransactionData]);

  return (
    <div className="analytics">
      {(loading === true) && <Spinner />}
      {<div id="container" />}
    </div>
  );
};

export default Analytics;
