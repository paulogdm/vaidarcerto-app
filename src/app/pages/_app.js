import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ThemeProvider } from '@material-ui/core/styles';
import {
  CssBaseline,
  LinearProgress,
} from '@material-ui/core';

import getConfig from '../config';
import { AppProvider } from '../AppContext';

import myTheme from '~/modules/theme';

const RouterProvider = ({ children }) => {
  const Router = useRouter();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setStatus('changing');
    }

    const handleRouteComplete = (url) => {
      setStatus('completed');
    }

    Router.events.on('routeChangeStart', handleRouteChange);
    Router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
      Router.events.off('routeChangeComplete', handleRouteComplete);
    }
  }, [status]);

  return (
    <React.Fragment>
      {status === 'changing' && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            zIndex: 10000,
          }}
        >
          <LinearProgress />
        </div>
      )}

      {children}
    </React.Fragment>
  );
}

const MyApp = props => {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppProvider>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />

        <RouterProvider>
          <Component
            {...pageProps}
            globalSettings={getConfig.globalSettings}
          />
        </RouterProvider>
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
