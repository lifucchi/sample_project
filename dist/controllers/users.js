"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUserAPI = exports.patchUser = exports.deleteUser = exports.putUser = exports.getUsers = exports.createUser = void 0;
const axios_1 = __importDefault(require("axios"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
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
const saveUserAPI = (req, res, next) => {
    axios_1.default.get(apiUsers)
        .then(resp => {
        res.json(resp.data);
        var jsondata = resp.data;
        const users = [];
        (0, typeorm_1.createConnection)().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
            for (var i = 0; i < Object.keys(jsondata).length; i++) {
                console.log("Inserting a new user into the database...");
                let user = new User_1.User();
                user.name = jsondata[i].name;
                user.username = jsondata[i].username;
                user.email = jsondata[i].email;
                users.push(user);
                console.log(Object.keys(jsondata).length);
                console.log(jsondata[i].name);
            }
            yield connection.manager.save(users);
            console.log('User created');
            // user.save();
        }));
    }).catch(error => console.log(error));
    // JSON.stringify(values);
    // console.info(values);
    // res.json(values);
};
exports.saveUserAPI = saveUserAPI;
//# sourceMappingURL=users.js.map