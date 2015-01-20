var chalk = require('chalk');


module.exports = function(msg, color) {

  if(typeof color  === "undefined"){ var col = 'blue'; }
  // if(typeof symbol === "undefined"){ var sym = '*'; }

  var openClose = "*****************************************\n",
      printThis = openClose + msg + '\n' + openClose;

  return chalk[col]( printThis );

};
