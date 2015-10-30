var request = require('request');
var Repeat = require('repeat');
var _ = require('lodash');
var Promise = require('bluebird');
var models = require('../models');
var Vehicle = models['Vehicle'];
var Station = models['Station'];

var dump_station = require('./station_single_for_test.json');
//var dump_station = require('./station.json');

var logger = function () {
    parseStations(dump_station)
    .then(function (stationResults) {
        Repeat(function () {
            _.map(stationResults, requestStation);
        }).every(60, 's').start.now()
        .then(function () {
            console.log('done');
         });
    })
};


function requestStation (station) {
    request(genUrl(station), function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            _.forEach(result['vehicles'], function (vehicle) {
                Vehicle.create(vehicle).then(function (createdVehicle) {
                    createdVehicle.setStation(station)
                })
            })
        }
    });
};

function genUrl (stationInfo) {
    return 'http://myttc.ca/vehicles/near/' + stationInfo.lat + ',' + stationInfo.lng + '.json';
}

function parseStations (o) {
    var stnArr = o.shapes[0].stops;
    return Promise.all(_.map(stnArr, function (stn) {
        return models['Station'].build(stn).save();
    }));
}

module.exports = logger;
