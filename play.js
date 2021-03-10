const net = require("net");
const stdin = process.stdin;

const connect = () => {
  const socket = net.createConnection({
  host: "135.23.222.131",
  port: "50542"
  });
  socket.setEncoding("utf8");

  socket.on('data', data => {
    console.log(data);
  });

  return connect;
};

console.log('Connecting...');
connect();