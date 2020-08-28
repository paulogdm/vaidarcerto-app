import { database, parseQuerySnapshot } from '~/modules/firebase/services';
import { itHasLength } from '~/modules/utils/objects';

export default async (query) => {
  const customerQuery = database.collection('customers')
    .where(query.label, '==', query.value)
    .where('status', '==', 'published')
    .limit(1);

  const querySnapshot = await customerQuery.get();

  const props = { customerItem: {} };

  if (Boolean(querySnapshot.size) && querySnapshot.size > 0) {
    const newObject = await parseQuerySnapshot(querySnapshot);
    if (itHasLength(newObject)) {
      const item = newObject[0];

      props.customerItem = item;
    }
  }

  return props.customerItem;
}
