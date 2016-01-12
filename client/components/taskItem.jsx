/** @jsx React.DOM */
'use strict'
var React = require('react');

var Store = require('../stores/store');
var Action = require('../actions/action')


module.exports = React.createClass({
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
                <div className={'col-xs-2'}>
                    x
                </div>
            </div>
        );
    }
});
