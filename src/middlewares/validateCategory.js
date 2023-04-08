const httpGenerator = require('../utils/httpGenerator');

module.exports = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    throw httpGenerator(400, '"name" is required');
  }
  
  next();
};