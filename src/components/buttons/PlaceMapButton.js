import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlaceIcon from '@material-ui/icons/Place';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0.5),
    color: '#fff',
    fontSize: 30,
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
}));

const PlaceMapButton = props => {
  const { pLink } = props;

  const classes = useStyles();

  return (
    <a
      aria-label="Place Map button"
      href={pLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <PlaceIcon
        className={classes.root}
      />
    </a>
  );
}

export default PlaceMapButton;
