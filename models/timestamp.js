var modelInit = function (sequelize, DataTypes) {
	var Timestamp = sequelize.define('Timestamp', {
		time: { type: DataTypes.DATE }
	}, {
		classMethods: {
			associate: function (models) {
				Timestamp.hasMany(models['Station']);
			}
		},
		timestamps: false
	});
	return Timestamp;
};

module.exports = modelInit;
