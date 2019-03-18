var configValues = require('./config');

module.exports = {
  getDBConnectionString: function(){
    return 'mongodb://' + configValues.username + ':' + configValues.password + '@' + configValues.host + ':' + configValues.port + '/' + configValues.databaseName;
  }
}
