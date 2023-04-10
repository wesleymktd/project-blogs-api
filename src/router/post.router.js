const postRouter = require('express').Router();
const postController = require('../controller/post.controller');
const { authToken } = require('../middlewares/auth.middleware');
const validatePost = require('../middlewares/validatePost');
const validateUpdatePost = require('../middlewares/validateUpdatePost');

postRouter.post('/', authToken, validatePost, postController.postInsert);

postRouter.get('/', authToken, postController.findAllPosts);

postRouter.get('/:id', authToken, postController.getPostById);

postRouter.put('/:id', authToken, validateUpdatePost, postController.postUpdated);

postRouter.delete('/:id', authToken, postController.postDelete);

// postRouter.get('/', authToken, userController.getAllUsers);

// postRouter.get('/:id', authToken, userController.getById);

module.exports = postRouter;