//imports
const express = require('express');
const helmet = require('helmet');

const server = express() //initialize server

//middleware speaking to server
server.use(helmet());
server.use(express.json());

//API

//testing server
server.get('/', (req, res) => {
    res.send("It's alive and ready to start this 2 day project!");
  });


module.exports = server;