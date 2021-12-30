"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPosts = exports.deletePosts = exports.getPosts = exports.patchPost = exports.createPost = void 0;
const axios_1 = __importDefault(require("axios"));
const api = 'https://jsonplaceholder.typicode.com/posts';
const createPost = (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const body = req.body.body;
    axios_1.default.post(api, {
        userId: userId,
        title: title,
        body: body
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
};
exports.createPost = createPost;
const patchPost = (req, res, next) => {
    const title = req.body.title;
    const id = req.params.id;
    axios_1.default.patch(api + '/' + id, {
        title: title,
        // email: email,
        // phone: phone  
    })
        .then(resp => {
        res.json(resp.data);
    });
};
exports.patchPost = patchPost;
const getPosts = (req, res, next) => {
    axios_1.default.get(api).then(resp => {
        res.json(resp.data);
    });
};
exports.getPosts = getPosts;
const deletePosts = (req, res, next) => {
    const id = req.params.id;
    axios_1.default.delete(api + '/' + id)
        .then(resp => {
        res.json(resp.data);
    });
};
exports.deletePosts = deletePosts;
const putPosts = (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const body = req.body.body;
    const id = req.params.id;
    axios_1.default.put(api + '/' + id, {
        userId: userId,
        title: title,
        body: body
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
    // const config = { headers: {'Content-Type': 'application/json'} };
    // axios.put(api+ '/id', {
    //     id: 1,
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }, config)
    // .then( resp => {
    //     res.json();
    // })
    // .then((json) => console.log(json));
    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    // method: 'PUT',
    // body: JSON.stringify({
    //     id: 1,
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    // }),
    // headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    // },
    // })
    // .then((response) => response.json())
    // .then((json) => console.log(json));
};
exports.putPosts = putPosts;
//# sourceMappingURL=post.js.map