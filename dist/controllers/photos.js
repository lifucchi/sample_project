"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPhoto = exports.deletePhoto = exports.getPhotos = exports.patchPhoto = exports.createPhoto = void 0;
const axios_1 = __importDefault(require("axios"));
const api = 'https://jsonplaceholder.typicode.com/photos';
const createPhoto = (req, res, next) => {
    const albumId = req.body.albumId;
    const title = req.body.title;
    const url = req.body.url;
    const thumbnailUrl = req.body.thumbnailUrl;
    axios_1.default.post(api, {
        albumId: albumId,
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
};
exports.createPhoto = createPhoto;
const patchPhoto = (req, res, next) => {
    const title = req.body.title;
    const id = req.params.id;
    axios_1.default.patch(api + '/' + id, {
        title: title
    })
        .then(resp => {
        res.json(resp.data);
    });
};
exports.patchPhoto = patchPhoto;
const getPhotos = (req, res, next) => {
    axios_1.default.get(api).then(resp => {
        res.json(resp.data);
    });
};
exports.getPhotos = getPhotos;
const deletePhoto = (req, res, next) => {
    const id = req.params.id;
    axios_1.default.delete(api + '/' + id)
        .then(resp => {
        res.json(resp.data);
    });
};
exports.deletePhoto = deletePhoto;
const putPhoto = (req, res, next) => {
    const albumId = req.body.albumId;
    const title = req.body.title;
    const url = req.body.url;
    const thumbnailUrl = req.body.thumbnailUrl;
    const id = req.params.id;
    axios_1.default.put(api + '/' + id, {
        albumId: albumId,
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
};
exports.putPhoto = putPhoto;
//# sourceMappingURL=photos.js.map