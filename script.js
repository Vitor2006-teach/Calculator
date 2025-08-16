(function () {
  "use strict";

  const visor = document.getElementById("visor");
  
  function definirValor(valor) {
    visor.value = valor;
  }
  
  function adicionarNaExp(valor) {
    var expr = visor.value;
    visor.value = expr + valor;
  }
  
  function limpar() {
    const visor = document.getElementById("visor");
    visor.value = visor.value.slice(0, -1);
    if (visor.value === "") {
      visor.value = "";
    }
  }
  
  const botoes = document.querySelectorAll(".dtn-cal");
  
  function executarExp() {
    const expr = visor.value //.replace(/[^0-9\-+*/.()]/g, "");
    const resultado = eval(expr);
  
    definirValor(Number.isFinite(resultado) ? resultado : "Erro");
  }
  
  if (botoes && botoes.length > 0) {
    botoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        let { value, acao } = botao.dataset;
  
        if (acao === "limpar") {
          return limpar();
        }
        if ( acao === "igual") {
          return executarExp();
        }
  
        return adicionarNaExp(value);
      });
    });
  }
})();


