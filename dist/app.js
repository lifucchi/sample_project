"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require('http');
// import http from 'http';
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const posts_1 = __importDefault(require("./routes/posts"));
const body_parser_1 = require("body-parser");
// const userRoutes = require('./routes/users')
// const routes = userRoutes;
// const server = http.createServer(userRoutes);
// server.listen(3000)
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/users', users_1.default);
app.use('/posts', posts_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
//# sourceMappingURL=app.js.map