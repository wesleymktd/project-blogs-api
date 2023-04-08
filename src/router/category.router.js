const categoryRouter = require('express').Router();
const categoryController = require('../controller/category.controller');
const { authToken } = require('../middlewares/auth.middleware');
const validateCategory = require('../middlewares/validateCategory');

categoryRouter.post('/', authToken, validateCategory, categoryController.categoryInsert);

module.exports = categoryRouter;