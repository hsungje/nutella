/** @jsx React.DOM */
'use strict'
var React = require('react');

var Store = require('../stores/store');
var Action = require('../actions/action');



module.exports = React.createClass({
    getInitialState: function () {
        return {
            task: this.props.task
        };
    },

    handleDeleteClick: function (event) {
        $.ajax({
            url: 'http://localhost:3000/api/me/tasks/' + this.props.task.id,
            type: 'DELETE',
            contentType: 'application/json',
            success: function (response) {
                Action.removeTask(response);
            }
        });
    },


    render: function() {
        return (
            <div className={'task-item row'}>
                <div className={'col-xs-4'}>
                    {this.state.task.title}
                </div>
                <div className={'col-xs-4'}>
                    {this.state.task.context}
                </div>
                <div className={'col-xs-2'}>
                    {this.state.task.duration}
                </div>
                <div className={'col-xs-2'} onClick={this.handleDeleteClick}>
                    x
                </div>
            </div>
        );
    }
});
