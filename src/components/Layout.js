import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

import seoConfig from '../next-seo.config';

import PrimarySearchAppBar from './PrimarySearchAppBar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: indigo[50],
  },
  appContainer: {
    maxWidth: 960,
  },
}));

const Layout = props => {
  const { children, seoProps, routerProps, ...restProps } = props;
  const { hasLayoutAdjusts } = restProps;
  const routerAsPath = routerProps.asPath;
  const { openGraph, twitter } = seoConfig;
  const classes = useStyles();

  seoProps.title = seoProps.title || openGraph.title;
  seoProps.description = seoProps.description || openGraph.description;

  const imageGraph = (seoProps.imageGraph)
    ? ({
        url: seoProps.imageGraph,
        width: 720,
        height: 320,
      })
    : ({
        url: (restProps && restProps.logoObj) ? restProps.logoObj.url + `&w=${300}&h=${200}` : '',
        width: 300,
        height: 200,
      });

  seoProps.openGraph = {
    title: `${seoProps.title} | ${openGraph.title}`,
    images: [
      { ...imageGraph },
    ],
  };

  const cardType = seoProps.twitterCardType || twitter.cardType;
  seoProps.twitter = {
    cardType,
  };

  seoProps.titleTemplate = seoProps.title
    ? `%s | ${openGraph.site_name}`
    : `${openGraph.site_name} | ${openGraph.title}`;

  openGraph.type = (seoProps.openGraph && seoProps.openGraph.type) ? seoProps.openGraph.type : openGraph.type;
  openGraph.description = seoProps.description || openGraph.description;

  const canonical = openGraph.url + routerAsPath;

  const defaultSEO = {
    ...seoConfig,
    ...seoProps,
    openGraph: {
      ...seoConfig.openGraph,
      ...openGraph,
      ...seoProps.openGraph,
      url: canonical,
    },
    twitter: {
      ...seoConfig.twitter,
      ...openGraph.twitter,
      ...seoProps.twitter,
    }
  }

  return (
    <div className={classes.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <DefaultSeo {...defaultSEO} />

      <Container className={classes.appContainer}>
        <PrimarySearchAppBar
          {...props}
          appTitle={openGraph.site_name}
        />

        <Box
          display='flex'
          flexDirection='column'
          minHeight={'100vh'}
        >
          {children}
        </Box>
      </Container>
    </div>
  );
}

export default Layout;
