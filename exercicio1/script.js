const novoItemLista0 = document.createElement('li');
const novoItemLista5 = document.createElement('li');

const novoConteudo0 = document.createTextNode('Item 0');
const novoConteudo5 = document.createTextNode('Item 5');

novoItemLista0.appendChild(novoConteudo0);
novoItemLista5.appendChild(novoConteudo5);

const localizaElemento = document.getElementById('lista');
localizaElemento.insertAdjacentElement('afterbegin', novoItemLista0);
localizaElemento.insertAdjacentElement('beforeend', novoItemLista5);
