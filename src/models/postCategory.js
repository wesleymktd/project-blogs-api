const PostCategorySchema = (sequelize, Datatypes) => {
	const PostCategoryTable = sequelize.define('PostCategory', 
	{},
		{
			tableName: 'posts_categories',
			underscored: true,
			timestamps: false
		});
	
	PostCategoryTable.associate = (model)	=> {
		model.Category.belongsToMany(model.BlogPost, {
			foreignKey: 'categoryId',
			outherKey: 'postId',
			as: 'posts',
			through: PostCategoryTable
		});

		model.BlogPost.belongsToMany(model.Category, {
			foreignKey: 'postId',
			outherKey: 'categoryId',
			as: 'categories',
			through: PostCategoryTable
		})
	}

	return PostCategoryTable;
};

module.exports = PostCategorySchema;