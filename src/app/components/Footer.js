import React from 'react';
import NextLink from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YoutubeIcon,
} from '@material-ui/icons';
import { grey, blueGrey } from '@material-ui/core/colors';

import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  footerMenu: {
    display: 'flex',
    backgroundColor: blueGrey[600],
  },
  listFooter: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemTextPrimary: {
    marginTop: theme.spacing(0.5),
    textTransform: 'uppercase',
  },
  link: {
    color: grey[100],
  },
  noLeftPadding: {
    paddingLeft: 5,
  },
}));

const ListItemGroup = props =>
  <ListItem button {...props} />

const CustomListItem = props => {
  const { item, activeRoute } = props;

  const classes = useStyles();

  return (
    <ListItem
      style={{
        padding: 0,
        width: 'auto',
      }}
      dense={true}
      selected={activeRoute === item.route ? true : false}
    >
      <ListItemGroup
        component="div"
      >
        <NextLink
          href={item.pathname}
          as={item.asPath}
          passHref
          prefetch={false}
        >
          <Link
            classes={{
              root: classes.link,
            }}
          >
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                variant: 'subtitle2',
              }}
              classes={{
                primary: classes.itemTextPrimary,
              }}
            />
          </Link>
        </NextLink>
      </ListItemGroup>
    </ListItem>
  );
}

const getSocialIcon = ({
  'twitter': props => <TwitterIcon {...props} />,
  'facebook': props => <FacebookIcon {...props} />,
  'instagram': props => <InstagramIcon {...props} />,
  'linkedin': props => <LinkedInIcon {...props} />,
  'youtube': props => <YoutubeIcon {...props} />,
});

const CustomSocialItem = props => {
  const { itemKey, itemValue } = props;

  const classes = useStyles();

  return (
    <ListItem
      style={{
        padding: 5,
        width: 'auto',
      }}
    >
      <Link
        color='inherit'
        className={classes.link}
        href={itemValue}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={itemKey}
      >
        {getSocialIcon[itemKey]({ fontSize: 'small' })}
      </Link>
    </ListItem>
  );
}

const MenuFooter = props => {
  const { router, menuRoutes, socials } = props;

  const classes = useStyles();

  return (
    <Box className={classes.footerMenu}>
      <List
        className={classes.listFooter}
        style={{
          width: '70%',
        }}
      >
        {Object.values(menuRoutes)
          .filter(item => item.status === 'active')
          .map((itemArr, kI) => (
            <React.Fragment key={kI}>
              <CustomListItem
                item={itemArr}
                activeRoute={router.asPath}
              />
            </React.Fragment>
          ))}
      </List>

      <List
        className={classes.listFooter}
        style={{
          flexWrap: 'wrap',
          width: '30%',
          justifyContent: 'flex-end',
          paddingRight: 10,
        }}
      >
        {Object.keys(socials)
          .filter(kI => socials[kI] !== "")
          .map((itemArr, kI) => (
            <React.Fragment key={kI}>
              <CustomSocialItem
                itemKey={itemArr}
                itemValue={socials[itemArr]}
              />
            </React.Fragment>
          ))}
      </List>
    </Box>
  );
}

const Footer = props => {
  const { router, menuFooter } = props;
  const menuFooterLoaded = (typeof menuFooter === "object");

  const classes = useStyles();

  return (
    <Box
      className={classes.root}
    >
      {menuFooterLoaded && (
        <MenuFooter
          router={router}
          {...menuFooter}
        />
      )}

      <Copyright {...props} />
    </Box>
  );
}

export default Footer;
