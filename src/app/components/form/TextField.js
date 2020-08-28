import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import LightbulbIcon from '~/components/LightbulbIcon';

const useStyles = makeStyles(theme => ({
  textField: {
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  labelOverline: {
    ...theme.typography.overline,
    color: grey[700],
  },
  inputLabel: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize,
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
    fontSize: 'medium',
    color: grey[600],
  },
  formHelperText: {
    ...theme.typography.body2,
    color: grey[600],
  },
  wordWrap: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
}));

const CustomTextField = (props) => {
  const {
    shrink,
    helperText,
    InputStartAdornment,
    InputEndAdornment,
    ...restProps
  } = props;

  const classes = useStyles();

  const InputLabelProps =
    shrink ? ({
      InputLabelProps: {
        shrink: true,
        className: clsx(classes.labelOverline, classes.inputLabel),
      }
    }) : {};

  const helperTextProps =
    helperText ? ({
      helperText: (
        <React.Fragment>
          <LightbulbIcon className={classes.lightBulb} />

          <Typography variant='body2' component='span'>
            {helperText}
          </Typography>
        </React.Fragment>
      ),
      FormHelperTextProps: {
        className: clsx(classes.formHelperText, classes.wordWrap),
      },
    }) : {};

  const adornmentClass = {
    classes: {
      root: classes.labelOverline,
    },
  };

  const InputProps =
    InputStartAdornment ? ({
      InputProps: {
        startAdornment: (
          <InputStartAdornment
            position='start'
            {...adornmentClass}
          />
        ),
      },
    }) : InputEndAdornment ? ({
      InputProps: {
        endAdornment: (
          React.cloneElement(
            InputEndAdornment,
            {
              position: 'end',
              ...adornmentClass,
            }
          )
        ),
      },
    }) : {};

  return (
    <TextField
      {...restProps}
      className={classes.textField}
      {...helperTextProps}
      {...InputLabelProps}
      {...InputProps}
    />
  );
}

export default CustomTextField;
