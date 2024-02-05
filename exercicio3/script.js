const paragrafo = document.getElementById('mensagem');

const identificaShift = (event) => {
  console.log(event.shiftKey);
  if (event.shiftKey) {
    paragrafo.innerHTML = "SHIFT PRESSIONADO !";
  } else {
    paragrafo.innerHTML = "";
  }
}