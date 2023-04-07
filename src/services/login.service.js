const { User } = require('../models');
const httpGenerator = require('../utils/httpGenerator');
const { generateToken } = require('../utils/auth');

const userAuthenticate = async ({ email, password }) => {
  // console.log('email, password', email, password);
  const user = await User.findOne({ where: { email, password } });

  if (!user) throw httpGenerator(400, 'Invalid fields');
  
  const token = generateToken(user.dataValues);

  return token;
};

module.exports = { 
  userAuthenticate,
};