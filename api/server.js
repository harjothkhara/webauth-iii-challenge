//imports
const express = require('express');
const helmet = require('helmet');

const authRouter = require('../routers/authRouter.js');

const server = express() //initialize server

//middleware speaking to server
server.use(helmet());
server.use(express.json());

server.use('/auth', authRouter);

//testing server
server.get('/', (req, res) => {
    res.send("It's alive and ready to start this 2 day project!");
  });


module.exports = server;