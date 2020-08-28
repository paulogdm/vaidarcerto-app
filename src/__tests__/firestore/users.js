const {
  firebase,
  myId,
  theirId,
  myAuth,
  getFirestore,
} = require('./__connect__');

describe('Testing Firestore security rules - users', () => {
  it("Can write to a user document with the same ID as our user", async () => {
    const dbInstance = getFirestore(myAuth);
    const testDoc = dbInstance.collection('users').doc(myId);
    await firebase.assertSucceeds(testDoc.set({ foo: 'bar' }));
  });

  it("Can't write to a user document with a different ID as our user", async () => {
    const dbInstance = getFirestore(myAuth);
    const testDoc = dbInstance.collection('users').doc(theirId);
    await firebase.assertFails(testDoc.set({ foo: 'bar' }));
  });
});
