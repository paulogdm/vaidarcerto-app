import { freeze } from '~/modules/utils/request';
import segmentsMock from '~/mocks-data/segments';

export default async () => {
  await freeze(3000);

  const segments = segmentsMock.segments;
  const myMap = new Map();

  Object.keys(segments).map((k, i) => {
    myMap.set(k, segments[i]);
  });

  const sortedMap = [...myMap.entries()]
    .map(e => e[1])
    .sort((a,b) => a.pos - b.pos);

  return sortedMap;
}
