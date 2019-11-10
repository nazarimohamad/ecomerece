const express = require('express');
const router = express.Router({mergeParams: true});
const { createPost, removePost } = require('../handlers/posts');

router.route('/').post(createPost);
router.route('/:post_id').delete(removePost);

module.exports = router;