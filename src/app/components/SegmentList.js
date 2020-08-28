import React, { useEffect, useState } from 'react';

import {
  Paper,
  Box,
  Typography,
  Chip,
} from '@material-ui/core';

import NextLink from './Link';
import VerticalTabs from './VerticalTabs';

import { mockArrayData } from '~/modules/utils/objects';
import { capitalize } from '~/modules/utils/strings';
import fetchSegments from '~/services/api/get-segments';

const SegmentLocalInfo = ({ title, values }) => (
  <Box
    display='flex'
    flexDirection='row'
    flexWrap='wrap'
    alignItems='center'
    justifyContent='flex-start'
  >
    <Typography
      variant='subtitle2'
    >
      {title}{': '}
    </Typography>

    <Typography
      variant='subtitle2'
      style={{ margin: 5 }}
    >
      {typeof values === 'object'
        ? values.join(' — ')
        : values
      }
    </Typography>
  </Box>
);

const TabPanelContent = ({ localInfo, primaryText, categories }) => (
  <Box
    display='flex'
    flexWrap='wrap'
    alignItems='center'
    justifyContent='flex-start'
  >
    <Typography
      variant='overline'
    >
      {primaryText}
    </Typography>

    <Box
      flexDirection='column'
      width={'100%'}
    >
      {localInfo !== undefined && Object.values(localInfo).map((item, k) => (
        <React.Fragment key={k}>
          <SegmentLocalInfo
            {...item}
          />
        </React.Fragment>
      ))}
    </Box>

    {Object.values(categories).map((item, k) => (
      <React.Fragment key={k}>
        <Typography
          variant='subtitle1'
          style={{
            padding: 2,
          }}
        >
          <NextLink
            href={`/tag/[slug]`}
            as={`/tag/${item}`}
          >
            <Chip
              variant='outlined'
              color='primary'
              size='small'
              clickable
              label={capitalize(item.replace('-', ' '))}
            />
          </NextLink>
        </Typography>
      </React.Fragment>
    ))}
  </Box>
);

const SegmentList = props => {
  const [segments, setSegments] = useState({
    data: [],
    status: 'fetching',
    error: null,
  });

  const handleSegments = newState => {
    setSegments(prevState => ({
      ...prevState,
      ...newState,
    }));
  }

  useEffect(() => {
    const segmentsRef = fetchSegments()
      .then(data => handleSegments({ data }))
      .catch(err => {
        const errorMsg = 'Error getting documents for segments.';
        handleSegments({ error: errorMsg });
        // @TODO send `err` to sentry.io
        console.error(errorMsg, err);
      })
      .finally(() => handleSegments({ status: 'finished' }));

    return () => segmentsRef;
  }, []);

  return (
    <Paper
      elevation={3}
      style={{
        marginBottom: 10,
        width: '100%',
      }}
    >
      <VerticalTabs
        height={300}
        dataProps={
          segments.status === 'fetching' ? mockArrayData(6) : segments.data
        }
        TabPanelProps={{
          component: TabPanelContent,
        }}
      />
    </Paper>
  );
}

export default SegmentList;
