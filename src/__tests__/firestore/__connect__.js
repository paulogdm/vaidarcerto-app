const firebase = require('@firebase/testing');

const MY_PROJECT_ID = 'my-test-project-id';

const myId = 'user_abc';
const adminId = 'admin_abc';
const theirId = 'user_xyz';
const myAuth = { uid: myId, email: 'abc@gmail.com' };
const myAdminAuth = { uid: adminId, email: 'adm@gmail.com', role: 'admin' };

const getFirestore = auth =>
  firebase.initializeTestApp({
    projectId: MY_PROJECT_ID,
    auth,
  }).firestore();

const getAdminFirestore = () =>
  firebase.initializeAdminApp({
    projectId: MY_PROJECT_ID,
  }).firestore();

beforeEach(async () => {
  await firebase.clearFirestoreData({
    projectId: MY_PROJECT_ID,
  });
});

module.exports = {
  firebase,
  myId,
  theirId,
  adminId,
  myAuth,
  myAdminAuth,
  getFirestore,
  getAdminFirestore,
}
