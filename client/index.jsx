/** @jsx React.DOM */
'use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/Hello.jsx');

ReactDOM.render(<Hello />, document.getElementById('content'));