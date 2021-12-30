"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const albums_1 = require("../controllers/albums");
const router = (0, express_1.Router)();
router.get('/', albums_1.getAlbums);
router.post('/', albums_1.createAlbum);
router.put('/:id', albums_1.putAlbum);
router.patch('/:id', albums_1.patchAlbum);
router.delete('/:id', albums_1.deleteAlbum);
exports.default = router;
//# sourceMappingURL=albums.js.map