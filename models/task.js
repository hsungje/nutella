
var keyMirror = require('keymirror');
var _ = require('lodash');

var TASK_STATES = keyMirror({
    RUNNING: null,
    NOT_RUNNING: null
});

var modelInit = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        title: { type: DataTypes.STRING, allowNull: false },
        context: { type: DataTypes.STRING },
        duration: { type: DataTypes.INTEGER },
        state: { type: DataTypes.ENUM, values: _.values(TASK_STATES), defaultValue: TASK_STATES.NOT_RUNNING }
    }, {
        classMethods: {
            associate: function (models) {
                Task.belongsTo(models['User']);
            }
        },
        instanceMethods: {
            startTimer: function () {
                this.state = TASK_STATES.RUNNING;
                return this.save();
            },

            stopTimer: function () {
                this.state = TASK_STATES.NOT_RUNNING;
                return this.save();
            }
        }
    });

    return Task;
};
module.exports = modelInit;
