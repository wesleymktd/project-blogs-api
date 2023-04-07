const loginRouter = require('express').Router();
const userController = require('../controller/user.controller');
// const { authToken } = require('../middlewares/auth.middleware');
const validateUser = require('../middlewares/validateUser');

loginRouter.post(
  '/',
  validateUser,
  userController.userInsert,
  );

module.exports = loginRouter;