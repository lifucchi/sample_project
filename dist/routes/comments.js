"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_1 = require("../controllers/comments");
const router = (0, express_1.Router)();
router.get('/', comments_1.getComments);
router.post('/', comments_1.createComment);
router.put('/:id', comments_1.putComment);
router.patch('/:id', comments_1.patchComment);
router.delete('/:id', comments_1.deleteComment);
exports.default = router;
//# sourceMappingURL=comments.js.map