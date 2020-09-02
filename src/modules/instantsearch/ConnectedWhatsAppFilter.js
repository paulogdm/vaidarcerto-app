import React from 'react';
import { connectToggleRefinement } from 'react-instantsearch-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
  Switch,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const CustomWhatsAppFilter = props => {
  const { currentRefinement, attribute, label, refine, translations = {} } = props;
  const classes = useStyles();

  return (
    <Box
      className={classes.textField}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Typography
        variant='caption'
      >
        {translations.label || label}
      </Typography>

      <Switch
        checked={currentRefinement}
        name={attribute}
        onChange={event => refine(!currentRefinement)}
      />
    </Box>
  );
}

const ConnectedWhatsAppFilter = connectToggleRefinement(CustomWhatsAppFilter);

export default ConnectedWhatsAppFilter;

