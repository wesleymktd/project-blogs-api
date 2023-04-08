const CategorySchema = (sequelize, Datatypes) => {
	const CategoryTable = sequelize.define('Category', {
		id: {
		  type: Datatypes.INTEGER,
		  allowNull: false,
		  autoIncrement: true,
		  primaryKey: true
		},
		name: Datatypes.STRING
	},
		{
			tableName: 'categories',
			underscored: true,
			timestamps: false
		});
	
	CategoryTable.associate = (model)	=> {
		CategoryTable.hasMany(model.PostCategory, {
			foreignKey: 'postId',
			as: 'postsCategories'
		})
	}

	return CategoryTable;
};

module.exports = CategorySchema;