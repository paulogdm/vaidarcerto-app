const path = require('path');
const functions = require('firebase-functions');
const { default: next } = require('next');
const algoliasearch = require('algoliasearch');

// Full-text search API credentials
const algoliaCredentials = functions.config().fulltext_search.algolia;
const fulltextSearch = algoliasearch(algoliaCredentials.appid, algoliaCredentials.object_apikey);

const isDev = process.env.NODE_ENV !== 'production';
const distDir = path.join('src', require('./src/next.config.js').distDir);
const app = next({
  dev: isDev,
  conf: { distDir }
});
const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((req, res) => {
  // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});

// Update the search index every time a customer record is written.
exports.onCustomerCreated = functions.firestore.document('customers/{customerId}')
  .onCreate(async (snap, context) => {
    if (snap.exists) {
      // Get the note document
      const customer = snap.data();
      // Check if it hasn't returned an empty or unapproved record.
      if (customer && customer.status === 'published') {
        // Add an 'objectID' field which Algolia requires
        customer.objectID = context.params.customerId;

        // Removing unecessary data.
        delete customer.placeLink;
        delete customer.inCharge;
        delete customer.email;
        delete customer.phone;
        delete customer.telegram;
        delete customer.idCard;
        delete customer.whatsApp;
        delete customer.status;

        const index = fulltextSearch.initIndex('customers');

        try {
          await index.saveObject(customer);
        } catch (ex) {
          const errMsg = {
            name: ex.name,
            message: ex.message,
          };

          throw new Error(JSON.stringify(errMsg));
        }
      }
    }
  });
