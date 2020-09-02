import React from 'react';
import { connectPagination } from 'react-instantsearch-dom';

import Pagination from '@material-ui/lab/Pagination';

const CustomPagination = ({ currentRefinement, nbPages, refine }) => (
  <Pagination
    count={nbPages}
    variant='outlined'
    shape='rounded'
    size='small'
    page={currentRefinement}
    disabled={nbPages <= 1}
    onChange={(event, value) => refine(value)}
  />
);

const ConnectedPagination = connectPagination(CustomPagination);

export default ConnectedPagination;
