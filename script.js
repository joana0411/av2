// Recuperar os logins salvos no localStorage ao carregar a página
window.onload = function () {
  carregarLoginSalvos();
};

function CadastrarLogin() {
  var Email = document.getElementById("Email").value;
  var Senha = document.getElementById("Senha").value;

  if (Email && Senha) {
    // Cria um objeto representando o login
    var novoLogin = {
      Email: Email,
      Senha: Senha,
    };

    // Salva o login no localStorage
    salvarLogin(novoLogin);

    // Adiciona o login à lista na interface
    adicionarLoginNaLista(novoLogin);

    // Limpa o formulário após o login
    document.getElementById("Email").value = "";
    document.getElementById("Senha").value = "";
    window.location.href = "cadastro1.html";
  } else {
    alert("Preencha todos os campos do formulário.");
  }
}

function adicionarLoginNaLista(login) {
  var listaLogin = document.getElementById("listaLogin");
  var novoLogin = document.createElement("li");
  novoLogin.innerHTML = `<strong>${login.Email}</strong> ${login.Senha}`;
  listaLogin.appendChild(novoLogin);
}

function salvarLogin(login) {
  // Recupera os logins salvos no localStorage
  var loginsSalvos = JSON.parse(localStorage.getItem("Login")) || [];

  // Adiciona o novo login à lista de logins
  loginsSalvos.push(login);

  // Salva a lista atualizada no localStorage
  localStorage.setItem("Login", JSON.stringify(loginsSalvos));
}

function carregarLoginSalvos() {
  // Recupera os logins salvos no localStorage
  var loginsSalvos = JSON.parse(localStorage.getItem("Login")) || [];

  // Adiciona os logins à lista na interface
  loginsSalvos.forEach(adicionarLoginNaLista);
}
