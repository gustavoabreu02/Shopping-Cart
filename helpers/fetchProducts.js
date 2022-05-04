const fetchProducts = async (busca) => {
  const fetchBusca = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`);
  const responseAwait = await fetchBusca.json();
  const dataAwait = await responseAwait.results;
  const resposta = await dataAwait;
  const array = resposta.map((value) => {
    const obj = {
      sku: value.price,
      name: value.title,
      image: value.thumbnail,
    };
    return obj;
  });
  return array;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
