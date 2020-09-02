const { parsed: localEnv } = require('dotenv').config();
const fs = require('fs');

const useEnvs = process.env.NODE_ENV === "development" ? localEnv : process.env;

// Generate this file with ENVs variables to build it with CI/CD
const _firebasePath = './src/modules/firebase/_config-object.json';
const _firebaseConfig = `{
  "apiKey": "${useEnvs.REACT_APP_FIREBASE_API_KEY}",
  "authDomain": "${useEnvs.REACT_APP_FIREBASE_AUTH_DOMAIN}",
  "databaseURL": "${useEnvs.REACT_APP_FIREBASE_DATABASE_URL}",
  "projectId": "${useEnvs.REACT_APP_FIREBASE_PROJECT_ID}",
  "storageBucket": "${useEnvs.REACT_APP_FIREBASE_STORAGE_BUCKET}",
  "messagingSenderId": "${useEnvs.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}",
  "appId": "${useEnvs.REACT_APP_FIREBASE_APP_ID}",
  "measurementId": "${useEnvs.REACT_APP_FIREBASE_MEASUREMENT_ID}"
}`;
fs.writeFile(_firebasePath, _firebaseConfig, (err) => {
  if (err) throw err;
  console.log('[CI scripts] Firebase config file had been generated.');
});
