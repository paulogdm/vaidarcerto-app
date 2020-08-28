import { database, parseQuerySnapshot } from '~/modules/firebase/services';
import { itHasValue } from '~/modules/utils/objects';

const composeQuery = (query = {}) => {
  const customersRef = database.collection('customers');

  // fetch ONLY published records.
  const customersQuery = customersRef.where('status', '==', 'published');
  const props = { customersQuery };

  if (itHasValue(query.category)) {
    props.customersQuery = customersQuery
      .where('category', 'array-contains', query.category);
  }

  const orderedQuery = props.customersQuery.orderBy('title');

  return orderedQuery;
}

const getCustomers = async (query) => {
  const props = { customers: [] };

  const customersQuery = composeQuery(query);
  const querySnapshot = await customersQuery.get();
  if (Boolean(querySnapshot.size) && querySnapshot.size > 0) {
    const customersArray = await parseQuerySnapshot(querySnapshot);

    props.customers = customersArray;
  }

  return props.customers;
}

export default getCustomers;
