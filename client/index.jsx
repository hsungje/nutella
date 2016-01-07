/** @jsx React.DOM */
'use strict'
var ReactDOM = require('react-dom');
var Pomodoro = require('./components/pomodoro.jsx');
require('bootstrap-loader');


ReactDOM.render(<Pomodoro />, document.getElementById('content'));