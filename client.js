const net = require("net");
const { IP, PORT } = require('./constants');

const name = process.argv[2];

const connect = () => {
  const socket = net.createConnection({
  host: IP,
  port: PORT
  });
  socket.setEncoding("utf8");

  socket.on('connect', () => {
    console.log("Connection established!");
    socket.write(`Name: ${name}`);
  });

  socket.on('data', data => {
    console.log(data);
  });

  return socket;
};

module.exports = connect;