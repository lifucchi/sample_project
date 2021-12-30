"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photos_1 = require("../controllers/photos");
const router = (0, express_1.Router)();
router.get('/', photos_1.getPhotos);
router.post('/', photos_1.createPhoto);
router.put('/:id', photos_1.putPhoto);
router.patch('/:id', photos_1.patchPhoto);
router.delete('/:id', photos_1.deletePhoto);
exports.default = router;
//# sourceMappingURL=photos.js.map