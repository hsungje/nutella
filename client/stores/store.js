var _ = require('lodash');
var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/constants');
var ActionTypes = Constants.ActionTypes;

var _tasks = {};

var UPDATE_EVENT = 'updateEvent';

function assignTask(task) {
    _tasks[task.id] = task;
}

function destroyTask(task) {
    delete _tasks[task.id];
}

var Store = _.assign({}, EventEmitter.prototype, {
    getAllTasks: function () {
        return _tasks;
    },

    emitChange: function () {
        this.emit(UPDATE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(UPDATE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(UPDATE_EVENT, callback);
    },

    updateTasks: function (tasks) {
        _.forEach(tasks, assignTask);
    },

    addTask: function (task) {
        assignTask(task);
    },

    removeTask: function (task) {
        destroyTask(task);
    }
});

Store.dispatchToken = Dispatcher.register(function (action) {
    switch(action.type) {
        case ActionTypes.GET_ALL_TASKS:
            Store.updateTasks(action.entities);
            Store.emitChange();
            break;
        case ActionTypes.ADD_TASK:
            Store.addTask(action.entities);
            Store.emitChange();
            break;
        case ActionTypes.REMOVE_TASK:
            Store.removeTask(action.entities);
            Store.emitChange();
            break;
        default:
    }
})

module.exports = Store;
