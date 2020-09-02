const {
  firebase,
  getFirestore,
  getAdminFirestore,
} = require('./__connect__');

describe('Testing Firestore security rules - categories-list', () => {
  it("Can read the categories list", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('categories-list');
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can read a single category", async () => {
    const categoryId = 'category_0';

    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('categories-list').doc(categoryId);
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can update a category document with admin credentials", async () => {
    const categoryId = 'category_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("categories-list").doc(categoryId);
    await setupDoc.set({ tagsList: ['an', 'array', 'of', 'categories'] });

    const testDoc = admin.collection('categories-list').doc(categoryId);
    await firebase.assertSucceeds(testDoc.update({ tagsList: ['other', 'array', 'of', 'categories'] }));
  });

  it("Can't update a category document without admin credentials", async () => {
    const categoryId = 'category_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("categories-list").doc(categoryId);
    await setupDoc.set({ tagsList: ['an', 'array', 'of', 'categories'] });

    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('categories-list').doc(categoryId);
    await firebase.assertFails(testDoc.update({ tagsList: ['other', 'array', 'of', 'categories'] }));
  });
});
