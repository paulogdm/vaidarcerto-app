const { slugify, createUUID } = require('../../../src/modules/utils/strings');

const addCustomer = (dbInstance, peaceOfObject = {}) => {
  const collectionRef = dbInstance.collection('customers');
  const docData = {
    "primaryText": "Frase bonita com tema do meu negócio",
    "email": "xxx@gmail.com",
    "title": "[mock] Minha primeira empresa",
    "updatedAt": new Date().getTime(),
    "address": "Av. Principal, xxxx, Centro, Minas Gerais",
    "secondaryText": "Nesta linha informe sua descrição comercial, produto ou serviço que está oferecendo.\n\nNesta seguinte linha adicione uma mensagem informando o seu diferencial dos outros que oferecem o mesmo.",
    "phone": "xxxxxxxxxx",
    "category": ["serviços", "informática"],
    "placeLink": " https://goo.gl/maps/xxxxx_link_curto",
    "inCharge": "John Doe",
    "telegram": "xxxxxxxxx",
    "status": "pending",
    "hasWhatsApp": true,
    "idCard": "xxxxxxxxxxx",
    ...peaceOfObject,
  }

  docData.slug = slugify(docData.title) + '-' + createUUID();

  collectionRef.add(docData)
    .then(docRef => {
      console.log('[CLI Emulators] Customer data was saved with ID.', docRef.id);
    })
    .catch(err => {
      console.error('[CLI Emulators] Error saving customer doc: ', err);
    });
}

module.exports = addCustomer;
