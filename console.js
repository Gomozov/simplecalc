const pjson = require('./package.json');
const mc = require('./calc.js');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CALCULATOR> '
});
const get_help = function () {
  console.log(pjson.name+", version: "+pjson.version+".\n",
    "These math operators are defined:\n",
    "(  -left parenthesis;\n",
    ")  -right parenthesis;\n",
    "*  -multiplication;\n",
    "/  -division;\n",
    "+  -addition;\n", 
    "-  -subtraction.");
}

get_help();
rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    case "help":
      get_help();
      break;
    default:
      console.log(mc.calc(line.trim()));
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good buy!');
  process.exit(0);
});
