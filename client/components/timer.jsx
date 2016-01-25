'use strict'
var React = require('react');

var TimerMixin = require('react-timer-mixin');

var interval;

module.exports = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function () {
        return {
            timeLeft: this.props.task.duration,
            isRunning: this.props.task.state === 'RUNNING'
        };
    },

    handleDurationClick: function () {
        if (this.state.isRunning) {
            this.callStopTimer();
        } else {
            this.callStartTimer();
        }
    },

    callStartTimer: function () {
        var self = this;
        $.ajax({
            url: 'http://localhost:3000/api/me/tasks/' + this.props.task.id + '/startTimer',
            type: 'POST',
            contentType: 'application/json',
            success: function (response) {
                self.startCount();
            }
        });
    },

    callStopTimer: function () {
        var self = this;
        $.ajax({
            url: 'http://localhost:3000/api/me/tasks/' + this.props.task.id + '/stopTimer',
            type: 'POST',
            contentType: 'application/json',
            success: function (response) {
                self.stopCount();
            }
        });
    },

    startCount: function () {
        interval = this.setInterval(
            () => {
                var tempTimeLeft = this.state.timeLeft - 1;
                this.setState({
                    timeLeft: tempTimeLeft,
                    isRunning: true
                });
            },
            1000
        );
    },

    stopCount: function () {
        this.clearInterval(interval);
        this.setState({
            isRunning: false
        });
    },

    render: function () {
        if (this.state.timeLeft > 0 && this.state.isRunning) {
            this.startCount();
        } else {
            this.stopCount();
        }
        return (
            <div onClick={this.handleDurationClick}>
                {this.state.timeLeft}
            </div>
        );
    }
})