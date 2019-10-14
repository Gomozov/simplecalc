const Calculator = function() {
  this.evaluate = str => {
    let aux;
    str = str.replace(/\s/g,"");
    if (/[^0-9\+-\/\*eE\.]/.test(str)) {
      return "Please enter digits and math operators only.";
    }
    while (/\d[\*|\/]-?\d+/.test(str)) {
      aux = /(-?\d*\.?\d+(?:[eE][-+]\d+)?)(\*|\/)(-?\d*\.?\d+(?:[eE][-+]\d+)?)/.exec(str);
      if (aux[2] === "*") { 
        str = str.replace(/-?\d*\.?\d+(?:[eE][-+]\d+)?\*-?\d*\.?\d+(?:[eE][-+]\d+)?/, aux[1]*aux[3]);
      } else {
        str = str.replace(/-?\d*\.?\d+(?:[eE][-+]\d+)?\/-?\d*\.?\d+(?:[eE][-+]\d+)?/, aux[1]/aux[3]);
      }
    }
    while (/\d[\+|-]-?\d/.test(str)) {
      aux = /(-?\d*\.?\d+(?:[eE][-+]\d+)?)(\+|-)(-?\d*\.?\d+(?:[eE][-+]\d+)?)/.exec(str);
      if (aux[2] === "+") { 
        str = str.replace(/-?\d*\.?\d+(?:[eE][-+]\d+)?\+-?\d*\.?\d+(?:[eE][-+]\d+)?/, Number(aux[1])+Number(aux[3]));
      } else {
        str = str.replace(/-?\d*\.?\d+(?:[eE][-+]\d+)?--?\d*\.?\d+(?:[eE][-+]\d+)?/, Number(aux[1])-Number(aux[3]));
      }
    }
    return str;
  }
};

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CALCULATOR> '
})
let calc = new Calculator();

rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    default:
      console.log(calc.evaluate(line.trim()));
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good buy!');
  process.exit(0);
});
