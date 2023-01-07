const min = 1;
const max = 60;
const btnGerar = document.querySelector('#botao-gerar');
const btnLimpar = document.querySelector('#botao-limpar');
const areaDezenas = document.querySelector('.area-dezenas');
var botaoGerar = document.querySelector('#botao-gerar');
var quantidadeDeDezenas = 6;
var listaDeDezenas = [];

function main() {
  listaDeDezenas = [];
  function gerarDezenas() {
    var dezena = Math.floor(Math.random() * (max - min) + min);
    return dezena;
  }

  for (var i = 0; i < quantidadeDeDezenas; i++) {
    listaDeDezenas.push(('00' + gerarDezenas()).slice(-2));
    var conteiner = document.querySelector('.area-dezenas');
    var criarTag = document.createElement('span');
    var conteudoTag = document.createTextNode(listaDeDezenas);
    criarTag.appendChild(conteudoTag);
    conteiner.appendChild(criarTag);
    listaDeDezenas = [];
  }
}

function desativarBotaoGerar() {
  btnGerar.setAttribute('disabled', '');
  botaoGerar.style.color = '#8ba5b6';
  botaoGerar.style.border = '2px solid #8ba5b6';
  botaoGerar.style.cursor = 'Default';
}

btnGerar.addEventListener('click', function () {
  main();
  desativarBotaoGerar();
});

btnLimpar.addEventListener('click', function () {
  window.location.reload();
});
