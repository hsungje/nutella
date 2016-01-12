/** @jsx React.DOM */
'use strict'
var React = require('react');

var Store = require('../stores/store');
var Action = require('../actions/action')


module.exports = React.createClass({
    render: function() {
        return (
            <div className={'task-item row'}>
                {this.props.task.title}
            </div>
        );
    }
});
