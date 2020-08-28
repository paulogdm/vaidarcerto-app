// fix: `ReferenceError: XMLHttpRequest is not defined`
global.WebSocket = require('ws');
global.XMLHttpRequest = require('xhr2');

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";

import getFirestore from './firestore';

const database = getFirestore(firebase, process.env.runningAt);
const storage = firebase.storage();
const storageRef = storage.ref();
const getServerTimestamp = () => (firebase.firestore.Timestamp.now()).seconds * 1000;

const getStorageMedia = (folder, filename) => {
  const assetsRef = storageRef.child(`${folder}/${filename}`);

  return assetsRef.getDownloadURL();
}

const parseQuerySnapshot = querySnapshot => {
  const newObject = [];
  querySnapshot.forEach(doc => {
    const id = doc.id;
    const data = doc.data();

    newObject.push({ id, ...data });
  });

  return newObject;
}

export {
  database,
  storageRef,
  getServerTimestamp,
  getStorageMedia,
  parseQuerySnapshot,
}

export default firebase;
