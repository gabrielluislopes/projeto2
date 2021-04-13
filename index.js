var logado = false;

if(localStorage.getItem("acesso") == "true"){
  logado = true;
}

if(logado != true){
  alert("Você não está logado no site!");
  window.location.href="login.html"
}
