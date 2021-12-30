import { Router } from 'express';
import { createPhoto, getPhotos, deletePhoto, putPhoto, patchPhoto } from '../controllers/photos'

const router = Router();

router.get('/', getPhotos);

router.post('/', createPhoto);

router.put('/:id', putPhoto);

router.patch('/:id', patchPhoto );

router.delete('/:id', deletePhoto );

export default router;
