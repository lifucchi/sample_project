"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require('http');
const http_1 = __importDefault(require("http"));
// import userRoutes from '.routes/users.ts';
const server = http_1.default.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<body> hello</body>');
        res.write('</html>');
        return res.end();
    }
    console.log(req);
});
server.listen(3000);
//# sourceMappingURL=app.js.map