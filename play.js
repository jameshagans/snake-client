const net = require("net"); 

const connect = require('./client.js'); 

console.log('Connecting...'); 
connect()



const handleUserInput = function (data) { 
  //console.log('EXIT_____________', data)
  if (data === '\u0003') {
    console.log('EXIT_____________', data)
    process.exit();
  }
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput(); 

