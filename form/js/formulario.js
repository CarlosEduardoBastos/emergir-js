(function () {
  "use strict";

  const txtTitulo = document.getElementById("txtTitulo");
  const btn = document.getElementById("btn");
  const formCadastro = document.querySelector(".formCadastro");

  formCadastro.addEventListener("submit", (event) => {
    console.log(txtTitulo.value);
    if (!txtTitulo.value) {
      showErrorMessage("Preencha todos os campos", function () {
        txtTitulo.focus();
      });
      event.preventDefault();
    }
  });

  const feedbackMessage = document.getElementById("feedbackMessage");
  const button = document.getElementsByTagName("button")[0];

  function showErrorMessage(message, cb) {
    feedbackMessage.classList.add("show");
    feedbackMessage.querySelector("p").textContent = message;

    function closeShowError() {
      feedbackMessage.classList.remove("show");
      button.removeEventListener("click", closeShowError);
      if (typeof cb === "function") {
        cb();
      }
    }
    button.focus();
    button.addEventListener("click", closeShowError);
  }

  const textDescricao = document.getElementById("txtDescricao");
  const contadorContainer = document.getElementById("contador");
  const resta = contadorContainer.getElementsByTagName("span")[0];
  const maximo = textDescricao.maxLength;
  morstrarNumero(maximo);

  textDescricao.addEventListener("input", function () {
    let numerosLetrasDigitadas = this.value.length;
    let caracterRestante = parseInt(maximo) - parseInt(numerosLetrasDigitadas);
    morstrarNumero(caracterRestante);
  });
  function morstrarNumero(n) {
    resta.textContent = n;
  }
  btn.disabled = true;
  const checkAceito = document.getElementById("chkAceito");
  checkAceito.addEventListener("change", function () {
    btn.disabled = !this.checked;
  });
  contadorContainer.removeAttribute("style");
})();
