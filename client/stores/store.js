var _ = require('lodash');
var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/constants');
var ActionTypes = Constants.ActionTypes;

var _users = {};

var UPDATE_EVENT = 'updateEvent';

function createUser(user) {
	_users[user.id] = user;
}

function destroyUser(user) {
	delete _users[user.id];
}

var Store = _.assign({}, EventEmitter.prototype, {
	getAllUsers: function () {
		return _users;
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

	updateUsers: function (users) {
		_.forEach(users, function (user) {
			_users[user.id] = user;
		});
	}
});

Store.dispatchToken = Dispatcher.register(function (action) {
	switch(action.type) {
		case ActionTypes.GET_ALL_USERS:
			Store.updateUsers(action.entities);
			Store.emitChange();
			break;
		default:
	}
})

module.exports = Store;