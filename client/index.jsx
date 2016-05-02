/** @jsx React.DOM */
'use strict'
var ReactDOM = require('react-dom');
var Main = require('./components/main.jsx');
require('bootstrap-loader');


ReactDOM.render(<Main />, document.getElementById('content'));