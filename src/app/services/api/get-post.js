import { database, parseQuerySnapshot } from '~/modules/firebase/services';

const getPost = async (query) => {
  const customerQuery = database.collection('pages')
    .where(query.label, '==', query.value)
    .limit(1);

  const querySnapshot = await customerQuery.get();

  const props = { postItem: {} };

  if (Boolean(querySnapshot.size) && querySnapshot.size > 0) {
    const newObject = await parseQuerySnapshot(querySnapshot);
    const item = newObject[0];

    props.postItem = item;
  }

  return props.postItem;
}

export default getPost;
