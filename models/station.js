var modelInit = function (sequelize, DataTypes) {
	var Station = sequelize.define('Station', {
		name: { type: DataTypes.STRING },
		lat: { type: DataTypes.DOUBLE },
		lng: { type: DataTypes.DOUBLE }
	}, {
		classMethods: {
			associate: function (models) {
				Station.hasMany(models['Vehicle']);
				Station.belongsTo(models['Timestamp']);
			}
		},
		timestamps: false
	});
	return Station;
};

module.exports = modelInit;