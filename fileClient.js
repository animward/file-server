const net = require('net');

const HOST = 'localhost';
const PORT = 3000;

const client = new net.Socket();

client.connect(HOST, PORT, () => {
    console.log('Connected to server');
});

// TODO

/*
request file,
handle file data save it to local
close connection*/
