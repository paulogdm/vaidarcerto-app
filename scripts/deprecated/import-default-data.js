const firestoreService = require('firestore-export-import');

const _firebasePath = '../src/app/modules/firebase';
const firebaseConfig = require(_firebasePath + '/_config-object.json');
const serviceAccount = require(_firebasePath + '/serviceAccount.json');

// JSON to Firestore
const jsonToFirestore = async () => {
  try {
    console.log('[CI scripts]: Initializing Firestore database..');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('[CI scripts]: Firestore initialized.');

    const restoreFile = './scripts/data-clean/firestore/default.json';
    await firestoreService.restore(restoreFile);
    console.log('[CI scripts]: Data upload was successfully.');
  } catch (err) {
    console.error('[CI scripts] Error to upload data: ', err);
  }
}

jsonToFirestore();
