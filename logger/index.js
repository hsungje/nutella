var request = require('request');
var Repeat = require('repeat');
var _ = require('lodash');
var models = require('../models');

var dump_station = require('./station_single_for_test.json');
//var dump_station = require('./station.json');

var logger = function () {
    parseStations(dump_station)
    .then(function (stationResults) {
        return requestStations(stationResults);
    })
    .then(function (result) {
        debugger;
        console.log('logged')
    })
};

function requestStations (stations) {
    debugger;
    return Promise.all(_.map(stations, function (station) {
        
    }));
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
