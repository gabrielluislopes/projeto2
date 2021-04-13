function logar() {
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  console.log(usuario+senha);

    axios.post('https://reqres.in/api/login', {
      "email": usuario,
      "password": senha
    })
    .then(function (response) {
      if (response.status == 200) {
        localStorage.setItem("acesso", true);
        window.location.href = "index.html";
      }else{
        alert("Usuário ou senha inválidos");
      }
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    });
};
