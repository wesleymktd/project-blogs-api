const httpGenerator = require('../utils/httpGenerator');

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    throw httpGenerator(400, 'Some required fields are missing');
  }
  
  next();
};