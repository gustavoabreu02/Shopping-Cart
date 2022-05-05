const calculaPreço = () => {
  let a = 0;
  const h2 = document.querySelector('.total-price');
  const li = document.querySelectorAll('.cart__item');
  li.forEach((value) => {
    const preço = value.innerText.split('$')[1];
    const resul = parseFloat(preço);
    a += resul;
    h2.innerText = a;
  });
};

const itemsCart = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  const remove = event.target;
  remove.parentNode.removeChild(remove);
  saveCartItems(itemsCart.innerHTML);
  calculaPreço();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addCarrinhoeLocalStorage = async (id) => {
  const resul = await fetchItem(id);
  const obj = createCartItemElement({
    sku: resul.id,
    name: resul.title,
    salePrice: resul.price,
  });
  itemsCart.appendChild(obj);
  saveCartItems(itemsCart.innerHTML);
  calculaPreço();
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', () => {
  document.querySelector('.cart__items').innerHTML = '';
  });
};

const listaItens = async () => {
  const section = document.querySelector('.items');
  const resul = await fetchProducts('computador');
  resul.forEach((value) => section.appendChild(createProductItemElement({
    sku: value.id,
    name: value.title,
    image: value.thumbnail,
  })));
  const button = document.querySelectorAll('.item__add');
  button.forEach((value) => value.addEventListener('click', () => {
    addCarrinhoeLocalStorage(value.parentNode.firstChild.innerText);
  }));
};

window.onload = () => {
  listaItens();
  itemsCart.innerHTML = getSavedCartItems();
  const li = document.querySelectorAll('.cart__item');
  li.forEach((value) => value.addEventListener('click', cartItemClickListener));
};
