/** @jsx React.DOM */
'use strict'
var React = require('react')
var Hello = require('./components/Hello.jsx')
React.renderComponent(<Hello />, document.getElementById('content'));