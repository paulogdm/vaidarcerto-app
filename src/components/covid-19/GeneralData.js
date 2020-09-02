import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 640px)': {
      display: 'block',
    },
  },
  total: props => ({
    position: 'relative',
    overflow: 'inherit',
    width: 'calc(33% - 20px)',
    maxWidth: 'calc(33% - 20px)',
    // minWidth: 'calc(33% - 20px)',
    margin: '0 10px 10px',
    padding: 16,
    border: 'solid 1px #dbe9f5',
    borderRadius: 10,
    boxShadow: '0 4px 6px 0 rgba(31, 70, 88, .04)',
    '&:after': {
      content: '""',
      height: '40px',
      width: '6px',
      borderRadius: 4,
      boxShadow: '0 3px 8px 0 rgba(93,120,255,.28)',
      position: 'absolute',
      top: '26px',
      left: '-3px',
    },
    '@media (max-width: 640px)': !props.hasLayoutAdjusts
      ? ({
        margin: '0 5px 10px',
        width: '90%',
        maxWidth: '90%',
        minWidth: '90%',
      }) : {
        minWidth: 'calc(98% - 10px)',
      },
    '@media (max-width: 480px)': !props.hasLayoutAdjusts
      ? ({
        margin: '0 5px 10px',
        width: 'calc(90% - 10px)',
        maxWidth: 'calc(90% - 10px)',
        minWidth: 'calc(90% - 10px)',
      }) :  {
        width: 'calc(98% - 10px)',
        maxWidth: 'calc(98% - 10px)',
        minWidth: 'calc(98% - 10px)',
      },
  }),
  contentInfo: {
    width: '100%',
  },
  totalConfirmedCases: {
    '&:after': {
      background: '#5d78ff',
    },
  },
  totalDeaths: {
    '&:after': {
      background: '#fab822',
    },
  },
  totalLethality: {
    '&:after': {
      background: '#fb397a',
    },
  },
  labelTotal: {
    marginRight: 12,
    fontWeight: 700,
    fontSize: 40,
    lineHeight: '48px',
    letterSpacing: -1.29,
  },
  labelTitle: {
    color: '#172b3e',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: -.54,
  },
}));

const GeneralDataCard = props => {
  const { total_confirmado, total_obitos, total_letalidade, ...propsRest } = props;
  const labels = propsRest.labels;

  const classes = useStyles(propsRest);

  return (
    <Box className={classes.root}>
      <Card className={clsx(classes.total, classes.totalConfirmedCases)}>
        <div className={classes.contentInfo}>
          <Typography
            className={classes.labelTotal}
            style={{
              color: '#5d78ff',
            }}
          >
            {total_confirmado}
          </Typography>

          <Typography
            className={classes.labelTitle}
          >
            {labels.confirmedCases}
          </Typography>
        </div>
      </Card>

      <Card className={clsx(classes.total, classes.totalDeaths)}>
        <div className={classes.contentInfo}>
          <Typography
            className={classes.labelTotal}
            style={{
              color: '#fab822',
            }}
          >
            {total_obitos}
          </Typography>

          <Typography
            className={classes.labelTitle}
          >
            {labels.deaths}
          </Typography>
        </div>
      </Card>

      <Card className={clsx(classes.total, classes.totalLethality)}>
        <div className={classes.contentInfo}>
          <Typography
            className={classes.labelTotal}
            style={{
              color: '#fb397a',
            }}
          >
            {total_letalidade}
          </Typography>

          <Typography
            className={classes.labelTitle}
          >
            {labels.lethality}
          </Typography>
        </div>
      </Card>
    </Box>
  );
}

export default GeneralDataCard;
