const userService = require('../services/user.service');

const userInsert = async (req, res, next) => {
  try {
    const returnInsert = await userService.userInsert(req.body);
    return res.status(201).json({ token: returnInsert });
  } catch (error) {
    next(error);
  }  
};

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }  
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }  
};

const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.user.id);
    return res.status(204).json();
  } catch (error) {
    next(error);
  }  
};

module.exports = {
  userInsert,
  getAllUsers,
  getById,
  deleteUser,
};