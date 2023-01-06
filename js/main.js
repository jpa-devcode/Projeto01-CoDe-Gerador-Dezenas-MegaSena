const min = 1;
const max = 60;
const btn = document.querySelector('button');
const areaDezenas = document.querySelector('.area-dezenas');
const dezenaUm = document.querySelector('#dezena-01');
var dezena = 0;
// var listaSpan = document.getElementById('#area-dezenas');
// var novoSpan = document.createElement('span');

var quantidadeDeDezenas = 6;
var listaDeDezenas = [];

function main() {
  listaDeDezenas = [];
  function gerarDezenas() {
    dezena = Math.floor(Math.random() * (max - min) + min);
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

btn.addEventListener('click', function () {
  main();
  // const pegarDezena = listaDeDezenas.map((elemento) => {
  //   return (areaDezenas.textContent = elemento);
  // });
  // criarSpans();
  // console.log(listaDeDezenas);
});
