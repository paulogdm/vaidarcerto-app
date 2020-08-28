const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('../../src/app/modules/firebase/serviceAccount.json');

const firebaseServices = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});
const databaseInstance = firebaseServices.firestore();

const addData = (collectionName, docData = {}) => {
  const collectionRef = databaseInstance.collection(collectionName);

  collectionRef.add(docData)
    .then(docRef => {
      console.log(`[CLI scripts] ${collectionName} data was saved with ID.`, docRef.id);
    })
    .catch(err => {
      console.error(`[CLI scripts] Error saving ${collectionName} doc: `, err);
    });
}

module.exports = {
  addData,
};
