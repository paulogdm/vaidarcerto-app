import React from 'react';
import { PoweredBy } from 'react-instantsearch-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  poweredBy: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 0),
    width: '100%',
    fontSize: 12,

    '& .ais-PoweredBy': {
      display: 'flex',
      alignItems: 'center',

      '& .ais-PoweredBy-text': {
        paddingRight: 5,
        paddingBottom: 5,
      },
      '& .ais-PoweredBy-logo': {
        width: 60,
      },
    },
  },
}));

const CustomPoweredBy = () => {
  const classes = useStyles();

  return (
    <Box className={classes.poweredBy}>
      <PoweredBy />
    </Box>
  );
}

export default CustomPoweredBy;
