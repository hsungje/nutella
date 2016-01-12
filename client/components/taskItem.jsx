/** @jsx React.DOM */
'use strict'
var React = require('react');

var Store = require('../stores/store');
var Action = require('../actions/action')


module.exports = React.createClass({
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
        console.log('rendering..');
        return (
            <div className={'task-item row'}>
                <div className={'col-xs-4'}>
                    {this.props.task.title}
                </div>
                <div className={'col-xs-4'}>
                    {this.props.task.context}
                </div>
                <div className={'col-xs-2'}>
                    {this.props.task.duration}
                </div>
                <div className={'col-xs-2'} onClick={this.handleDeleteClick}>
                    x
                </div>
            </div>
        );
    }
});
