var _ = require('lodash');

var forEach = function(cities) {
	
	return _.forEach(cities, function(city, key){
		if (city.population > 1){
			city.size = "big";
		} else if (city.population > 0.5){
			city.size = "med";
		} else {
			city.size = "small";
		}
	});
}

module.exports = forEach;