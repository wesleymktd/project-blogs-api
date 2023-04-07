const httpGenerator = require('../utils/httpGenerator');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw httpGenerator(400, 'Some required fields are missing');
  }
  
  next();
};