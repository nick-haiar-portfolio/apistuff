var configValues = require('./config');

module.exports = {
   
   getDbConnectionString: function() {
      return 'mongodb://' + configValues.uname + 
         ':' + configValues.pwd + 
         '@ds028310.mlab.com:28310/nodetodo-haiar';
   }
   
}