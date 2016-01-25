
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
                var self = this;
                if (this.state === TASK_STATES.NOT_RUNNING) {
                    this.state = TASK_STATES.RUNNING;
                    this.timer = setInterval(function () {
                        self.duration--;
                        if (self.duration === 0) {
                            self.stopTimer();
                        } else {
                            self.save();
                        } 
                    }, 1000);
                    console.log('timer Started');
                    return this.save();
                }
            },

            stopTimer: function () {
                console.log('timer stopped');
                this.state = TASK_STATES.NOT_RUNNING;
                clearInterval(this.timer);
                return this.save();
            }
        }
    });

    return Task;
};
module.exports = modelInit;
