const postService = require('../services/post.service');

const postInsert = async (req, res, next) => {
  try {
    const returnInsert = await postService.postInsert(req.body, req.user.id);
    return res.status(201).json(returnInsert);
  } catch (error) {
    next(error);
  }  
};

module.exports = {
  postInsert,
};