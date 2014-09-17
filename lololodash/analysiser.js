var _ = require('lodash');

var makeEmployeeGroups = function(employeeData, resultSet, averageSalary){
  
  resultSet.underperform = [];
  resultSet.overperform = [];
  
  _.forEach(employeeData,function(person){
    if (person.income <= averageSalary){
      resultSet.underperform.push(person);
    } else {
      resultSet.overperform.push(person);
    }
  });
  
  return resultSet;
  
};

var performancer = function(employeeIncomeRecords) {
  
  var results = {};

  results.average = (_.reduce(employeeIncomeRecords,function(sum,person){
     return sum + person.income;
  },0) / employeeIncomeRecords.length);
  
  results = makeEmployeeGroups(employeeIncomeRecords, results, results.average);

  results.underperform = _.sortBy(results.underperform,function(underperformer){
    return underperformer.income;
  });

  results.overperform = _.sortBy(results.overperform,function(overperformer){
    return overperformer.income;
  });

  return results;

};

module.exports = performancer;