var modelInit = function (sequelize, DataTypes) {
	var Station = sequelize.define('Station', {
		name: { type: DataTypes.STRING },
		lat: { type: DataTypes.DOUBLE },
		lng: { type: DataTypes.DOUBLE }
	}, {
		classMethods: {
			associate: function (models) {
				Station.hasMany(models['Vehicle']);
			}
		},
	});
	return Station;
};

module.exports = modelInit;
