var modelInit = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        title: { type: DataTypes.STRING, allowNull: false },
        course: { type: DataTypes.STRING },
        note: { type: DataTypes.STRING },
        done: { type: DataTypes.BOOLEAN },
        dueDate: { type: DataTypes.DATE }
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
