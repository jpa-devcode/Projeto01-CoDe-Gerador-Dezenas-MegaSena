const min = 1;
const max = 60;
const btnGerar = document.querySelector('#botao-gerar');
const btnLimpar = document.querySelector('#botao-limpar');
const areaDezenas = document.querySelector('.area-dezenas');
var botaoGerar = document.querySelector('#botao-gerar');
var botaoLimpar = document.querySelector('#botao-limpar');
var quantidadeDeDezenas = 6;
var listaDeDezenas = [];

desativarBotaoLimpar();

function main() {
  ativarBotaoLimpar();
  document.querySelector('.area-dezenas').innerHTML = '';
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

function limpar() {
  document.querySelector('.area-dezenas').innerHTML = '';
  listaDeDezenas = [];
  function gerarDezenas() {
    var dezena = '00';
    return dezena;
  }

  for (var i = 0; i < quantidadeDeDezenas; i++) {
    listaDeDezenas.push(gerarDezenas());
    var conteiner1 = document.querySelector('.area-dezenas');
    var criarTag1 = document.createElement('span');
    var conteudoTag1 = document.createTextNode(listaDeDezenas);
    criarTag1.appendChild(conteudoTag1);
    conteiner1.appendChild(criarTag1);
    listaDeDezenas = [];
    criarTag1.setAttribute('class', 'span-color');
  }
  ativarBotaoGerar();
}

function desativarBotaoGerar() {
  btnGerar.setAttribute('disabled', '');
  botaoGerar.style.color = '#8ba5b6';
  botaoGerar.style.border = '2px solid #8ba5b6';
  botaoGerar.style.cursor = 'Default';
}

function desativarBotaoLimpar() {
  btnLimpar.setAttribute('disabled', '');
  btnLimpar.style.color = '#8ba5b6';
  btnLimpar.style.border = '2px solid #8ba5b6';
  btnLimpar.style.cursor = 'Default';
}

function ativarBotaoGerar() {
  document.querySelector('#botao-gerar').removeAttribute('disabled');
  botaoGerar.style.color = '#2b5069';
  botaoGerar.style.border = '2px solid #2b5069';
  botaoGerar.style.cursor = 'pointer';
}

function ativarBotaoLimpar() {
  document.querySelector('#botao-limpar').removeAttribute('disabled');
  botaoLimpar.style.color = '#2b5069';
  botaoLimpar.style.border = '2px solid #2b5069';
  botaoLimpar.style.cursor = 'pointer';
}

btnGerar.addEventListener('click', function () {
  main();
  desativarBotaoGerar();
});

btnLimpar.addEventListener('click', function () {
  limpar();
  desativarBotaoLimpar();
});
