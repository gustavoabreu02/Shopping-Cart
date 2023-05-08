# Projeto ShoppingCart

Este projeto tem como objetivo criar uma página que integra com a API do Mercado Livre e permite que o usuário visualize uma lista de produtos relacionados à busca "computador", adicione os produtos desejados a um carrinho de compras e visualize o valor total do carrinho. Além disso, o projeto implementa testes unitários para garantir a qualidade do código.

## Habilidades utilizadas

- Requisições a uma API do Mercado Livre
- Utilização de JavaScript, CSS e HTML
- Funções assíncronas
- Implementação de testes unitários

## Funcionalidades

### Lista de produtos

Ao carregar a página, o usuário visualiza uma lista de produtos relacionados à busca "computador". Os produtos são obtidos através de uma requisição à API do Mercado Livre, utilizando a função `fetchProducts`. Cada produto é representado como um elemento HTML que contém sua imagem, título e um botão "Adicionar ao carrinho". 

### Adição de produtos ao carrinho

Ao clicar no botão "Adicionar ao carrinho" de um produto, o mesmo é adicionado ao carrinho de compras. O carrinho é implementado como uma lista de itens que é armazenada no LocalStorage do navegador. 

### Remoção de produtos do carrinho

Ao clicar em um item no carrinho de compras, o mesmo é removido da lista de itens do carrinho. A remoção do item é feita através da função `cartItemClickListener`. 

### Cálculo do valor total do carrinho

Ao adicionar ou remover um item do carrinho, o valor total do carrinho é atualizado e exibido na tela. O cálculo é feito pela função `calculaPreço`.

### Esvaziar carrinho

Ao clicar no botão "Esvaziar carrinho", todos os itens são removidos do carrinho. 

## Testes unitários

O projeto implementa testes unitários utilizando a biblioteca Jest. Os testes cobrem as funções `createProductImageElement`, `createCustomElement`, `createProductItemElement`, `getSkuFromProductItem`, `createCartItemElement`, `addCarrinhoeLocalStorage`, `cartItemClickListener`, `calculaPreço`, `carregando`, `removeCarregando` e `listaItens`. Os testes garantem que as funções estão funcionando corretamente e que o código está seguindo as especificações do projeto. 

## Como rodar o projeto

1. Clone o repositório em seu computador: `git clone https://github.com/usuario/nome-do-repositorio.git`
2. Abra o arquivo `index.html` em seu navegador.

## Como rodar os testes

1. Na raiz do projeto, abra o terminal e instale as dependências: `npm install`
2. Execute os testes com o comando: `npm test`

## Autor

Esse projeto foi desenvolvido por @gustavoabreu02.