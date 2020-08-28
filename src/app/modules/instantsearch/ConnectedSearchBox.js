import React, { useEffect, useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  textField: {
    paddingTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  content: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  button: {
    marginTop: 23,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: 5,
    },
  },
}));

const CustomSearchBox = React.forwardRef((props, myRef) => {
  const classes = useStyles();
  const {
    refinementCategory,
    refinementWhatsApp,
    currentRefinement,
    refine,
    translations = {},
  } = props;
  const [state, setState] = useState({
    title: currentRefinement,
  });
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration shows it.
  useEffect(() => {
    setShowChild(true);
  }, []);

  const handleChange = (evt) => {
    const target = evt.target;

    setState({
      ...state,
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value,
    });
  }

  const handleSubmit = (objValues) => {
    refine(objValues.title);
  }

  if (!showChild) {
    // You can show some kind of placeholder UI here..
    return (
      <p>Loading {props.attribute}...</p>
    );
  }

  return (
    <Box
      className={classes.content}
    >
      <TextField
        ref={myRef}
        id='title'
        name='title'
        label={translations.label || 'Name'}
        placeholder={translations.placeholder || 'Search for what you desire...'}
        defaultValue={currentRefinement}
        onChange={handleChange}
        className={classes.textField}
        variant='outlined'
        margin='normal'
        size='small'
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />

      {refinementCategory !== undefined && (
        <Box>
          {refinementCategory}
        </Box>
      )}

      {refinementWhatsApp !== undefined && (
        <Box>
          {refinementWhatsApp}
        </Box>
      )}

      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={() => handleSubmit(state)}
      >
        {translations.button || 'Search'}
      </Button>
    </Box>
  );
});

const ConnectedSearchBox = connectSearchBox(CustomSearchBox);

export default ConnectedSearchBox;
