import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Icon,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import { grey, blueGrey } from '@material-ui/core/colors';

import NextLink from '~/components/Link';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: blueGrey[600],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {},
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuItem: {
    '&:hover': {
      opacity: 0.6,
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: grey[100],
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const SearchIconLink = () => {
  const classes = useStyles();

  return (
    <NextLink
      href='/search'
      aria-label='Search page'
      className={classes.link}
    >
      <IconButton
        aria-label="Search"
        color="inherit"
      >
        <SearchIcon />
      </IconButton>
    </NextLink>
  );
}

const PrimarySearchAppBar = (props) => {
  const { appTitle, menuHeader = {}, ...rest } = props;
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {Object.values(menuHeader).map((item, kI) => (
        <MenuItem key={kI}>
          <NextLink
            href={item.pathname}
            as={item.asPath}
            classes={{
              root: classes.link,
            }}
          >
            <IconButton
              key={kI}
              aria-label={item.title}
              aria-controls={mobileMenuId}
            >
              <Icon color='inherit' fontSize='small'>
                {item.itemIcon}
              </Icon>
            </IconButton>

            <Typography variant='subtitle1' color='textPrimary'>
              {item.title}
            </Typography>
          </NextLink>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.appBar}>
          <NextLink
            href='/'
            aria-label='Link to Home page'
            classes={{
              root: classes.link,
            }}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              {appTitle} <code>DIGITAL</code>
            </Typography>
          </NextLink>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <SearchIconLink />

            {Object.values(menuHeader).map((item, kI) => (
              <MenuItem key={kI} className={classes.menuItem}>
                <NextLink
                  href={item.pathname}
                  as={item.asPath}
                  aria-label={item.title}
                  classes={{
                    root: classes.link,
                  }}
                >
                  <Typography variant='subtitle1'>
                    {item.title}
                  </Typography>
                </NextLink>
              </MenuItem>
            ))}
          </div>

          <div className={classes.sectionMobile}>
            <SearchIconLink />

            <IconButton
              aria-label="Menu"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
    </>
  );
}

export default PrimarySearchAppBar;
