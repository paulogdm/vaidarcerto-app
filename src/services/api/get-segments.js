import { database, parseQuerySnapshot } from '~/modules/firebase/services';

const composeQuery = () => {
  const segmentsRef = database.collection('segments');

  return segmentsRef;
}

const getSegments = async () => {
  const props = { segments: [] };

  const segmentsQuery = composeQuery();
  const querySnapshot = await segmentsQuery
    .orderBy('pos')
    .get();
  if (Boolean(querySnapshot.size) && querySnapshot.size > 0) {
    const segmentsArray = await parseQuerySnapshot(querySnapshot);

    props.segments = segmentsArray;
  }

  return props.segments;
}

export default getSegments;
