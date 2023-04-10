const httpGenerator = require('../utils/httpGenerator');

module.exports = (req, _res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    throw httpGenerator(400, 'Some required fields are missing');
  }
  
  next();
};