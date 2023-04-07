const httpGenerator = require('../utils/httpGenerator');

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); 
};

module.exports = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    throw httpGenerator(400, '"displayName" length must be at least 8 characters long');
  }

  if (!isValidEmail(email)) {
    throw httpGenerator(400, '"email" must be a valid email');
  }

  if (password.length < 6) {
    throw httpGenerator(400, '"password" length must be at least 6 characters long');
  }
  
  next();
};
