import { Router } from 'express';
import { createUser, getUsers, putUsers} from '../controllers/users'

const router = Router();

router.get('/', getUsers);

router.post('/', createUser );

router.put('/:id', putUsers);

router.patch('/');

router.delete('/');

// import axios from 'axios'

// const requestHandler = (req , res) => {
//     const url = req.url;
//     const method = req.method;
//     const apiUsers = 'https://jsonplaceholder.typicode.com/users';
//     const apiTodos = 'https://jsonplaceholder.typicode.com/todos';
//     const apiPosts = 'https://jsonplaceholder.typicode.com/posts';
//     const apiComments = 'https://jsonplaceholder.typicode.com/comments';
//     const apiAlbums = 'https://jsonplaceholder.typicode.com/albums';
//     const apiPhotos = 'https://jsonplaceholder.typicode.com/photos';

//     // users
//     if(url === '/user' && method == 'GET'){
//         axios.get(apiUsers)
//         .then(resp => {
//             let data = resp.data;
//             const jsonContent = JSON.stringify(data);
//             return res.end(jsonContent);
//         }
//     )
//     }
//     if(url === '/user' && method == 'POST'){
//         axios.post(apiUsers)
//         .then(resp => {
//             let data = resp.data;
//             const jsonContent = JSON.stringify(data);
//             return res.end(jsonContent);
//             }
//         )
//     }

//     // if(url === '/user' && method == 'DELETE'){
//     //     axios.delete('https://jsonplaceholder.typicode.com/posts?userId=1')   
//     //     .then(resp => {
//     //             let data = resp.data;
//     //             console.log(data);
//     //             // const jsonContent = JSON.stringify(data);
//     //             // return res.end(jsonContent);
//     //             }
//     //         );
//     // }

//     // home
//     if(url === '/'){
//         res.write('<html>')
//         res.write('<body>hello world</body>')
//         res.write('</html>')
//         return res.end();
//     }
//     // console.log(req);
// }

export default router;
// module.exports = requestHandler;
