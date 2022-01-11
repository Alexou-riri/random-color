import randomColor from 'randomcolor'; // import the script

const name = process.argv[2];
console.log(name);

/* const columns = 31;
const row = 9;
let i;
let y;

for (i = 0; i < columns; i++) {
  for (y = 0; y < row; y++) {
    console.log('#');
  }
  console.log('#');
} */

/* let square = `
###############################
###############################
###############################
###############################
###############################
###############################
###############################
###############################
###############################`;

console.log(square); */

// Java Program to Print Square Pattern

const n = 9;
const y = 31;
let string = '';

for (let i = 0; i < n; i++) {
  for (let j = 0; j < y; j++) {
    string += '#';
  }
  string += '\n';
}

console.log(string);

console.log();
