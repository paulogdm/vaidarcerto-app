import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Doughnut } from 'react-chartjs-2';
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
  grafLegends: {
    alignItems: 'center',
    padding: '0 16px',
    margin: '8px 0',
    [theme.breakpoints.down('xl')]: {
      padding: '0 10px',
    },
  },
  ctLegend: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  legColor: {
    width: 14,
    height: 14,
    marginRight: 10,
    borderRadius: 3,
  },
  legValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#4b5b65',
  },
  legAdjusts: {
    width: 50,
    textAlign: 'right',
  },
  legFont: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: -.28,
  },
  legPercent: {
    marginLeft: 2,
    color: '#5d78ff',
  },
}));

const ChartCard = props => {
  const { labels, data, backgroundColor, hoverBackgroundColor } = props;

  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.chartCard, classes.noBorder)}
    >
      <Doughnut
        width={200}
        legend={{
          display: false,
        }}
        data={{
          labels,
          datasets: [{
            data,
            backgroundColor,
            hoverBackgroundColor,
          }],
        }}
      />
    </Box>
  );
}

const GrafLegends = props => {
  const { data } = props;

  const classes = useStyles();

  return (
    <div>
        {Object.values(data).map((item, kI) => (
          <React.Fragment key={kI}>
            <Box
              className={clsx(classes.root, classes.grafLegends)}
            >
              <Box
                className={clsx(classes.ctLegend, classes.alignStart)}
              >
                <div
                  className={classes.legColor}
                  style={{
                    background: `${item.color}`
                  }}
                />

                <Typography
                  variant='body2'
                  color='textPrimary'
                  className={classes.legFont}
                >
                  {item.nome}
                </Typography>
              </Box>

              <Box
                className={classes.legValue}
              >
                <Typography
                  className={clsx(classes.legQtd, classes.legAdjusts, classes.legFont)}
                  variant='subtitle2'
                >
                  {item.qtd}
                </Typography>

                <Typography
                  className={clsx(classes.legPercent, classes.legAdjusts, classes.legFont)}
                  variant='subtitle2'
                >
                  {item.percent}
                </Typography>
              </Box>
            </Box>
          </React.Fragment>
        ))}
    </div>
  );
}

const RegionalData = props => {
  const { data = [], labels } = props;
  const [_labels, _setLabels] = useState([]);
  const [_qtd, _setQtd] = useState([]);
  const [_bgColors, _setBgColors] = useState([]);

  useEffect(() => {
    Object.values(data).map(item => {
      _setLabels(prev => ([ ...prev, item.nome ]));
      _setQtd(prev => ([ ...prev, item.qtd ]));
      _setBgColors(prev => ([ ...prev, item.color ]));

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
        {labels.regionCases}
      </Typography>

      <ChartCard
        labels={_labels}
        data={_qtd}
        backgroundColor={_bgColors}
        hoverBackgroundColor={_bgColors}
      />

      <GrafLegends data={data} />
    </React.Fragment>
  );
}

export default RegionalData;
