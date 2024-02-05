const ocultaPass = () => {
  let alteraAtributo = document.getElementById('password');
  alteraAtributo.setAttribute('type', 'password');
}

const alteraCSS = document.querySelector(".light");
alteraCSS.classList.remove("light");
alteraCSS.classList.add("dark");