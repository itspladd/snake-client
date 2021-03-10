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
    case "g":
      connection.write("Say: GG");
      break;
    case "f":
      connection.write("Say: RIP");
      break;
    case "q":
      connection.write("Say: how dare you");
      break;
    case "1":
      connection.write("Say: bacon is superior");
      break;
    case "2":
      connection.write("Say: hashbrowns overrated");
      break;
    case "3":
      connection.write("Say: fight me francis");
      break;
    case "z":
      connection.write("Say: Hello! Zuko here.");
      break;
    case "]":
      connection.write("Say: aw no emoji");
      break;
    case "0":
      connection.write("Say: my corner. no touch.");
      break;
    case "9":
      connection.write("Say: SO FANCY.");
      break;
    case "8":
      connection.write("Say: I want spinners.");
      break;
    case "y":
      connection.write("Say: (•_•)");
      break;
    case "u":
      connection.write("Say: ( •_•)>⌐■-■");
      break;
    case "i":
      connection.write("Say: (⌐■_■)");
      break;
  }
};

const input = configInput();

input.on('data', key => {
  handleInput(key);
});

module.exports = configInput;