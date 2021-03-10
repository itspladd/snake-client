let connection;

const configInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleInput = key => {
  switch (key) {
    case "\u0003":
      process.exit();
      break;
    case "w":
      connection.write("Move: up");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "d":
      connection.write("Move: right");
      break;
  }
};

const input = configInput();

input.on('data', key => {
  handleInput(key);
});

module.exports = configInput;