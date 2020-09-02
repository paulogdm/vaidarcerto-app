import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => (
  <MuiAlert elevation={6} variant='filled' {...props} />
);

const Snackbar = props => {
  const { onClose, message, ...other } = props;

  return (
    <MuiSnackbar
      open={other.open}
      onClose={onClose}
      autoHideDuration={other.autoHideDuration || 6e3}
    >
      <Alert
        onClose={onClose}
        severity={other.messageClass}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

export default Snackbar;
