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
			users: Store.getAllUsers()
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
			url: "http://localhost:3000/api/user",
			type: 'GET',
			contentType: 'application/json',
			success: function (response) {
				Action.getAllUsers(response);
			}
		});
	},

	onStoreChange: function () {
		this.setState({
			users: Store.getAllUsers()
		});
	},

    render: function(){
    	var names = _.map(this.state.users, function (user) {
    		return (
    			<div className={'row'} key={user.id}>
    				<div className={'col-sm-6'}><p>{user.name}</p></div>
    			</div>
    		);
    	});
    	return (
    		<div className={'container'}>
    		{names}
    		</div>
    	);
    }
});