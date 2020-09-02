import algoliasearchLite from 'algoliasearch/lite';

import getConfig from '../../config';

const fullTextSearch = getConfig.fullTextSearch.algolia;

// `notes`, `users`, `customers`, etc.
const indexName = fullTextSearch.indexName;
const searchKey = fullTextSearch.searchKey;

const searchClient = algoliasearchLite(
  fullTextSearch.appId,
  fullTextSearch.searchApiKey
);

// Detecting if query is empty (""), then mock an empty response.
const searchClientSearch = searchClient.search;
searchClient.search = function search(requests) {
  if (requests.every(({ params }) => !params.query)) {
    return Promise.resolve({
      results: requests.map(() => ({
        hits: [],
        nbHits: 0,
        nbPages: 0,
        processingtimeMS: 0,
      })),
    });
  }

  return searchClientSearch(requests);
}

export {
  indexName,
  searchKey,
  searchClient,
};

export default searchClient;
