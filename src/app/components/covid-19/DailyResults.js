import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Line } from 'react-chartjs-2';
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
  const { data = [], labels, legend } = props;

  const classes = useStyles();

  return (
    <Box
        className={clsx(classes.chartCard, classes.noBorder)}
      >
        <Line
          data={{
            labels,
            datasets: [
              {
                label: legend,
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#4bc0c0',
                borderColor: '#4bc0c0',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#4bc0c0',
                pointBackgroundColor: '#4bc0c0',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#4bc0c0',
                pointHoverBorderColor: '#4bc0c0',
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data,
              },
            ]
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  callback(value, index, values) {
                    return Number(value).toLocaleString(navigator.language, { notation: "compact" });
                  },
                },
              }]
            },
            legend: {
              display: false,
            },
          }}
          height={250}
        />
      </Box>
  );
}

const DailyResults = props => {
  const { data = [], labels } = props;
  const [_labels, _setLabels] = useState([]);
  const [_qtdConfirmed, _setQtdConfirmed] = useState([]);

  useEffect(() => {
    Object.values(data).map(item => {
      _setLabels(prev => ([ ...prev, item.label ]));
      _setQtdConfirmed(prev => ([ ...prev, item.qtd_confirmado ]));

      return item;
    });
  }, [data]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        className={clsx(classes.lbTitle, classes.size_18, classes.bdrBottom)}
        component='p'
      >
        {labels.newCasesByDay}
      </Typography>

      <ChartCard
        labels={_labels}
        legend={labels.confirmed}
        data={_qtdConfirmed}
      />
    </React.Fragment>
  );
}

export default DailyResults;
