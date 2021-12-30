
import { RequestHandler } from 'express'
// import { User } from '../models/users'
import axios from 'axios'

// const USERS: User[] = [];
const apiUsers = 'https://jsonplaceholder.typicode.com/users';

export const createUser: RequestHandler = (req,res,next) => {
    const name = (req.body as {name: string}).name;
    const email = (req.body as {email: string}).email;
    const phone = (req.body as {phone: string}).phone;

    // axios.post(apiUsers,{
    //     name: "Rifka",
    //     email: "Rifka@gmail.com",
    //     phone: "081559921412"
    // })
    axios.post(apiUsers,{
        name: name,
        email: email,
        phone: phone
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);

    })
    // const text = (req.body as {text: string}).text;
    // const newUser = new User(Math.random().toString(), text);
    // res.status(201).json({message: 'tes', createUser: newUser});

};

export const getUsers: RequestHandler = (req,res,next) => {
    axios.get(apiUsers)
    .then( resp => {
        res.json(resp.data);
    })
};


export const putUser: RequestHandler = (req,res,next) => {
    const id = req.params.id;
    axios.put(apiUsers + '/'+ id, {
        name: "Rifka",
        email: "Rifka@gmail.com",
        phone: "081559921412"  
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



