const express = require('express');
const server = express();

const ProjectsRouter = require('./data/projects-router.js');

server.use(express.json());
server.use('/api/projects', ProjectsRouter)


server.get('/', (req, res) => {
    res.send('Server Live!')
})

module.exports = server;