"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUser = exports.deleteUser = exports.putUser = exports.getUsers = exports.createUser = void 0;
// import { User } from '../models/users'
const axios_1 = __importDefault(require("axios"));
// const USERS: User[] = [];
const apiUsers = 'https://jsonplaceholder.typicode.com/users';
const createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    // axios.post(apiUsers,{
    //     name: "Rifka",
    //     email: "Rifka@gmail.com",
    //     phone: "081559921412"
    // })
    axios_1.default.post(apiUsers, {
        name: name,
        email: email,
        phone: phone
    })
        .then(resp => {
        console.log(resp.data);
        res.json(resp.data);
    });
    // const text = (req.body as {text: string}).text;
    // const newUser = new User(Math.random().toString(), text);
    // res.status(201).json({message: 'tes', createUser: newUser});
};
exports.createUser = createUser;
const getUsers = (req, res, next) => {
    axios_1.default.get(apiUsers)
        .then(resp => {
        res.json(resp.data);
    });
};
exports.getUsers = getUsers;
const putUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const id = req.params.id;
    axios_1.default.put(apiUsers + '/' + id, {
        name: name,
        email: email,
        phone: phone
    })
        .then(resp => {
        res.json(resp.data);
    });
};
exports.putUser = putUser;
const deleteUser = (req, res, next) => {
    const id = req.params.id;
    axios_1.default.delete(apiUsers + '/' + id)
        .then(resp => {
        res.json(resp.data);
    });
};
exports.deleteUser = deleteUser;
const patchUser = (req, res, next) => {
    const name = req.body.name;
    // const email = (req.body as {email: string}).email;
    // const phone = (req.body as {phone: string}).phone;
    const id = req.params.id;
    axios_1.default.patch(apiUsers + '/' + id, {
        name: name
        // email: email,
        // phone: phone  
    })
        .then(resp => {
        res.json(resp.data);
    });
};
exports.patchUser = patchUser;
//# sourceMappingURL=users.js.map