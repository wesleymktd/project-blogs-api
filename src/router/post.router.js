const postRouter = require('express').Router();
const postController = require('../controller/post.controller');
const { authToken } = require('../middlewares/auth.middleware');
const validatePost = require('../middlewares/validatePost');

postRouter.post('/', authToken, validatePost, postController.postInsert);

// postRouter.get('/', authToken, userController.getAllUsers);

// postRouter.get('/:id', authToken, userController.getById);

module.exports = postRouter;