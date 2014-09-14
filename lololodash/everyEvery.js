 'use strict';

var _ = require('lodash');

var cityTemps = function(cities){

	var tempIsGreaterThanNineteen = function(temp){
	    return temp > 19
	}

	var results = {hot:[],warm:[]}

	_.forEach(cities,function(city,cityName){
	  if (_.every(city,tempIsGreaterThanNineteen)){
	    results.hot.push(cityName);
	  } else if (_.some(city,tempIsGreaterThanNineteen)){
	    results.warm.push(cityName);
	  }
	});

	return results;
}

module.exports = cityTemps;