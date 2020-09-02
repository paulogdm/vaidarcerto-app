import { database, parseQuerySnapshot } from '../../modules/firebase/services';

const getCategories = async () => {
  const customerQuery = database.collection('categories-list');
  const querySnapshot = await customerQuery.get();

  const props = { newObject: {} };

  if (Boolean(querySnapshot.size) && querySnapshot.size > 0) {
    const newObject = await parseQuerySnapshot(querySnapshot);

    props.newObject = newObject[0];
  }

  return props.newObject;
}

export default getCategories;
