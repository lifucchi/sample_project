"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAlbum = exports.deleteAlbum = exports.getAlbums = exports.patchAlbum = exports.createAlbum = void 0;
const axios_1 = __importDefault(require("axios"));
const api = 'https://jsonplaceholder.typicode.com/albums';
const createAlbum = (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    axios_1.default.post(api, {
        userId: userId,
        title: title
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
};
exports.createAlbum = createAlbum;
const patchAlbum = (req, res, next) => {
    const title = req.body.title;
    const id = req.params.id;
    axios_1.default.patch(api + '/' + id, {
        title: title
    })
        .then(resp => {
        res.json(resp.data);
    });
};
exports.patchAlbum = patchAlbum;
const getAlbums = (req, res, next) => {
    axios_1.default.get(api).then(resp => {
        res.json(resp.data);
    });
};
exports.getAlbums = getAlbums;
const deleteAlbum = (req, res, next) => {
    const id = req.params.id;
    axios_1.default.delete(api + '/' + id)
        .then(resp => {
        res.json(resp.data);
    });
};
exports.deleteAlbum = deleteAlbum;
const putAlbum = (req, res, next) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const id = req.params.id;
    axios_1.default.put(api + '/' + id, {
        userId: userId,
        title: title
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
};
exports.putAlbum = putAlbum;
//# sourceMappingURL=albums.js.map