
import { RequestHandler } from 'express'
import axios from 'axios'

import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "../entity/User";

const apiUsers = 'https://jsonplaceholder.typicode.com/users';

export const createUser: RequestHandler = (req,res,next) => {
    const name = (req.body as {name: string}).name;
    const email = (req.body as {email: string}).email;
    const phone = (req.body as {phone: string}).phone;
    axios.post(apiUsers,{
        name: name,
        email: email,
        phone: phone
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);

    })

};

export const getUsers: RequestHandler = (req,res,next) => {
    axios.get(apiUsers)
    .then( resp => {
        res.json(resp.data);
    })
};

export const putUser: RequestHandler = (req,res,next) => {
    const name = (req.body as {name: string}).name;
    const email = (req.body as {email: string}).email;
    const phone = (req.body as {phone: string}).phone;
    const id = req.params.id;
    axios.put(apiUsers + '/'+ id, {
        name: name,
        email: email,
        phone: phone  
    })
    .then( resp => {
        res.json(resp.data);
    })
};

export const deleteUser: RequestHandler = (req,res,next) => {
    const id = req.params.id;
    axios.delete(apiUsers + '/'+ id)
    .then( resp => {
        res.json(resp.data);
    })
};

export const patchUser: RequestHandler = (req,res,next) => {
    const name = (req.body as {name: string}).name;
    const id = req.params.id;
    axios.patch(apiUsers + '/'+ id, {
        name: name
    })
    .then( resp => {
        res.json(resp.data);
    })
};

export const saveUserAPI: RequestHandler = (req,res,next) => {

    axios.get(apiUsers)
    .then( resp => {
        res.json(resp.data);   
        var jsondata = resp.data;
        const users: User[] = [];

        createConnection().then(async connection => {

            for(var i=0; i < Object.keys(jsondata).length; i++){
                console.log("Inserting a new user into the database...");
                let user = new User();
                user.name = jsondata[i].name;
                user.username = jsondata[i].username;
                user.email = jsondata[i].email;
                users.push(user);
                
                console.log(Object.keys(jsondata).length);
                console.log(jsondata[i].name);
          
            }
                 await connection.manager.save(users);
                 console.log('User created');

                }

            )
        
        }).catch(error => console.log(error));

};


