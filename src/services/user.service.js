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

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getById = async (id) => {
  const userExists = await User.findOne({ where: { id } });

  if (!userExists) {
    throw httpGenerator(404, 'User does not exist');
  }

  const [user] = await User.findAll({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = { 
  userInsert,
  getAllUsers,
  getById,
};