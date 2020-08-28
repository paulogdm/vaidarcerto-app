import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  headerList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    fontSize: 11,
    lineHeight: '14px',
    fontWeight: 400,
    textAlign: 'right',
  },
  labelItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right',
    padding: theme.spacing(0.5, 2),
    color: theme.palette.text.secondary,
  },
  lbTitle: {
    padding: '18px 16px',
    fontWeight: 700,
    letterSpacing: -0.84,
  },
  labelName: {
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
    padding: theme.spacing(0.5, 2),
    color: theme.palette.text.secondary,
  },
  bdrBottom: {
    borderBottom: 'solid 1px rgba(219, 233, 245, 0.6)',
  },
  size_18: {
    fontSize: 18,
    lineHeight: '24px',
  },
}));

const GridHeaderList = props => {
  const { confirmed, deaths, lethality } = props;

  const classes = useStyles();

  return (
    <Grid
      container
      item
      className={classes.headerList}
    >
      <Grid item xs={4} />

      <Grid item xs={3} className={classes.headerItem}>
        <Typography
          variant='caption'
        >
          {confirmed}
        </Typography>
      </Grid>

      <Grid item xs={2} className={classes.headerItem}>
        <Typography
          variant='caption'
        >
          {deaths}
        </Typography>
      </Grid>

      <Grid item xs={3} className={classes.headerItem}>
        <Typography
          variant='caption'
        >
          {lethality}
        </Typography>
      </Grid>
    </Grid>
  );
}

const GridItem = props => {
  const { nome, qtd_confirmado, qtd_obito, letalidade } = props;

  const classes = useStyles();

  return (
    <Grid container item>
      <Grid item xs={4}>
        <Typography
          variant='subtitle2'
          className={classes.labelName}
        >
          {nome}
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography
          variant='subtitle2'
          className={classes.labelItem}
        >
          {qtd_confirmado}
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography
          variant='subtitle2'
          className={classes.labelItem}
        >
          {qtd_obito}
        </Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography
          variant='subtitle2'
          className={classes.labelItem}
        >
          {letalidade}
        </Typography>
      </Grid>
    </Grid>
  );
}

const CasesAroundUs = props => {
  const { data = [], labels } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        className={clsx(classes.lbTitle, classes.size_18, classes.bdrBottom, classes.noMargin)}
        component='p'
      >
        {labels.casesAroundUs}
      </Typography>

      <Box
        className={classes.root}
        pt={1}
      >
        <Grid container spacing={2}>
          <GridHeaderList {...labels} />

          {Object.values(data).map((item, kI) => (
            <React.Fragment key={kI}>
              <GridItem
                {...item}
                labels={labels}
              />
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default CasesAroundUs;
