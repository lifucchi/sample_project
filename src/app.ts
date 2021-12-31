// const http = require('http');
// import http from 'http';
import express, {Request, Response, NextFunction} from 'express';
import userRoutes from './routes/users';
import postRoutes from './routes/posts';
import commentRoutes from './routes/comments';
import photosRoutes from './routes/photos';
import albumRoutes from './routes/albums';
import { json } from 'body-parser';
// const userRoutes = require('./routes/users')
// const routes = userRoutes;
// const server = http.createServer(userRoutes);
// server.listen(3000)
const app = express();

app.use(json());
app.use('/users', userRoutes );
app.use('/posts', postRoutes );
app.use('/comments', commentRoutes );
app.use('/photos', photosRoutes );
app.use('/albums', albumRoutes );

// ================================================================

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
})
app.listen(3000);
