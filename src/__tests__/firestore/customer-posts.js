const {
  firebase,
  myId,
  theirId,
  myAuth,
  getFirestore,
  getAdminFirestore,
} = require('./__connect__');

describe('Testing Firestore security rules - customer-posts', () => {
  it("Can read posts from a single customer marked as public", async () => {
    const dbInstance = getFirestore(null);
    const testCustomer = 'customer_0';
    const testCollection = dbInstance.collection('customers').doc(testCustomer);
    const testQuery = testCollection.collection('posts').where("visibility", "==", "public");
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can delete your own customer's post", async () => {
    const customerId = 'custom_0';
    const postId = "testDoc_0";

    const admin = getAdminFirestore();
    const setupCustomer = admin.collection("customers").doc(customerId);
    const setupDoc = setupCustomer.collection("posts").doc(postId);
    await setupDoc.set({ foo: 'bar', authorId: myId });

    const dbInstance = getFirestore(myAuth);
    const testCustomer = dbInstance.collection('customers').doc(customerId);
    const testDoc = testCustomer.collection('posts').doc(postId);
    await firebase.assertSucceeds(testDoc.delete());
  });

  it("Can't delete others customer's post", async () => {
    const customerId = 'custom_0';
    const postId = "testDoc_0";

    const admin = getAdminFirestore();
    const setupCustomer = admin.collection("customers").doc(customerId);
    const setupDoc = setupCustomer.collection("posts").doc(postId);
    await setupDoc.set({ foo: 'bar', authorId: theirId });

    const dbInstance = getFirestore(myAuth);
    const testCustomer = dbInstance.collection('customers').doc(customerId);
    const testDoc = testCustomer.collection('posts').doc(postId);
    await firebase.assertFails(testDoc.delete());
  });

  it("Can delete customer's post with admin credentials", async () => {
    const adminInstance = getAdminFirestore();
    const postId = "testDoc_0";

    // Authenticated as an admin user ('admin' instance).
    const testDoc = adminInstance.collection('customers').doc(postId);
    await firebase.assertSucceeds(testDoc.delete());
  });

  it("Can query personal posts for a single customer", async () => {
    const dbInstance = getFirestore(myAuth);
    const testCustomer = 'customer_0';
    const testCollection = dbInstance.collection('customers').doc(testCustomer);
    const testQuery = testCollection.collection('posts').where("authorId", "==", myId);
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can't query all posts", async () => {
    const dbInstance = getFirestore(myAuth);
    const testCustomer = 'customer_0';
    const testCollection = dbInstance.collection('customers').doc(testCustomer);
    const testQuery = testCollection.collection('posts');
    await firebase.assertFails(testQuery.get());
  });

  it("Can read a single public post from a customer", async () => {
    const admin = getAdminFirestore();
    const customerId = 'customer_0';
    const postId = "public_post";

    const setupCustomer = admin.collection('customers').doc(customerId);
    const setupDoc = setupCustomer.collection("posts").doc(postId);
    await setupDoc.set({ authorId: theirId, visibility: "public" });

    const dbInstance = getFirestore(null);
    const testCollection = dbInstance.collection('customers').doc(customerId);
    const testRead = testCollection.collection('posts').doc(postId);
    await firebase.assertSucceeds(testRead.get());
  });

  it("Can read a private post belonging to the user", async () => {
    const admin = getAdminFirestore();
    const customerId = 'customer_0';
    const postId = "private_post";

    const setupCustomer = admin.collection('customers').doc(customerId);
    const setupDoc = setupCustomer.collection("posts").doc(postId);
    await setupDoc.set({ authorId: myId, visibility: "private" });

    const dbInstance = getFirestore(myAuth);
    const testCollection = dbInstance.collection('customers').doc(customerId);
    const testRead = testCollection.collection('posts').doc(postId);
    await firebase.assertSucceeds(testRead.get());
  });

  it("Can't read a private post belonging to another user", async () => {
    const admin = getAdminFirestore();
    const postId = "private_post_other";
    const setupDoc = admin.collection("posts").doc(postId);
    await setupDoc.set({ authorId: theirId, visibility: "private" });

    const dbInstance = getFirestore(myAuth);
    const testRead = dbInstance.collection('posts').doc(postId);
    await firebase.assertFails(testRead.get());
  });
});
