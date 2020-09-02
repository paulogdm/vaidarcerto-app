const { globalSettings } = require('../../../mocks/data/global-settings');

const addSettings = (dbInstance) => {
  const collectionRef = dbInstance.collection('globalSettings');

  globalSettings.map(docData => {
    collectionRef.add(docData)
      .then(docRef => {
        console.log('[CLI Emulators] Settings was saved with ID.', docRef.id);
      })
      .catch(err => {
        console.error('[CLI Emulators] Error saving settings doc: ', err);
      });
  });
}

module.exports = addSettings;
