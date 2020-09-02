import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Box,
  Typography,
} from '@material-ui/core';

import NextLink from './Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));

const SmallBanner = props => {
  const { title, caption, url, type, pageSlug, linkLabel } = props;
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <Box
        className={classes.root}
        my={1}
        p={1}
      >
        <img
          src={url}
          title={caption}
          style={{
            height: 80,
          }}
        />

        <Box ml={1}>
          <Typography
            variant='subtitle1'
          >
            {title}
          </Typography>

          {type === 'news' && (
            <NextLink
              href={pageSlug}
              variant='subtitle2'
            >
              &raquo; {linkLabel}
            </NextLink>
          )}
        </Box>
      </Box>
    </Paper>
  );
}

export default SmallBanner;
