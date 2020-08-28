const firestoreService = require('firestore-export-import');
const fs = require('fs');

const _firebasePath = '../src/app/modules/firebase';
const firebaseConfig = require(_firebasePath + '/_config-object.json');
const serviceAccount = require(_firebasePath + '/serviceAccount.json');

// JSON to Firestore
const firestoreToJson = async () => {
  try {
    console.log('[CI scripts]: Initializing Firestore database..');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('[CI scripts]: Firestore initialized.');

    const restoreFile = './scripts/data-clean/firestore/default.json';
    const backedUp = await firestoreService.backups([
      'customers',
      'global-settings',
      'pages',
      'categories-list',
      'segments',
    ]);
    fs.writeFile(restoreFile, JSON.stringify(backedUp), (err) => {
      if (err) throw err;
      console.log('CI scripts] Data was backed up: ', backedUp);
    });
  } catch (err) {
    console.error('[CI scripts] Error to export data: ', err);
  }
}

firestoreToJson();
