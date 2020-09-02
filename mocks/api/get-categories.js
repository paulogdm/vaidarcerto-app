import { freeze } from '~/modules/utils/request';

import { categoriesList } from '~/mocks-data/categories-list';

const getCategories = async () => {
  await freeze(2000);

  const newObject = Object.values(categoriesList);
  return newObject[0];
}

export default getCategories;
