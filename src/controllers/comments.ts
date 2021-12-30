
import { RequestHandler } from 'express'
import axios from 'axios'

const api = 'https://jsonplaceholder.typicode.com/comments';

export const createComment: RequestHandler = (req,res,next) => {
    const postId = (req.body as {postId: string}).postId;
    const name = (req.body as {name: string}).name;
    const body = (req.body as {body: string}).body;
    const email = (req.body as {email: string}).email;


    axios.post(api,{
        postId: postId,
        name: name,
        email: email,
        body: body
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
};


export const patchComment: RequestHandler = (req,res,next) => {

    const name = (req.body as {name: string}).name;
    const id = req.params.id;
    axios.patch(api + '/'+ id, {
        name: name,
        // email: email,
        // phone: phone  
    })
    .then( resp => {
        res.json(resp.data);
    })

};

export const getComments: RequestHandler = (req,res,next) => {

    axios.get(api).then( resp => {
        res.json(resp.data);
    })

};

export const deleteComment: RequestHandler = (req,res,next) => {

    const id = req.params.id;
    axios.delete(api + '/'+ id)
    .then( resp => {
        res.json(resp.data);
    })
};

export const putComment: RequestHandler = (req,res,next) => {
    const postId = (req.body as {postId: string}).postId;
    const name = (req.body as {name: string}).name;
    const body = (req.body as {body: string}).body;
    const email = (req.body as {email: string}).email;
    const id = req.params.id;

    axios.put(api + '/'+ id, {
        postId: postId,
        name: name,
        email: email,
        body: body
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
    
};
