const configInput = () => {
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
    
  }
};

const input = configInput();

input.on('data', key => {
  handleInput(key);
});

module.exports = configInput;