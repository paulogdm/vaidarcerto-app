import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    marginBottom: 22,
    padding: '10px 12px 0',
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  cardTotal: {
    margin: '10px 0',
    padding: '16px 0',
    borderRadius: 0,
    [theme.breakpoints.down('md')] : {
      padding: 0,
      margin: '0 5px 10px',
      width: '90%',
      maxWidth: '90%',
      textAlign: 'left',
      justifyContent: 'flex-start',
    },
  },
  noShadow: {
    boxShadow: 'none',
    borderWidth: 'initial',
    borderStyle: 'none',
    borderColor: 'initial',
    borderImage: 'initial',
  },
  labelCovid: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 900,
    color: '#0297ff',
  },
  labelTitle: {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: '34px',
  },
  labelGrey: {
    position: 'relative',
    lineHeight: '19px',
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: -0.23,
    color: '#8498AE',
  },
}));

const PanelInfo = props => {
  const { dt_atualizacao, labels, settings } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card
        className={clsx(classes.cardTotal, classes.colLeft, classes.noShadow)}
        display='flex'
      >
        <Typography
          className={classes.labelCovid}
        >
          Covid19
        </Typography>

        <Typography
          className={classes.labelTitle}
        >
          <strong>{labels.panel}</strong>
          {' '}
          {labels.covid19}
        </Typography>

        <Typography
          className={classes.labelGrey}
          component='div'
        >
          <Typography>
            {labels.lastUpdated}
            {': '}
            <Typography
              component='span'
            >
              {dt_atualizacao}
            </Typography>
          </Typography>
        </Typography>
      </Card>

      <Card
        className={clsx(classes.cardTotal, classes.colRight, classes.noShadow, classes.justifyEnd)}
        display='flex'
        width='100%'
      >
        <Typography
          variant='subtitle2'
        >
          {labels.sourceTitle}
          {':'}
        </Typography>

        <Link href={settings.sourceLink}>
          <Typography
            variant='body2'
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {settings.sourceTitle}
            &nbsp;
            <LinkIcon fontSize='small' />
          </Typography>
        </Link>
      </Card>
    </Box>
  );
}

export default PanelInfo;
