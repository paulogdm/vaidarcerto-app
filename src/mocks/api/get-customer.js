import { freeze } from '~/modules/utils/request';

import { itHasLength } from '~/modules/utils/objects';
import { customersData } from '~/mocks-data/customers';

const getCustomer = async (query) => {
  await freeze(2000);

  const props = { item: {} };

  const customerQuery = await customersData.find(item =>
    item[query.label] === query.value);

  if (itHasLength(customerQuery)) {
    props.item = customerQuery;
  }

  return props.item;
}

export default getCustomer;
