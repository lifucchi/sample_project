"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putComment = exports.deleteComment = exports.getComments = exports.patchComment = exports.createComment = void 0;
const axios_1 = __importDefault(require("axios"));
const api = 'https://jsonplaceholder.typicode.com/comments';
const createComment = (req, res, next) => {
    const postId = req.body.postId;
    const name = req.body.name;
    const body = req.body.body;
    const email = req.body.email;
    axios_1.default.post(api, {
        postId: postId,
        name: name,
        email: email,
        body: body
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
};
exports.createComment = createComment;
const patchComment = (req, res, next) => {
    const name = req.body.name;
    const id = req.params.id;
    axios_1.default.patch(api + '/' + id, {
        name: name,
        // email: email,
        // phone: phone  
    })
        .then(resp => {
        res.json(resp.data);
    });
};
exports.patchComment = patchComment;
const getComments = (req, res, next) => {
    axios_1.default.get(api).then(resp => {
        res.json(resp.data);
    });
};
exports.getComments = getComments;
const deleteComment = (req, res, next) => {
    const id = req.params.id;
    axios_1.default.delete(api + '/' + id)
        .then(resp => {
        res.json(resp.data);
    });
};
exports.deleteComment = deleteComment;
const putComment = (req, res, next) => {
    const postId = req.body.postId;
    const name = req.body.name;
    const body = req.body.body;
    const email = req.body.email;
    const id = req.params.id;
    axios_1.default.put(api + '/' + id, {
        postId: postId,
        name: name,
        email: email,
        body: body
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
};
exports.putComment = putComment;
//# sourceMappingURL=comments.js.map