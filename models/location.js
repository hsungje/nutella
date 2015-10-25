var modelInit = function (sequelize, DataTypes) {
	var Location = sequelize.define('Location', {
		name: { type: DataTypes.STRING },
		lat: { type: DataTypes.DOUBLE },
		lng: { type: DataTypes.DOUBLE }
	}, {
		classMethods: {
			associate: function (models) {
				Location.hasMany(models['Vehicle']);
			}
		},
		timestamp: false
	});
	return Location;
};

module.exports = modelInit;