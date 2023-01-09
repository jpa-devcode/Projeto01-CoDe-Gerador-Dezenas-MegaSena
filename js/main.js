const min = 1;
const max = 60;
const btnGerar = document.querySelector('#botao-gerar');
const btnApagar = document.querySelector('#botao-apagar');
const areaDezenas = document.querySelector('.area-dezenas');
var botaoGerar = document.querySelector('#botao-gerar');
var botaoApagar = document.querySelector('#botao-apagar');
var quantidadeDeDezenas = 6;
var listaDeDezenas = [];

desativarBotaoApagar();

function gerarDezenas() {
  ativarBotaoApagar();
  document.querySelector('.area-dezenas').innerHTML = '';
  listaDeDezenas = [];
  function geradorDeDezenas() {
    var dezena = Math.floor(Math.random() * (max - min) + min);
    return dezena;
  }

  for (var i = 0; i < quantidadeDeDezenas; i++) {
    var dezenaSorteada = ('00' + geradorDeDezenas()).slice(-2);

    if (listaDeDezenas.includes(dezenaSorteada)) {
      i -= 1;
      continue;
    }

    listaDeDezenas.push(dezenaSorteada);
    var container = document.querySelector('.area-dezenas');
    var criarTag = document.createElement('span');
    var conteudoTag = document.createTextNode(listaDeDezenas[i]);
    criarTag.appendChild(conteudoTag);
    container.appendChild(criarTag);
  }
}

function apagarDezenas() {
  document.querySelector('.area-dezenas').innerHTML = '';
  listaDeDezenas = [];
  function geradorDeDezenas() {
    var dezena = '00';
    return dezena;
  }

  for (var i = 0; i < quantidadeDeDezenas; i++) {
    listaDeDezenas.push(geradorDeDezenas());
    var container = document.querySelector('.area-dezenas');
    var criarTag = document.createElement('span');
    var conteudoTag = document.createTextNode(listaDeDezenas);
    criarTag.appendChild(conteudoTag);
    container.appendChild(criarTag);
    listaDeDezenas = [];
    criarTag.setAttribute('class', 'span-color');
  }
  ativarBotaoGerar();
}

function desativarBotaoGerar() {
  btnGerar.setAttribute('disabled', '');
  botaoGerar.style.color = '#8ba5b6';
  botaoGerar.style.border = '2px solid #8ba5b6';
  botaoGerar.style.cursor = 'Default';
}

function desativarBotaoApagar() {
  btnApagar.setAttribute('disabled', '');
  btnApagar.style.color = '#8ba5b6';
  btnApagar.style.border = '2px solid #8ba5b6';
  btnApagar.style.cursor = 'Default';
}

function ativarBotaoGerar() {
  document.querySelector('#botao-gerar').removeAttribute('disabled');
  botaoGerar.style.color = '#2b5069';
  botaoGerar.style.border = '2px solid #2b5069';
  botaoGerar.style.cursor = 'pointer';
}

function ativarBotaoApagar() {
  document.querySelector('#botao-apagar').removeAttribute('disabled');
  botaoApagar.style.color = '#2b5069';
  botaoApagar.style.border = '2px solid #2b5069';
  botaoApagar.style.cursor = 'pointer';
}

btnGerar.addEventListener('click', function () {
  gerarDezenas();
  desativarBotaoGerar();
  console.log(contador);
});

btnApagar.addEventListener('click', function () {
  apagarDezenas();
  desativarBotaoApagar();
  contador = 0;
});
