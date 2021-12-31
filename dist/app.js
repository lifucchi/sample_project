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
const comments_1 = __importDefault(require("./routes/comments"));
const photos_1 = __importDefault(require("./routes/photos"));
const albums_1 = __importDefault(require("./routes/albums"));
const body_parser_1 = require("body-parser");
// const userRoutes = require('./routes/users')
// const routes = userRoutes;
// const server = http.createServer(userRoutes);
// server.listen(3000)
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/users', users_1.default);
app.use('/posts', posts_1.default);
app.use('/comments', comments_1.default);
app.use('/photos', photos_1.default);
app.use('/albums', albums_1.default);
// ================================================================
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
// sequelize
//   .sync()
// // .sync({alter: true})
// //   .sync({force: true})
//   .then(result => {
//     app.listen(3000);
//   })
//   .catch( err => {
//     console.log(err);
//     process.exit(1);
//   });
//# sourceMappingURL=app.js.map