const freeze = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRequestSerialized = objData => {
  let serialized = '';

  Object.keys(objData).forEach((key, index) => {
    serialized += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(objData[key]);
  });
  return serialized;
}

module.exports = {
  freeze,
  getRequestSerialized,
};
