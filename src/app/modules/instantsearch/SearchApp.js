import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  InstantSearch,
  Configure,
} from 'react-instantsearch-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import {
  searchClient,
  translations,
} from '../instantsearch';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
  },
}));

const DynamicConnectedSearchBox = dynamic(() => import('./ConnectedSearchBox'));
const DynamicLoadingIndicator = dynamic(() => import('./LoadingIndicator'));
const DynamicConnectedCategoriesList = dynamic(() => import('./ConnectedCategoriesList'));
const DynamicConnectedHits = dynamic(() => import('./ConnectedHits'));
const DynamicConnectedResults = dynamic(() => import('./ConnectedResults'));
const DynamicConnectedWhatsAppFilter = dynamic(() => import('./ConnectedWhatsAppFilter'));
const DynamicConnectedPoweredBy = dynamic(() => import('./ConnectedPoweredBy'));
const DynamicConnectedPagination = dynamic(() => import('./ConnectedPagination'));

const ShowInstantApp = props => {
  const { hasFilters, hitsPerPage, onSearchStateChange, createURL, ...restProps } = props;
  const _t = translations['ptBR']();

  return (
    <InstantSearch
      indexName={'customers'}
      searchClient={searchClient}
      searchState={restProps.searchState}
      resultsState={restProps.resultsState}
      onSearchStateChange={onSearchStateChange}
      onSearchParameters={restProps.onSearchParameters}
      createURL={createURL}
      {...restProps}
    >
      <Configure
        hitsPerPage={hitsPerPage || 12}
      />

      <DynamicConnectedSearchBox
        translations={_t.searchBox}
        refinementCategory={hasFilters && (
          <DynamicConnectedCategoriesList
            attribute='category'
            translations={_t.categoriesFilter}
          />
        )}
        refinementWhatsApp={hasFilters && (
          <DynamicConnectedWhatsAppFilter
            attribute='hasWhatsApp'
            label={'has WhatsApp'}
            value={true} // value to apply when it's checked
            defaultRefinement={false}
            translations={_t.whatsAppFilter}
          />
        )}
      />

      <DynamicConnectedPoweredBy />

      <DynamicConnectedResults
        translations={_t.results}
      >
        <DynamicConnectedHits />
        <DynamicConnectedPagination />
      </DynamicConnectedResults>

      <DynamicLoadingIndicator />
    </InstantSearch>
  );
}

const SearchApp = props => {
  const [showChild, setShowChild] = useState(false);
  const _t = translations['ptBR']();
  const classes = useStyles();

  useEffect(() => {
    setShowChild(true);
  }, []);

  return (
    <Paper
      elevation={3}
      className={classes.paper}
    >
      {!showChild ? (
        <Box width='100%'>
          <Skeleton variant='rect' height={150} />
        </Box>
      ) : (
        <ShowInstantApp {...props} />
      )}
    </Paper>
  );
}

export default SearchApp;
