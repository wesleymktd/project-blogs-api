const { Category } = require('../models');
// const httpGenerator = require('../utils/httpGenerator');
// const { generateToken } = require('../utils/auth');

const categoryInsert = async (newCategory) => {
  const returnCreate = await Category.create(newCategory);

  return returnCreate;
};

module.exports = { 
  categoryInsert,
};