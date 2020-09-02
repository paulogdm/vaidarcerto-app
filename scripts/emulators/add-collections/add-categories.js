
const addCategories = (dbInstance) => {
  const collectionRef = dbInstance.collection('categories-list');
  const docData = {
    locale: "pt-BR",
    tagsList: [
      "instalações",
      "construção",
      "serviços",
      "clínicas",
      "laboratórios",
      "serviços públicos",
      "bancos",
      "macenaria",
      "informática",
      "engenharia",
      "transportes",
      "taxi",
      "limpeza",
      "floriculturas",
      "padarias",
      "jogos",
      "pizzarias",
      "restaurantes",
      "postos combustível",
      "hotéis",
      "pousadas",
      "telentrega",
      "acessórios",
      "assistência"
    ],
  };

  collectionRef.add(docData)
    .then(docRef => {
      console.log('[CLI Emulators] Categories list was saved with ID.', docRef.id);
    })
    .catch(err => {
      console.error('[CLI Emulators] Error saving Categories list doc: ', err);
    });
}

module.exports = addCategories;
