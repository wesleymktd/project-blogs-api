const blogPostsSchema = (sequelize, Datatypes) => {
	const blogPostsTable = sequelize.define('BlogPosts', {
		id: {
			type: Datatypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		title: Datatypes.STRING,
		content: Datatypes.STRING,
		userId: Datatypes.INTEGER,
		published: Datatypes.DATE,
		updated: Datatypes.DATE
	},
		{
			tableName: 'blog_posts',
			underscored: true,
			timestamps: false
		});
	
		blogPostsTable.associate = (model)	=> {
			blogPostsTable.belongsTo(model.User, {
			foreignKey: 'userId',
			as: 'user'
		})
	}

	return blogPostsTable;
};

module.exports = blogPostsSchema;