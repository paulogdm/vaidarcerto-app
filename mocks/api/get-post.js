import { freeze } from '~/modules/utils/request';
import { pagesData } from '~/mocks-data/pages-data';

const getPost = async (query) => {
  await freeze(2000);

  const newObject = Object.values(pagesData);
  const customerQuery = await newObject.find(item =>
    item[query.label] === query.value);

  return customerQuery;
}

export default getPost;
