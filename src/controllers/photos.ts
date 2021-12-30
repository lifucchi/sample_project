
import { RequestHandler } from 'express'
import axios from 'axios'

const api = 'https://jsonplaceholder.typicode.com/photos';

export const createPhoto: RequestHandler = (req,res,next) => {
    const albumId = (req.body as {albumId: string}).albumId;
    const title = (req.body as {title: string}).title;
    const url = (req.body as {url: string}).url;
    const thumbnailUrl = (req.body as {thumbnailUrl: string}).thumbnailUrl;


    axios.post(api,{
        albumId: albumId,
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
};


export const patchPhoto: RequestHandler = (req,res,next) => {

    const title = (req.body as {title: string}).title;
    const id = req.params.id;
    axios.patch(api + '/'+ id, {
        title: title
    })
    .then( resp => {
        res.json(resp.data);
    })

};

export const getPhotos: RequestHandler = (req,res,next) => {

    axios.get(api).then( resp => {
        res.json(resp.data);
    })

};

export const deletePhoto: RequestHandler = (req,res,next) => {

    const id = req.params.id;
    axios.delete(api + '/'+ id)
    .then( resp => {
        res.json(resp.data);
    })
};

export const putPhoto: RequestHandler = (req,res,next) => {
    const albumId = (req.body as {albumId: string}).albumId;
    const title = (req.body as {title: string}).title;
    const url = (req.body as {url: string}).url;
    const thumbnailUrl = (req.body as {thumbnailUrl: string}).thumbnailUrl;
    const id = req.params.id;

    axios.put(api + '/'+ id, {
        albumId: albumId,
        title: title,
        url: url,
        thumbnailUrl: thumbnailUrl
    })
    .then( resp => {
        console.log(resp.data);
        res.json(resp.data);
    })
    
};
