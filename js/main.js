const min = 1;
const max = 60;
const btn = document.querySelector('button');
var numeroDezenas = 6;
var dezenas = [];

function main() {
  dezenas = [];
  function gerarDezenas() {
    var dezena = Math.floor(Math.random() * (max - min) + min);
    return dezena;
  }

  for (var i = 0; i < numeroDezenas; i++) {
    dezenas.push(('00' + gerarDezenas()).slice(-2));
  }
}

btn.addEventListener('click', function () {
  main();
  console.log(dezenas);
});
