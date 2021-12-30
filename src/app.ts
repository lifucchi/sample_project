// const http = require('http');
import http from 'http';
import userRoutes from './routes/users';

// const userRoutes = require('./routes/users')

// const routes = userRoutes;

const server = http.createServer(userRoutes);
server.listen(3000)