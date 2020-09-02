import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';

import { Box, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const CustomResults = ({
  allSearchResults = null,
  searchState,
  searchResults = null,
  children,
  isSearchStalled,
  error,
  translations = {}
}) => {
  const _queryLabel = 'Searching for query:';
  const _noResultsLabel = 'No records have been found.';
  const _legendLabel = 'Records found for this query:';
  const _errorMessage = 'An error has occurred while you were searching. Try it again later';

  if (error) {
    const errorMsg = _errorMessage;
    // @TODO send `error` to sentry.io
    console.log(errorMsg);
  }

  return (
    <Box display='flex' flexDirection='column'>
      {searchState && searchState.query && (
        <Box display='flex' flexDirection='column'>
          <Typography variant='overline'>
            {translations.query || _queryLabel} <strong>{searchState.query}</strong>
          </Typography>

          {(searchResults !== null && searchResults.nbHits > 0) && children}

          {(searchResults !== null && searchResults.nbHits < 1 && !isSearchStalled) && (
            <Typography
              variant='subtitle1'
              gutterBottom
            >
              {translations.noResults || _noResultsLabel}
            </Typography>
          )}
        </Box>
      )}

      {(allSearchResults !== null && allSearchResults.nbHits > 0) && (
        <Typography
          variant='subtitle2'
          style={{ marginTop: 10 }}
          gutterBottom
        >
          {translations.legend || _legendLabel} {allSearchResults.nbHits}
        </Typography>
      )}

      {error && (
        <Alert severity='error'>
          {translations.errorMessage || _errorMessage}
        </Alert>
      )}
    </Box>
  );
}

const ConnectedResults = connectStateResults(CustomResults);

export default ConnectedResults;
