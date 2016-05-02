
var keyMirror = require('keymirror');
var _ = require('lodash');

var TASK_STATES = keyMirror({
    RUNNING: null,
    NOT_RUNNING: null
});

var modelInit = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        title: { type: DataTypes.STRING, allowNull: false },
        course: { type: DataTypes.STRING },
        note: { type: DataTypes.STRING },
        done: { type: DataTypes.BOOLEAN },
        state: { type: DataTypes.ENUM, values: _.values(TASK_STATES), defaultValue: TASK_STATES.NOT_RUNNING }
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
