const min = 1;
const max = 60;
const btn = document.querySelector('button');
const areaDezenas = document.querySelector('.area-dezenas');
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
  }
}

btn.addEventListener('click', function () {
  main();
  areaDezenas.textContent = listaDeDezenas;
  // console.log(listaDeDezenas);
});
