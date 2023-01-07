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
    var elemento_pai = document.querySelector('.area-dezenas');
    var titulo = document.createElement('span');
    var texto = document.createTextNode(listaDeDezenas);
    titulo.appendChild(texto);
    elemento_pai.appendChild(titulo);
    listaDeDezenas = [];
  }
}

btnGerar.addEventListener('click', function () {
  main();
  btnGerar.setAttribute('disabled', '');
  botaoGerar.style.color = '#8ba5b6';
  botaoGerar.style.border = '2px solid #8ba5b6';
});

btnLimpar.addEventListener('click', function () {
  window.location.reload();
});
