var modelInit = function (sequelize, DataTypes) {
  var Vehicle = sequelize.define('Vehicle', {
    short_name: { type: DataTypes.STRING },
    long_name: { type: DataTypes.STRING },
    source: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    trip_id: { type: DataTypes.INTEGER },
    lat: { type: DataTypes.DOUBLE },
    lng: { type: DataTypes.DOUBLE },
    angle: { type: DataTypes.DOUBLE },
    distance: { type: DataTypes.DOUBLE },
    velocity: { type: DataTypes.DOUBLE }
  }, {
    classMethods: {
      associate: function (models) {
        Vehicle.belongsTo(models['Station']);
      }
    }
  });

  return Vehicle;
};

module.exports = modelInit;
