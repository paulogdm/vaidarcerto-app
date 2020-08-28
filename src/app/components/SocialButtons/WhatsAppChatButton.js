import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0.5),
    color: '#fff',
    fontSize: 30,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}));

const WhatsAppChatButton = props => {
  const { number, commercialText, ...rest } = props;
  const encodedText = encodeURIComponent(commercialText)
    + " - " + encodeURIComponent(`via *${rest.siteName}*`)
    + " " + encodeURIComponent(`${rest.url}`);
  const numberParam = (number !== undefined && number !== null) ? number : '';

  const classes = useStyles();

  return (
    <a
      aria-label="WhatsApp button"
      href={`https://wa.me/${numberParam}?text=${encodedText}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon
        className={classes.root}
      />
    </a>
  );
}

export default WhatsAppChatButton;
