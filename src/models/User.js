const UserSchema = (sequelize, Datatypes) => {
	const UserTable = sequelize.define('User', {
		id: {
		  type: Datatypes.INTEGER,
		  allowNull: false,
		  autoIncrement: true,
		  primaryKey: true
		},
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
		UserTable.hasMany(model.BlogPost, {
			foreignKey: 'userId',
			as: 'blogPosts'
		})
	}

	return UserTable;
};

module.exports = UserSchema;