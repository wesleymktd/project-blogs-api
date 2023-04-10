const postService = require('../services/post.service');

const postInsert = async (req, res, next) => {
  try {
    const returnInsert = await postService.postInsert(req.body, req.user.id);
    return res.status(201).json(returnInsert);
  } catch (error) {
    next(error);
  }  
};

const findAllPosts = async (_req, res, next) => {
  try {
    const posts = await postService.findAllPosts();
    return res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const postUpdated = async (req, res, next) => {
  try {
    const { id } = req.params;

    const returnUpdate = await postService.updatePost(req.body, id, req.user.id);
    return res.status(200).json(returnUpdate);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postInsert,
  findAllPosts,
  getPostById,
  postUpdated,
};