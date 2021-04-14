/*
var logado = false;

if(localStorage.getItem("acesso") == "true"){
  logado = true;
}

if(logado != true){
  alert("Você não está logado no site!");
  window.location.href="login.html"
}
*/
var link = document.getElementsByClassName('entrar');
function estalogado() {
  if (localStorage.getItem("acesso") == "true") {
    alert("Você já está logado!");
  }else {
    window.location.href = "login.html"
  }
};
var link = document.getElementsByClassName('buscador');
function loginbuscar() {
  if (localStorage.getItem("acesso") == "true") {
    window.location.href = "buscar.html"
  }else {
    window.location.href = "login.html"
  }
};
