const {
  firebase,
  getFirestore,
  getAdminFirestore,
} = require('./__connect__');

describe('Testing Firestore security rules - global-settings', () => {
  it("Can read the global settings list", async () => {
    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('global-settings');
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can read a global setting document", async () => {
    const settingId = 'setting_0';

    const dbInstance = getFirestore(null);
    const testQuery = dbInstance.collection('global-settings').doc(settingId);
    await firebase.assertSucceeds(testQuery.get());
  });

  it("Can update a global setting with admin credentials", async () => {
    const settingId = 'setting_0';
    const settingTitle = 'title_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("global-settings").doc(settingId);
    await setupDoc.set({ title: settingTitle, bannerHeader: { type: 'news', size: 'small' } });

    const testDoc = admin.collection('global-settings').doc(settingId);
    await firebase.assertSucceeds(testDoc.update({ bannerHeader: { type: 'news', size: 'medium' } }));
  });

  it("Can't update a global setting without admin credentials", async () => {
    const settingId = 'setting_0';
    const settingTitle = 'title_0';

    const admin = getAdminFirestore();
    const setupDoc = admin.collection("global-settings").doc(settingId);
    await setupDoc.set({ title: settingTitle, bannerHeader: { type: 'news', size: 'small' } });

    const dbInstance = getFirestore(null);
    const testDoc = dbInstance.collection('global-settings').doc(settingId);
    await firebase.assertFails(testDoc.update({ categories: ['other', 'array', 'of', 'categories'] }));
  });
});
