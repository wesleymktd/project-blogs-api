const categoryService = require('../services/category.service');

const categoryInsert = async (req, res, next) => {
  try {
    const returnInsert = await categoryService.categoryInsert(req.body);
    return res.status(201).json(returnInsert);
  } catch (error) {
    next(error);
  }  
};

const getAllCategories = async (_req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }  
};

module.exports = {
  categoryInsert,
  getAllCategories,
};