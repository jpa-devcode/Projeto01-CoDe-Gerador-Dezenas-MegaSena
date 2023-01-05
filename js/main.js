const min = 1;
const max = 60;
var numeroDezenas = 6;
var dezenas = [];

function gerarDezenas() {
  var dezena = Math.floor(Math.random() * (max - min) + min);
  return dezena;
}

for (var i = 0; i < numeroDezenas; i++) {
  dezenas.push(('00' + gerarDezenas()).slice(-2));
}

console.log(dezenas);
