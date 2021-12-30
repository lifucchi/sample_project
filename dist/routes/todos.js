"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const api = 'https://jsonplaceholder.typicode.com/todos';
    if (url === '/todos' && method == 'GET') {
        axios_1.default.get(api)
            .then(resp => {
            let data = resp.data;
            const jsonContent = JSON.stringify(data);
            res.end(jsonContent);
        });
    }
    if (url === '/') {
        res.write('<html>');
        res.write('<body>hello world</body>');
        res.write('</html>');
        return res.end();
    }
    console.log(req);
};
exports.default = requestHandler;
// module.exports = requestHandler;
//# sourceMappingURL=todos.js.map