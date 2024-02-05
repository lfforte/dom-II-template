const addItem = () => {
  const novoItemLista = document.createElement('li');

  let novo = document.getElementById('novoItem').value;
  console.log(novo);
  const novoConteudo = document.createTextNode(novo);

  novoItemLista.appendChild(novoConteudo);

  const localizaElemento = document.getElementById('lista');
  localizaElemento.insertAdjacentElement('beforeend', novoItemLista);

  novo = document.getElementById('novoItem').value = "";
}