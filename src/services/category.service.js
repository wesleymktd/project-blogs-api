const { Category } = require('../models');
// const httpGenerator = require('../utils/httpGenerator');
// const { generateToken } = require('../utils/auth');

const categoryInsert = async (newCategory) => {
  const returnCreate = await Category.create(newCategory);

  return returnCreate;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { 
  categoryInsert,
  getAllCategories,
};