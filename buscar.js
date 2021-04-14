function efetuar() {
  var container = document.querySelector('ul');
  var query = document.querySelector('input').value;
  axios.get("https://www.balldontlie.io/api/v1/players?search=" + query)
    .then(function (res) {
      var data = res.data.data;
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
            nome = data[i].first_name;
            sobrenome = data[i].last_name;
            time = data[i].team.full_name;
        li.innerHTML = nome +" "+ sobrenome +" - "+ time;
        container.appendChild(li);
        console.log(res);
      };
    });
}
