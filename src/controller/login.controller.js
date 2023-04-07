const loginService = require('../services/login.service');

const signin = async (req, res, next) => {
  try {
    const login = await loginService.userAuthenticate(req.body);
    return res.status(200).json({ token: login });
  } catch (error) {
    next(error);
  }  
};

module.exports = {
  signin,
};