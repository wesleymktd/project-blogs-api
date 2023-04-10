const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');
const httpGenerator = require('../utils/httpGenerator');
// const { generateToken } = require('../utils/auth');

const existsVerifiqPost = async (id) => {
  const [post] = await BlogPost.findAll({
    where: { id },
  });

  if (!post) {
    throw httpGenerator(404, 'Post does not exist');
  }

  return post;
};

const verifyAuthUser = (post, userId) => {
  if (post.userId !== userId) {
    throw httpGenerator(401, 'Unauthorized user');
  }
};

const postInsert = async ({ title, content, categoryIds }, userId) => {
  const categoriesExists = await Promise.all(categoryIds.map((id) =>
  Category.findOne({ where: { id } })));

  if (categoriesExists.includes(null)) {
    throw httpGenerator(400, 'one or more "categoryIds" not found');
  } 

  const newPost = await BlogPost.create({
    title, content, userId, updated: new Date(), published: new Date(), 
  });

  await Promise.all(categoryIds.map((id) =>
    PostCategory.create({ categoryId: id, postId: newPost.id })));

  return newPost;
};

const findAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getPostById = async (id) => {
  const [post] = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    throw httpGenerator(404, 'Post does not exist');
  }

  return post;
};

const updatePost = async ({ title, content }, postId, userId) => {
  const verifiqPost = await existsVerifiqPost(postId);
  verifyAuthUser(verifiqPost, userId);

  await BlogPost.update({ title, content }, { where: { id: postId } });
  const postUpdated = getPostById(postId);
  return postUpdated;
};

const deletePost = async (postId, userId) => {
  const verifiqPost = await existsVerifiqPost(postId);
  verifyAuthUser(verifiqPost, userId);

  await BlogPost.destroy({ where: { id: postId } });
};

const searchPost = async (query) => {
  const result = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return result;
};

module.exports = { 
  postInsert,
  findAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};