var keyMirror = require('keymirror');

module.exports = {
    ActionTypes: keyMirror({
        GET_ALL_TASKS: null,
        ADD_TASK: null,
        REMOVE_TASK: null,
        START_TIMER: null
    })
};
