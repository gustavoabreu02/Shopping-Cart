const fetchProducts = async (busca) => {
  try {
  const fetchBusca = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`);
  const responseAwait = await fetchBusca.json();
  const dataAwait = await responseAwait.results;
  return dataAwait;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
