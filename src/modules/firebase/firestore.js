
const getFirestore = (firebaseInstance, runningAt) => {
  const firebaseConfig = require('./_config-object.json');
  const settingsObj = {};

  // Initialize Firebase instance.
  if (!firebaseInstance.apps.length) {
    const firebaseServices = firebaseInstance.initializeApp(firebaseConfig);
    settingsObj.app = firebaseServices;

    if (typeof window !== 'undefined') {
      firebaseServices.analytics();
    }
  }

  const emulatorsStart = () => {
    const db = firebaseInstance.firestore(settingsObj.app);

    db.settings({
      host: 'localhost:8080',
      ssl: false,
    });

    return db;
  }

  if (runningAt === 'localhost') {
    const emulatedFirestore = emulatorsStart();
    settingsObj.firestore = emulatedFirestore;
  } else {
    settingsObj.firestore = firebaseInstance.firestore(settingsObj.app);
  }

  const database = settingsObj.firestore;

  return database;
}

module.exports = getFirestore;
