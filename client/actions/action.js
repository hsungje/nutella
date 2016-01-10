var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');

var ActionTypes = Constants.ActionTypes;

var Action = {
	getAllTasks: function (entities) {
		Dispatcher.dispatch({
			type: ActionTypes.GET_ALL_TASKS,
			entities: entities
		});
	}
};

module.exports = Action;
