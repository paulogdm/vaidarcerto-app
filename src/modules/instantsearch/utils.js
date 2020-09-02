const qs = require('qs');

const createURL = state => `?${qs.stringify(state)}`;

const pathToSearchState = path =>
  path.includes('?') ? qs.parse(path.substring(path.indexOf('?') + 1)) : {};

const searchStateToURL = (location, searchState) =>
  searchState ? `${location.pathname}?${qs.stringify(searchState)}` : '';

module.exports = {
  createURL,
  pathToSearchState,
  searchStateToURL,
};
