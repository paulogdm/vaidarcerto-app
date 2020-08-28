import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import fetchGlobals from '~/services/api/global-settings';
import fetchPost from '~/services/api/get-post';

import {
  searchClient,
  findResultsState,
  createURL,
  pathToSearchState,
  searchStateToURL,
} from '~/modules/instantsearch';
import { itHasLength } from '~/modules/utils/objects';

import Layout from '~/components/Layout';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const debounceTime = 700;

const DynamicSearchApp = dynamic(() =>
  import('~/modules/instantsearch/SearchApp')
);

const Search = props => {
  const { page, seoProps, ...restProps } = props;
  const router = useRouter();
  const setStateId = React.useRef();
  const [searchState, setSearchState] = useState(
    pathToSearchState(router.asPath)
  );

  const onSearchStateChange = nextSearchState => {
    clearTimeout(setStateId);

    setStateId.current = setTimeout(() => {
      const href = searchStateToURL(router, nextSearchState);

      router.push(href, href, {
        shallow: true,
      });

      setSearchState(nextSearchState);
    }, debounceTime);
  }

  return (
    <Layout
      {...restProps}
      routerProps={router}
      seoProps={seoProps}
    >
      <Header router={router} {...props} />

      <DynamicSearchApp
        hasFilters={true}
        searchState={searchState}
        resultsState={restProps.resultsState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      />

      <Footer router={router} {...props} />
    </Layout>
  );
}

export const getServerSideProps = async ({ req, res, query, ...restProps }) => {
  const searchState = pathToSearchState(req.url);
  const stateFounded = await findResultsState(DynamicSearchApp, {
    searchClient,
    indexName: 'customers',
    searchState,
  });
  const resultsState = JSON.parse(JSON.stringify(stateFounded));

  const globalsResponse = await fetchGlobals();

  const dataProps = {
    isNotFound: false,
  };
  const slugQuery = '/search';
  const queryOptions = {
    label: 'slug',
    value: slugQuery,
  };
  const page = await fetchPost(queryOptions);
  if (!itHasLength(page)) {
    dataProps.isNotFound = true;
  } else {
    // @TODO build the SEO based in the informed URL params.
    /// -----
    const seoProps = {
      title: page.title,
      description: page.description,
    };

    dataProps.seoProps = seoProps;
  }

  return {
    props: {
      ...globalsResponse,
      ...dataProps,
      page,
      resultsState,
      searchState,
    },
  };
}

export default Search;
