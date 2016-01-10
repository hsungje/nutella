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
    	var taskTitles = _.map(this.state.tasks, function (task) {
    		return (
    			<div className={'row'} key={task.id}>
    				<div className={'col-sm-6'}><p>{task.title}</p></div>
    			</div>
    		);
    	});
    	return (
    		<div className={'container'}>
    		{taskTitles}
    		</div>
    	);
    }
});
