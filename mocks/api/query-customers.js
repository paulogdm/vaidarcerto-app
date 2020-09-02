import { itHasLength, isSearchFullfiled } from '../../../modules/utils/objects';
import { freeze } from '../../../modules/utils/request';
import customersList from '../../../../mocks/items-data';

const filterByTitle = (key, value) =>
  key.toLowerCase().indexOf(value.toLowerCase()) !== -1;

const filterByCategory = (_keys, values) =>
  Object.values(values.split(','))
    .some(el => Object.values(_keys).includes(el));

const filterByWhatsApp = (value) =>
  (typeof value !== undefined) || value !== null;

const handleFilter = async (query) => {
  const publishedItems = await customersList.filter(item =>
    item.status && item.status === 'published'
  );

  const newArr = await publishedItems.filter(el => {
    if (query.title !== undefined && typeof query.title === 'string' && query.title.length > 0) {
      return (el.address !== undefined
        ? filterByTitle(el.address, query.title)
        : filterByTitle(el.title, query.title)
      );
    }

    if (query.categories !== undefined && typeof query.categories === 'string') {
      return filterByCategory(el.category, query.categories);
    }

    if (query.hasWhatsApp !== undefined && query.hasWhatsApp === 'true') {
      return filterByWhatsApp(el.whatsApp);
    }
  });

  // Remove "status" property from the results.
  newArr.map(item => delete item.status);

  return newArr;
}

const queryCustomer = async (req, res) => {
  const { query } = req;
  const props = { items: { hits: [], nbHits: 0 } };

  await freeze(2000);

  if (!isSearchFullfiled(query)) {
    return res.json(props);
  }

  // Used for the search page based on filters.
  const customerQuery = await handleFilter(query);
  if (itHasLength(customerQuery)) {
    props.items = {
      hits: customerQuery,
      nbHits: Object.keys(customerQuery).length,
    };
  }

  res.status(200).json(props.items);
}

export default queryCustomer;
