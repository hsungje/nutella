
var modelInit = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: { type: DataTypes.STRING, allowNull: false },
    }, {
    	classMethods: {
    		associate: function (models) {
    			User.hasMany(models['Task']);
    		}
    	}
    });

    return User;
};
module.exports = modelInit;
