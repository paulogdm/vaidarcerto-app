import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  Link as MuiLink
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
}));

const Copyright = props => {
  const { globalSettings } = props;

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography
        variant="body2"
        color="textPrimary"
      >
        {'Copyright © '}
        <MuiLink
          color="inherit"
          href={globalSettings.domainUri}
        >
          {globalSettings.siteName}
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

export default Copyright;
