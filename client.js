const net = require("net");

const connect = () => {
  const socket = net.createConnection({
  host: "135.23.222.131",
  port: "50542"
  });
  socket.setEncoding("utf8");

  socket.on('connect', () => {
    console.log("Connection established!");
    socket.write('Name: PLD');
  });

  socket.on('data', data => {
    console.log(data);
  });

  return connect;
};

module.exports = connect;