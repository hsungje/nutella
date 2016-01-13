/** @jsx React.DOM */
'use strict'
var $ = require('jquery');
var _ = require('lodash');
var React = require('react');

var Store = require('../stores/store');
var Action = require('../actions/action')

var TaskItem = require('./taskItem');
var AddTaskRow = require('./addTaskRow');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            tasks: Store.getAllTasks()
        }
    },

    componentDidMount: function () {
        Store.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function () {
        Store.removeChangeListener(this.onStoreChange);
    },

    componentWillMount: function () {
        $.ajax({
            url: 'http://localhost:3000/api/me/tasks',
            type: 'GET',
            contentType: 'application/json',
            success: function (response) {
                Action.getAllTasks(response);
            }
        });
    },

    onStoreChange: function () {
        this.setState({
            tasks: Store.getAllTasks()
        });
    },

    render: function(){
        var TaskItems = _.map(this.state.tasks, function (task) {
            return (
                <TaskItem key={task.id} task={task} />
            );
        });
        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-xs-2 col-xs-offset-10'}>
                        PLACEHOLDER FOR NAME
                    </div>
                </div>
                <div className={'task-items row'}>
                    <div className={'col-xs-12'}>
                        {TaskItems}
                    </div>
                </div>
                <AddTaskRow />
            </div>
        );
    }
});
