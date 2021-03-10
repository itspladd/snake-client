const connect = require("./client");
const configInput = require("./input");

console.log('Connecting...');

connection = connect();

configInput(connection);