const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CALCULATOR> '
})
const mc = require('./calc.js');

rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    default:
      console.log(mc.calc(line.trim()));
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Good buy!');
  process.exit(0);
});
