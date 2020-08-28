import { cleanDigits } from '../../../modules/utils/strings';
import { database, getServerTimestamp } from '../../../modules/firebase/services';

const create = async (postBody) => {
  if (typeof postBody === "object" && postBody['title']) {
    const collectionRef = database.collection('customers');

    const hasWhatsApp = Boolean(!(['', null, undefined, 'undefined'].includes(postBody.whatsApp)));
    const whatsApp = hasWhatsApp ? cleanDigits(postBody.whatsApp) : null;

    postBody.hasWhatsApp = hasWhatsApp;
    postBody.whatsApp = whatsApp;
    postBody.status = 'pending';

    const postData = {
      ...postBody,
      updatedAt: getServerTimestamp(),
    };

    return collectionRef.add(postData)
      .then((docRef) => {
        const id = docRef.id;
        const message = 'Doc successfully created!';
        console.log(message, id);
        return { message };
      })
      .catch(err => {
        const error = {};

        error.message = 'Error creating the Ad.';
        console.error(error, err);

        if (err.code && err.code === 'permission-denied') {
          error.message = 'Database create permission denied!';
          return { error };
        }

        return { error };
      });
  }

  return { notObject: true };
}

export default create;
