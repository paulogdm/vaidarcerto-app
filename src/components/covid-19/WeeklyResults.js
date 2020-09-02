import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  lbTitle: {
    padding: '18px 16px',
    fontWeight: 700,
    letterSpacing: -0.84,
  },
  bdrBottom: {
    borderBottom: 'solid 1px rgba(219, 233, 245, 0.6)',
  },
  size_18: {
    fontSize: 18,
    lineHeight: '24px',
  },
  chartCard: {
    margin: '32px 16px 22px',
    marginBottom: 50,
    width: 'calc(100% - 32px)',
  },
  noBorder: {
    border: 'none',
    boxShadow: 'none',
  },
}));

const ChartCard = props => {
  const { confirmed = {}, deaths = {}, labels } = props;

  const classes = useStyles();

  return (
    <Box
        className={clsx(classes.chartCard, classes.noBorder)}
      >
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: deaths.legend,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(250, 184, 34, 1)',
                borderColor: 'rgb(250, 184, 34, 0.4)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(250, 184, 34, 0.4)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(250, 184, 34, 0.4)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: deaths.data,
              },
              {
                label: confirmed.legend,
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(93, 120, 255, 1)',
                borderColor: 'rgb(93, 120, 255, 0.4)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(93, 120, 255, 0.4)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(93, 120, 255, 0.4)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: confirmed.data,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true,
                ticks: {
                  callback(value, index, values) {
                    return Number(value).toLocaleString(navigator.language, { notation: "compact" });
                  },
                },
              }],
            },
            legend: {
              position: 'bottom',
            },
          }}
          height={250}
        />
      </Box>
  );
}

const WeeklyResults = props => {
  const { data = [], labels } = props;
  const [_labels, _setLabels] = useState([]);
  const [_qtdConfirmed, _setQtdConfirmed] = useState([]);
  const [_qtdDeaths, _setQtdDeaths] = useState([]);

  useEffect(() => {
    Object.values(data).map(item => {
      _setLabels(prev => ([ ...prev, item.label ]));
      _setQtdConfirmed(prev => ([ ...prev, item.qtd_confirmado ]));
      _setQtdDeaths(prev => ([ ...prev, item.qtd_obito ]));

      return item;
    });
  }, [data]);

  const classes = useStyles();

  return (
    <div>
      <Typography
        className={clsx(classes.lbTitle, classes.size_18, classes.bdrBottom)}
        component='p'
      >
        {labels.weeklyCases}
      </Typography>

      <ChartCard
        labels={_labels}
        confirmed={{
          legend: labels.confirmed,
          data: _qtdConfirmed,
        }}
        deaths={{
          legend: labels.deaths,
          data: _qtdDeaths,
        }}
      />
    </div>
  );
}

export default WeeklyResults;
