
import { RequestHandler } from 'express'
import axios from 'axios'

const api = 'https://jsonplaceholder.typicode.com/posts';

export const createPost: RequestHandler = (req,res,next) => {
    const userId = (req.body as {userId: string}).userId;
    const title = (req.body as {title: string}).title;
    const body = (req.body as {body: string}).body;

    axios.post(api,{
        userId: userId,
        title: title,
        body: body
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
};


export const patchPost: RequestHandler = (req,res,next) => {

    const title = (req.body as {title: string}).title;
    const id = req.params.id;
    axios.patch(api + '/'+ id, {
        title: title,
        // email: email,
        // phone: phone  
    })
    .then( resp => {
        res.json(resp.data);
    })

};

export const getPosts: RequestHandler = (req,res,next) => {

    axios.get(api).then( resp => {
        res.json(resp.data);
    })

};

export const deletePosts: RequestHandler = (req,res,next) => {

    const id = req.params.id;
    axios.delete(api + '/'+ id)
    .then( resp => {
        res.json(resp.data);
    })

};

export const putPosts: RequestHandler = (req,res,next) => {
    const userId = (req.body as {userId: string}).userId;
    const title = (req.body as {title: string}).title;
    const body = (req.body as {body: string}).body;
    const id = req.params.id;

    axios.put(api + '/'+ id, {
        userId: userId,
        title: title,
        body: body
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
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
