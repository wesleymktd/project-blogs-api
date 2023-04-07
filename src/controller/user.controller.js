const userService = require('../services/user.service');

const userInsert = async (req, res, next) => {
  try {
    const returnInsert = await userService.userInsert(req.body);
    return res.status(201).json({ token: returnInsert });
  } catch (error) {
    next(error);
  }  
};

module.exports = {
  userInsert,
};