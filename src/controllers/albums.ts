
import { RequestHandler } from 'express'
import axios from 'axios'

const api = 'https://jsonplaceholder.typicode.com/albums';

export const createAlbum: RequestHandler = (req,res,next) => {
    const userId = (req.body as {userId: string}).userId;
    const title = (req.body as {title: string}).title;

    axios.post(api,{
        userId: userId,
        title: title
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
};


export const patchAlbum: RequestHandler = (req,res,next) => {

    const title = (req.body as {title: string}).title;
    const id = req.params.id;
    axios.patch(api + '/'+ id, {
        title: title
    })
    .then( resp => {
        res.json(resp.data);
    })

};

export const getAlbums: RequestHandler = (req,res,next) => {
    axios.get(api).then( resp => {
        res.json(resp.data);
    })
};

export const deleteAlbum: RequestHandler = (req,res,next) => {

    const id = req.params.id;
    axios.delete(api + '/'+ id)
    .then( resp => {
        res.json(resp.data);
    })
};

export const putAlbum: RequestHandler = (req,res,next) => {
    const userId = (req.body as {userId: string}).userId;
    const title = (req.body as {title: string}).title;

    const id = req.params.id;

    axios.put(api + '/'+ id, {
        userId: userId,
        title: title
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
    
};
