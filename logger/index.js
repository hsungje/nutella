var request = require('request');
var Repeat = require('repeat');
var _ = require('lodash');
var Promise = require('bluebird');
var models = require('../models');

var dump_station = require('./station_single_for_test.json');
//var dump_station = require('./station.json');

var logger = function () {
    parseStations(dump_station)
    .then(function (stationResults) {
        return Promise.all(_.map(stationResults, requestStation));
        //1. repeater setup
        //2. foreach station log all the vehicles
    })
    .then(function (result) {
        debugger;
        console.log('logged')
    })
};

function requestStation (station) {
    return new Promise(function (resolve, reject) {
        request.get(genUrl(station))
        .on('response', function (response) { 
            debugger;
            if (response) resolve();
            else reject();
        });
    });
};

function genUrl (stationInfo) {
    return 'http://myttc.ca/vehicles/near/' + stationInfo.lat + ',' + stationInfo.lng + '.json';
}

function parseVehicles (vs) {
    return Promise.all(_.map(vs, function (v) {
        debugger;
        return models['Vehicle'].build(v).save();
    }));
}

function parseStations (o) {
    var stnArr = o.shapes[0].stops;
    return Promise.all(_.map(stnArr, function (stn) {
        return models['Station'].build(stn).save();
    }));
}

module.exports = logger;
