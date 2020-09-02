import React from 'react';
import dynamic from 'next/dynamic';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Paper,
  CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const DynamicSmallBanner = dynamic(() => import('./SmallBanner'));

const FullLogo = props => {
  const { title, url, ...restProps } = props;
  const urlParams = Object.keys(restProps)
    .map(item => `${item}=${restProps[item]}`).join('&');
  const fullUrl = url + '&' + urlParams;

  return (
    <Paper elevation={0}>
      <CardMedia
        image={fullUrl}
        title={title}
        style={{
          height: 100,
        }}
      />
    </Paper>
  );
}

const Header = props => {
  const { router, logoObj, bannerHeader, menuHeader } = props;
  const hasRoute = router && router.route ? true : false;
  const bannerLoaded = (typeof bannerHeader === "object");
  const isSameRouter = (hasRoute && bannerLoaded) && router.route === bannerHeader.pageSlug;

  const classes = useStyles();

  return (
    <Box
      className={classes.root}
    >
      <FullLogo {...logoObj} />

      {bannerLoaded && Boolean(!isSameRouter) && (
        bannerHeader.size === 'small' && (
          <DynamicSmallBanner {...bannerHeader} />
        )
      )}
    </Box>
  );
}

export default Header;
