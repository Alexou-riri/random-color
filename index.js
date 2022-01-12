import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the scripts

const color = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});

const square = `
###############################
###############################
###############################
#######                  ######
#######     ${color}      ######
#######                  ######
###############################
###############################
###############################`;

console.log(chalk.hex(color)(square));

/* doing a full shape of #:

const n = 9;
const y = 31;
let string = '';

for (let i = 0; i < n; i++) {
  for (let j = 0; j < y; j++) {
    string += '#';
  }
  string += '\n';
}
 */
