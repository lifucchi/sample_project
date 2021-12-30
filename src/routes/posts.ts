import { Router } from 'express';
import { createPost, getPosts, deletePosts, putPosts } from '../controllers/post'

const router = Router();

router.get('/', getPosts);

router.post('/', createPost );

router.put('/:id', putPosts);

router.patch('/');

router.delete('/:id', deletePosts );

export default router;
