import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Link as LinkIcon,
  Facebook as FacebookIcon,
  WhatsApp as WhatsAppIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';
import { blue, green } from '@material-ui/core/colors';

import FacebookShareButton from './FacebookShareButton';
import TwitterShareButton from './TwitterShareButton';
import WhatsAppShareButton from './WhatsAppShareButton';
import TelegramShareButton from './TelegramShareButton';
import CopyToClipboardButton from '~/components/buttons/CopyToClipboardButton';

const useStyles = makeStyles(theme => ({
  shareButton: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  itemIcon: {
    minWidth: 30,
  },
  facebookIcon: {
    color: "#fff",
    backgroundColor: blue[800],
    '&:hover': {
      backgroundColor: blue[900],
    },
  },
  twitterIcon: {
    color: "#fff",
    backgroundColor: blue[300],
    '&:hover': {
      backgroundColor: blue[500],
    },
  },
  whatsAppLink: {
    color: green[500],
    '&:hover': {
      color: green[700],
    },
  },
  whatsAppIcon: {
    color: "#fff",
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  telegramIcon: {
    color: "#fff",
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
  linkIcon: {
    color: "#fff",
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}));

const SocialButtonsList = props => {
  const {
    title,
    primaryText,
    category,
    siteName,
    twitterUsername,
    domainUri,
    router,
    onAlertOpened,
    facebook,
    labels,
  } = props;
  const facebookAppId = facebook ? facebook.appId : null;
  const twitterTitle = `${title}, ${primaryText}`;
  const twitterHashtags = category.join(',');

  const twitter = {
    title: twitterTitle,
    hashtags: twitterHashtags,
    handle: twitterUsername || undefined,
    site: domainUri || undefined,
  };

  const whatsApp = {
    title,
    excerpt: primaryText,
    siteName,
  };

  const telegram = {
    title,
    excerpt: primaryText,
    siteName,
  };

  const currentUri = domainUri + router.asPath;

  const classes = useStyles();

  return (
    <List component="nav" aria-label="social buttons list">
      <ListItem button>
        <FacebookShareButton
          className={classes.shareButton}
          appId={facebookAppId}
          url={currentUri}
        >
          <ListItemIcon className={classes.itemIcon}>
            <FacebookIcon className={classes.facebookIcon} />
          </ListItemIcon>

          <ListItemText primary="Facebook" />
        </FacebookShareButton>
      </ListItem>

      <ListItem button>
        <TwitterShareButton
          className={classes.shareButton}
          {...twitter}
          url={currentUri}
        >
          <ListItemIcon className={classes.itemIcon}>
            <TwitterIcon className={classes.twitterIcon} />
          </ListItemIcon>

          <ListItemText primary="Twitter" />
        </TwitterShareButton>
      </ListItem>

      <ListItem button>
        <WhatsAppShareButton
          className={clsx(classes.shareButton, classes.whatsAppLink)}
          {...whatsApp}
          url={currentUri}
        >
          <ListItemIcon className={classes.itemIcon}>
            <WhatsAppIcon className={classes.whatsAppIcon} />
          </ListItemIcon>

          <ListItemText primary="WhatsApp" />
        </WhatsAppShareButton>
      </ListItem>

      <ListItem button>
        <TelegramShareButton
          className={classes.shareButton}
          {...telegram}
          url={currentUri}
        >
          <ListItemIcon className={classes.itemIcon}>
            <TelegramIcon className={classes.telegramIcon} />
          </ListItemIcon>

          <ListItemText primary="Telegram" />
        </TelegramShareButton>
      </ListItem>

      <ListItem button>
        <CopyToClipboardButton
          className={classes.shareButton}
          setAlertOpened={onAlertOpened}
          url={currentUri}
        >
          <ListItemIcon className={classes.itemIcon}>
            <LinkIcon className={classes.linkIcon} />
          </ListItemIcon>

          <ListItemText primary={labels.copyLink} />
        </CopyToClipboardButton>
      </ListItem>
    </List>
  );
}

export default SocialButtonsList;
