const userRouter = require('express').Router();
const userController = require('../controller/user.controller');
const { authToken } = require('../middlewares/auth.middleware');
const validateUser = require('../middlewares/validateUser');

userRouter.post('/', validateUser, userController.userInsert);

userRouter.get('/', authToken, userController.getAllUsers);

module.exports = userRouter;