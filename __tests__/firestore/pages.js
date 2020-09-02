const {
  firebase,
  getFirestore,
  getAdminFirestore,
} = require('./__connect__');

describe('Testing Firestore security rules - pages', () => {
  it("Can read the pages list", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('pages');
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can query for a specific page", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('pages').where('slug', '==', '/').limit(1);
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can read a page document", async () => {
    const pageId = 'page_0';

    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('pages').doc(pageId);
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can update a page with admin credentials", async () => {
    const pageId = 'page_0';
    const pageTitle = 'title_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("pages").doc(pageId);
    await setupDoc.set({ title: pageTitle, description: 'bar', slug: '/foo-bar' });

    const testDoc = admin.collection('pages').doc(pageId);
    await firebase.assertSucceeds(testDoc.update({ description: 'bar 2' }));
  });

  it("Can't update a page without admin credentials", async () => {
    const pageId = 'page_0';
    const pageTitle = 'title_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("pages").doc(pageId);
    await setupDoc.set({ title: pageTitle, description: 'bar', slug: '/foo-bar' });

    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('pages').doc(pageId);
    await firebase.assertFails(testDoc.update({ title: 'other title' }));
  });
});
