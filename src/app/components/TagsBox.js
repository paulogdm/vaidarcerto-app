import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Chip,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { itHasLength } from '~/modules/utils/objects';

import NextLink from './Link';

const useStyles = makeStyles(theme => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  chipItem: {
    borderRadius: 5,
  },
}));

const TagsBox = props => {
  const { dataObj, route } = props;
  const classes = useStyles();

  return (
    <Box>
      {!itHasLength(dataObj) ? (
        <React.Fragment>
          <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation='wave' width='80%' height={20} />
        </React.Fragment>
      ) : (
        <Box className={classes.chips}>
          {itHasLength(dataObj.category) && Object.values(dataObj.category).map((categ, kC) => (
            <React.Fragment key={kC}>
              <Chip
                variant='outlined'
                color='primary'
                size="small"
                classes={{
                  root: classes.chipItem,
                }}
                clickable
                component={NextLink}
                href={route.pathname}
                as={route.href.replace('{param}', categ)}
                label={categ}
              />
            </React.Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default TagsBox;
