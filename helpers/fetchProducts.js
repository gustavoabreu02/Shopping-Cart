const fetchProducts = async (busca) => {
  const fetchBusca = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`);
  const responseAwait = await fetchBusca.json();
  const dataAwait = await responseAwait.results;
  return dataAwait;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
