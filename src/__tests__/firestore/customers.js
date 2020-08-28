const {
  firebase,
  myId,
  theirId,
  myAuth,
  myAdminAuth,
  getFirestore,
  getAdminFirestore,
} = require('./__connect__');

describe('Testing Firestore security rules - customers', () => {
  it("Can query all published customers", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('customers').where('status', '==', 'published');
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can't query all pending customers", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('customers').where('status', '==', 'pending');
    await firebase.assertFails(testQuery.get());
  });

  it("Can read all customers using admin credentials", async () => {
    const admin = getAdminFirestore();
    const testQuery = admin.collection('customers');
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can't read all customers without admin credentials", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('customers');
    await firebase.assertFails(testQuery.get());
  });

  it("Can read single customer with status published", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc_0";
    const setupDoc = admin.collection("customers").doc(postId);
    await setupDoc.set({ foo: 'bar', status: 'published' });

    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('customers').doc(postId);
    await firebase.assertSucceeds(testDoc.get());
  });

  it("Can read a pending customer using admin credentials", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc_0";
    const setupDoc = admin.collection("customers").doc(postId);
    await setupDoc.set({ foo: 'bar', status: 'pending' });

    // Authenticated as an admin user ('admin' instance).
    await firebase.assertSucceeds(setupDoc.get());
  });

  it("Can query for specific customers by slug", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc_0";
    const myFooSlug = 'my-foo-slug';
    const setupDoc = admin.collection("customers").doc(postId);
    await setupDoc.set({
      title: 'foo title',
      slug: myFooSlug,
      status: 'published'
    });

    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('customers')
      .where('slug', '==', myFooSlug)
      .where('status', '==', 'published')
      .limit(1);
    await firebase.assertSucceeds(testQuery.get())
  });

  it("Can registrate a customer ", async () => {
    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('customers');
    await firebase.assertSucceeds(testDoc.add({
      title: 'foo',
      primaryText: 'bar',
      phone: 'xxxx',
      inCharge: 'John Doe',
      idCard: '0123ABC',
    }));
  });

  it("Can't registrate a customer without all required fields", async () => {
    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('customers');
    await firebase.assertFails(testDoc.add({ title: 'foo', foo: 'bar' }));
  });

  // @TODO check this.
  it("Can update single customer with an admin role", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc";
    const setupDoc = admin.collection("customers").doc(postId);
    await setupDoc.set({ foo: 'bar', roleToWrite: 'admin' });

    const dbInstance = getFirestore(myAdminAuth);
    const testDoc = dbInstance.collection('customers').doc(postId);
    await firebase.assertSucceeds(testDoc.update({ foo: 'bar_updated' }));
  });

  // @TODO check this.
  it("Can update single customer without an admin role", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc";
    const setupDoc = admin.collection("customers").doc(postId);
    await setupDoc.set({ foo: 'bar' });

    const dbInstance = getFirestore(myAuth);
    const testDoc = dbInstance.collection('customers').doc(postId);
    await firebase.assertFails(testDoc.update({ foo: 'bar_updated' }));
  });

  it("Can update single customer with its own ID", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc";
    const setupDoc = admin.collection("customers").doc(postId);
    await setupDoc.set({ foo: 'bar', authorId: myId, roleToEdit: 'admin' });

    const dbInstance = getFirestore(myAuth);
    const testDoc = dbInstance.collection('customers').doc(postId);
    await firebase.assertSucceeds(testDoc.update({ foo: 'bar_updated' }));
  });

  it("Can't update single customer with other's ID", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc";
    const setupDoc = admin.collection("customers").doc(postId);
    await setupDoc.set({ foo: 'bar', authorId: theirId });

    const dbInstance = getFirestore(myAuth);
    const testDoc = dbInstance.collection('customers').doc(postId);
    await firebase.assertFails(testDoc.update({ foo: 'bar_updated' }));
  });

  it("Can't update single customer without permission", async () => {
    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('customers').doc('testDoc2');
    await firebase.assertFails(testDoc.update({ foo: 'bar' }));
  });

  it("Can delete a customer using admin credentials", async () => {
    const admin = getAdminFirestore();
    const postId = "testDoc_0";

    // Authenticated as an admin user ('admin' instance).
    const testDoc = admin.collection('customers').doc(postId);
    await firebase.assertSucceeds(testDoc.delete());
  });

  it("Can't delete a customer without admin credentials", async () => {
    const postId = "testDoc_0";
    const dbInstance = getFirestore(myAuth);
    const testDoc = dbInstance.collection('customers').doc(postId);
    await firebase.assertFails(testDoc.delete());
  });
});
