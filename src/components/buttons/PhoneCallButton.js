import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(theme => ({
  link: {
    cursor: 'pointer',
  },
  phoneIcon: {
    padding: theme.spacing(0, 0.5),
    color: '#fff',
    fontSize: 30,
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}));

const handlePhoneCall = number =>
  window.location.href = `tel:${number}`;

const PhoneCallButton = props => {
  const { phone } = props;

  const classes = useStyles();

  return (
    <a
      className={classes.link}
      onClick={() => handlePhoneCall(phone)}
      aria-label="phone call button"
    >
      <PhoneInTalkIcon
        className={classes.phoneIcon}
      />
    </a>
  );
}

export default PhoneCallButton;
