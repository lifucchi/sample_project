import { Router } from 'express';
import { createComment, getComments, deleteComment, putComment, patchComment } from '../controllers/comments'

const router = Router();

router.get('/', getComments);

router.post('/', createComment);

router.put('/:id', putComment);

router.patch('/:id', patchComment );

router.delete('/:id', deleteComment );

export default router;
