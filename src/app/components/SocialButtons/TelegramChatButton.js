import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0.5),
    color: '#fff',
    fontSize: 30,
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}));

const TelegramChatButton = props => {
  const { username } = props;

  const classes = useStyles();

  return (
    <a
      aria-label="Telegram button"
      href={`tg://resolve?domain=${username}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TelegramIcon
        className={classes.root}
      />
    </a>
  );
}

export default TelegramChatButton;
