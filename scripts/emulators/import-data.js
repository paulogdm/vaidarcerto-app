const firebase = require('firebase-admin');

const getFirestore = require('../../src/app/modules/firebase/firestore');

const addPages = require('./add-collections/add-pages');
const addSettings = require('./add-collections/add-settings');
const addCustomer = require('./add-collections/add-customer');
const addCategories = require('./add-collections/add-categories');
const addSegments = require('./add-collections/add-segments');

const databaseInstance = getFirestore(firebase, 'localhost');

const initImport = async (dbInstance) =>  {
  console.log('[CI Emulators] Starting database import..');
  await addPages(dbInstance);
  await addSettings(dbInstance);

  // Adding some customers.
  await addCustomer(dbInstance);
  await addCustomer(dbInstance, { title: '[mock] Empresa de informática', status: 'published' });
  await addCustomer(dbInstance, {
    title: '[mock] Old Home Center',
    category: ['construção'],
    hasWhatsApp: false,
    status: 'published',
  });
  await addCustomer(dbInstance, {
    title: '[mock] Nova & Home Center',
    category: ['construção'],
    status: 'published',
  });

  await addCategories(dbInstance);
  await addSegments(dbInstance);
  console.log('[CI Emulators] Database import was finished.');
}

initImport(databaseInstance);
