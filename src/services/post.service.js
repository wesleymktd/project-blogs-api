const { BlogPost, PostCategory, Category } = require('../models');
const httpGenerator = require('../utils/httpGenerator');
// const { generateToken } = require('../utils/auth');

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

module.exports = { 
  postInsert,
};