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
    //setInterval( () => socket.write('Move: up'), 50);
  });

  socket.on('data', data => {
    console.log(data);
  });

  return socket;
};

module.exports = connect;