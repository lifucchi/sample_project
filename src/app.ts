// const http = require('http');
// import http from 'http';
import express, {Request, Response, NextFunction} from 'express';
import userRoutes from './routes/users';
import postRoutes from './routes/posts';
import {sequelize} from './database/database';
import { json } from 'body-parser';
// const userRoutes = require('./routes/users')
// const routes = userRoutes;
// const server = http.createServer(userRoutes);
// server.listen(3000)
const app = express();

app.use(json());
app.use('/users', userRoutes );
app.use('/posts', postRoutes );


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
})


// app.listen(3000);

sequelize
  .sync()
  // .sync({alter: true})
//   .sync({force: true})
  .then(result => {
    app.listen(3000);
  })
  .catch( err => {
    console.log(err);
    process.exit(1);
  });

