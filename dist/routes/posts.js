"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controllers/post");
const router = (0, express_1.Router)();
router.get('/', post_1.getPosts);
router.post('/', post_1.createPost);
router.put('/:id', post_1.putPosts);
router.patch('/');
router.delete('/:id', post_1.deletePosts);
exports.default = router;
//# sourceMappingURL=posts.js.map