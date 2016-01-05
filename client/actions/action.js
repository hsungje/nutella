var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');

var ActionTypes = Constants.ActionTypes;

var Action = {
	getAllUsers: function (entities) {
		Dispatcher.dispatch({
			type: ActionTypes.GET_ALL_USERS,
			entities: entities
		});
	}
};

module.exports = Action;