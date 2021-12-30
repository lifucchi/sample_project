import { Router } from 'express';
import { createAlbum, getAlbums, deleteAlbum, putAlbum, patchAlbum } from '../controllers/albums'

const router = Router();

router.get('/', getAlbums);

router.post('/', createAlbum);

router.put('/:id', putAlbum);

router.patch('/:id', patchAlbum );

router.delete('/:id', deleteAlbum );

export default router;
