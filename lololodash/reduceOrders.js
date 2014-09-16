var _ = require('lodash');

var orderTotaller = function(orders) {
  
  var results = [];
  orders = _.groupBy(orders,'article');

  _.forEach(orders, function(order){
    
    var sumOfOrder = _.reduce(order,function(total,item){
      total.article = item.article;
      total.total_orders += item.quantity;
      return total;
    }, {article:0, total_orders:0});
    results.push(sumOfOrder);
  });

  return _.sortBy(results,' total_orders').reverse();
}

module.exports = orderTotaller;