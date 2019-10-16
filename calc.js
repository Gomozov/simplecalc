let calc = function (str) {
  str = str.replace(/\s/g,"");
  if (/[^0-9\+-\/\*eE\.]/.test(str)) {
    return "Please enter digits and math operators only.";
  }
  str = calculate_parenthesis(str);  
  str = calculate_multiplicator(str);
  str = calculate_addictive(str);
  return Number(str);
};

let calculate_parenthesis = function (str) {
  let aux = /(?:[^\d](-))?\(([^\(\)]*)\)/.exec(str);
  let aux1="";
  while (aux) {
    aux1 = calculate_multiplicator(aux[2]);
    if (aux[1]) {
      aux1 = (-1)*calculate_addictive(aux1);
      str = str.replace(aux[0].substr(1), aux1);
    } else {
      aux1 = calculate_addictive(aux1);
      str = str.replace(aux[0], aux1);
    } 
    aux = /(?:[^\d](-))?\(([^\(\)]*)\)/.exec(str);
  }
  return str;
};

let calculate_addictive = function (str) {  
  let aux = /(-?\d*\.?\d+(?:e[-+]\d+)?)(\+|-)(-?\d*\.?\d+(?:e[-+]\d+)?)/.exec(str);
  while (aux) {
    if (aux[2] === "+") { 
      str = str.replace(/-?\d*\.?\d+(?:e[-+]\d+)?\+-?\d*\.?\d+(?:e[-+]\d+)?/, Number(aux[1]) + Number(aux[3]));
    } else {
      str = str.replace(/-?\d*\.?\d+(?:e[-+]\d+)?--?\d*\.?\d+(?:e[-+]\d+)?/, Number(aux[1]) - Number(aux[3]));
    }
    aux = /(-?\d*\.?\d+(?:e[-+]\d+)?)(\+|-)(-?\d*\.?\d+(?:e[-+]\d+)?)/.exec(str);
  }
  return str;
};

let calculate_multiplicator = function (str) {
  let aux = /(-?\d*\.?\d+(?:e[-+]\d+)?)(\*|\/)(-?\d*\.?\d+(?:e[-+]\d+)?)/.exec(str);
  while (aux) {
    if (aux[2] === "*") { 
      str = str.replace(/-?\d*\.?\d+(?:e[-+]\d+)?\*-?\d*\.?\d+(?:e[-+]\d+)?/, aux[1] * aux[3]);
    } else {
      str = str.replace(/-?\d*\.?\d+(?:e[-+]\d+)?\/-?\d*\.?\d+(?:e[-+]\d+)?/, aux[1] / aux[3]);
    }
    aux = /(-?\d*\.?\d+(?:e[-+]\d+)?)(\*|\/)(-?\d*\.?\d+(?:e[-+]\d+)?)/.exec(str);
  }
  return str;
};

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CALCULATOR> '
})

rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    default:
      console.log(calc(line.trim()));
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good buy!');
  process.exit(0);
});
