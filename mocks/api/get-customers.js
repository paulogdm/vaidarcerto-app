import { itHasValue } from '~/modules/utils/objects';

import { customersData } from '~/mocks-data/customers';

const mockGetCustomers = async (query = {}) => {
  const props = { list: [] };

  props.list = customersData.filter(item =>
    item.status === 'published'
  );

  if (itHasValue(query.category)) {
    props.list = props.list.filter(item =>
      item.category && item.category.includes(query.category)
    );
  }

  return props.list;
}

export default mockGetCustomers;
