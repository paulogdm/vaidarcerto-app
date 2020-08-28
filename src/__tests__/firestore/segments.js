const {
  firebase,
  getFirestore,
  getAdminFirestore,
} = require('./__connect__');

describe('Testing Firestore security rules - segments', () => {
  it("Can read the segments list", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('segments');
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can read a single segment", async () => {
    const testDoc = 'segment_0';

    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('segments').doc(testDoc);
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can update a segment document with admin credentials", async () => {
    const segmentId = 'segment_0';
    const segmentTitle = 'title_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("segments").doc(segmentId);
    await setupDoc.set({ title: segmentTitle, categories: ['an', 'array', 'of', 'categories'] });

    const testDoc = admin.collection('segments').doc(segmentId);
    await firebase.assertSucceeds(testDoc.update({ categories: ['other', 'array', 'of', 'categories'] }));
  });

  it("Can't update a segment document without admin credentials", async () => {
    const segmentId = 'segment_0';
    const segmentTitle = 'title_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("segments").doc(segmentId);
    await setupDoc.set({ title: segmentTitle, categories: ['an', 'array', 'of', 'categories'] });

    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('segments').doc(segmentId);
    await firebase.assertFails(testDoc.update({ categories: ['other', 'array', 'of', 'categories'] }));
  });
});
