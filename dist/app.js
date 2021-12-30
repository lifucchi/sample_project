"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require('http');
const http_1 = __importDefault(require("http"));
const users_1 = __importDefault(require("./routes/users"));
// const userRoutes = require('./routes/users')
// const routes = userRoutes;
const server = http_1.default.createServer(users_1.default);
server.listen(3000);
//# sourceMappingURL=app.js.map