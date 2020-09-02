import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';

import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const LoadingIndicator = ({ isSearchStalled }) => (
  isSearchStalled ? (
    <Box width='100%'>
        <Box>
          <Skeleton />
          <Skeleton animation={false} />
          <Skeleton animation='wave' />
        </Box>
    </Box>
  ) : null
);

const ConnectedLoading = connectStateResults(LoadingIndicator);

export default ConnectedLoading;
