var _ = require('lodash');

var filter = function(item) {
	return _.where(item, { active: true});
}

module.exports = filter;