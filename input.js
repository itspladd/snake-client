const INPUTMAP = require('./constants').INPUTMAP

let connection;

const configInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const run = (callback) => {
  callback();
}

const handleInput = key => {
  if (key === "\u0003") {
    process.exit();
  } else if (INPUTMAP[key]) {
    if (typeof INPUTMAP[key] === "function") {
      run(INPUTMAP[key]);
    } else {
      connection.write(INPUTMAP[key]);
    }
  }
};


const input = configInput();

input.on('data', key => {
  handleInput(key);
});

module.exports = configInput;