const { addData } = require('./admin-connection');
const { slugify, createUUID } = require('../../src/app/modules/utils/strings');

const { globalSettings } = require('../../src/mocks/data/global-settings');
const { categoriesList } = require('../../src/mocks/data/categories-list');
const { customersData } = require('../../src/mocks/data/customers');
const { pagesData } = require('../../src/mocks/data/pages-data');
const { segments } = require('../../src/mocks/data/segments');

const startImporting = async () => {
  console.log('[CLI scripts] Start importing Firestore database...');

  Object.keys(globalSettings).map(async (k, i) => {
    const docData = globalSettings[k];
    await addData('global-settings', docData);
  });

  Object.keys(categoriesList).map(async (k, i) => {
    const docData = categoriesList[k];
    await addData('categories-list', docData);
  });

  Object.keys(customersData).map(async (k, i) => {
    const docData = customersData[k];
    docData.slug = slugify(docData.title) + '-' + createUUID();
    await addData('customers', docData);
  });

  Object.keys(pagesData).map(async (k, i) => {
    await addData('pages', pagesData[k]);
  });

  Object.keys(segments).map(async (k, i) => {
    await addData('segments', segments[k]);
  });

  console.log('[CLI scripts] Finished scripts.');
};

startImporting();
