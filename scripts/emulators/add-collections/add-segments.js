const { segments } = require('../../../mocks/data/segments');

const addSegments = (dbInstance) => {
  const collectionRef = dbInstance.collection('segments');

  Object.values(segments).map(segment => {
    collectionRef.add(segment)
      .then(docRef => {
        console.log('[CLI Emulators] Segments list was saved with ID.', docRef.id);
      })
      .catch(err => {
        console.error('[CLI Emulators] Error saving Segments list doc: ', err);
      });
  })
}

module.exports = addSegments;
