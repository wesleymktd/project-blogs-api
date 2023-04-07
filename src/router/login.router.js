const loginRouter = require('express').Router();
const loginController = require('../controller/login.controller');
const validateLogin = require('../middlewares/validateLogin');

loginRouter.post('/', validateLogin, loginController.signin);

module.exports = loginRouter;