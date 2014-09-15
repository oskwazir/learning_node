var _ = require('lodash');

var commentSorter = function(comments) {
	
  var results = [];

  comments = _.groupBy(comments,'username');

  _.forEach(comments,function(comment,key){
    results.push({username:key,
    	comment_count:_.size(comment)});
  });

  return _.sortBy(results,'comment_count').reverse();
}

module.exports = commentSorter;