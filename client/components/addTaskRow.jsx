/** @jsx React.DOM */
'use strict'
var $ = require('jquery');
var _ = require('lodash');
var React = require('react');

var Store = require('../stores/store');
var Action = require('../actions/action')

module.exports = React.createClass({
    getInitialState: function () {
        return {
            taskTitle: '',
            taskContext: '',
            taskDuration: ''
        };
    },

    handleFormChange: function (event) {
        var change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
    },

    handleButtonClick: function () {
        var data = {
            title: this.state.taskTitle,
            context: this.state.taskContext,
            duration: this.state.taskDuration
        };
        $.ajax({
            url: 'http://localhost:3000/api/me/tasks',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (response) {
                Action.addTask(response);
            }
        });
    },

    render: function () {
        var taskTitle = this.state.taskTitle;
        var taskContext = this.state.taskContext;
        var taskDuration = this.state.taskDuration;
        // TODO (donkeysmash) Having name field in the input fields is bad.
        // Imagine changing the structure we have to change the name of the state and the name string as well.
        return (
            <div className={'row'}>
                <div className={'col-xs-4'}>
                    <label>Task Title</label>
                    <input name='taskTitle' type='text' value={taskTitle} onChange={this.handleFormChange} />
                </div>
                <div className={'col-xs-4'}>
                    <label>Context</label>
                    <input name='taskContext' type='text' value={taskContext} onChange={this.handleFormChange} />
                </div>
                <div className={'col-xs-3'}>
                    <label>Duration</label>
                    <input name='taskDuration' type='text' value={taskDuration} onChange={this.handleFormChange} />
                </div>
                <div className={'col-xs-1'}>
                    <button onClick={this.handleButtonClick} className={'btn btn-default'}>Add Task</button>
                </div>
            </div>
        );
    }
});
