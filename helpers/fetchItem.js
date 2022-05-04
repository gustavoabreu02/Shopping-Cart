const fetchItem = (itemId) => {
  const fetchId = fetch(`https://api.mercadolibre.com/items/${itemId}`)
  .then((response) => response.json())
  .then((data) => data);
  return fetchId;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
