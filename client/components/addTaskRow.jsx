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
        this.clearInputFields();
    },

    clearInputFields: function () {
        this.setState({
            taskTitle : '',
            taskContext : '',
            taskDuration : ''
        })
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
                    <input
                        name='taskTitle'
                        placeholder='Task Title'
                        type='text'
                        value={taskTitle}
                        onChange={this.handleFormChange}
                    />
                </div>
                <div className={'col-xs-4'}>
                    <input
                        name='taskContext'
                        placeholder='Context'
                        type='text'
                        value={taskContext}
                        onChange={this.handleFormChange}
                    />
                </div>
                <div className={'col-xs-2'}>
                    <input
                        name='taskDuration'
                        placeholder='Duration'
                        type='text'
                        value={taskDuration}
                        onChange={this.handleFormChange}
                    />
                </div>
                <div className={'col-xs-2'}>
                    <button onClick={this.handleButtonClick} className={'btn btn-default'}>Add Task</button>
                </div>
            </div>
        );
    }
});
