const UserSchema = (sequelize, Datatypes) => {
	const UserTable = sequelize.define('User', {
		id: Datatypes.INTEGER,
		displayName: Datatypes.STRING,
		email: Datatypes.STRING,
		password: Datatypes.STRING,
		image: Datatypes.STRING
	},
		{
			tableName: 'users',
			underscored: true,
			timestamps: false
		});
	
	UserTable.associate = (model)	=> {
		UserTable.hasMany(model.Blog_post, {
			foreignKey: 'userId',
			as: 'blogPosts'
		})
	}

	return UserTable;
};

module.exports = UserSchema;