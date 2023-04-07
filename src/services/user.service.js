const { User } = require('../models');
const httpGenerator = require('../utils/httpGenerator');
const { generateToken } = require('../utils/auth');

const userInsert = async (newUser) => {
  // console.log('email, password', email, password);
  const userExists = await User.findOne({ where: { email: newUser.email } });

  if (userExists) {
    throw httpGenerator(409, 'User already registered');
  } 

  await User.create(newUser);

  const token = generateToken({ email: newUser.email });

  return token;
};

module.exports = { 
    userInsert,
};