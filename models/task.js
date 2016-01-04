
var modelInit = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        title: { type: DataTypes.STRING, allowNull: false },
        context: { type: DataTypes.STRING },
        duration: { type: DataTypes.INTEGER }
    }, {
    	classMethods: {
    		associate: function (models) {
    			Task.belongsTo(models['User']);
    		}
    	}
    });

    return Task;
};
module.exports = modelInit;
