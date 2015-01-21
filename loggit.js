var chalk = require('chalk'),
    loggit = function(msg, color, symbol) {

  //  Our variables for the module
  var col       = "yellow",
      sym       = "*",
      openClose = "",
      size      = 46; // total size of the symbol string

  // Applies passed-in color if it exists
  if(typeof color  != "undefined"){
    col = color;
  }
  // If the symbol was provided, this ensures that it's only 1 character long
  if(typeof symbol != "undefined"){
    if(symbol.length > 2){
      sym = symbol.slice(0,2);
    }else{
      sym = symbol;
    }
  }
  // Symbol adder
  if(sym.length === 1){
    for( i=0; i<=size; i++ ){
      openClose += sym;
    }
  }
  if(sym.length === 2){
    for( i=0; i<=(size/2); i++ ){
      openClose += sym;
    }
  }
  //  wut wut
  // if(msg.length >= size){
  //   var m1 = msg.slice(0, size-2),
  //       m2 = msg.slice(size-2, msg.length);

  //   msg = m1 + '\n' + m2;
  // }

  //  what to actually print
  var printThis = openClose + "\n" + msg + "\n" + openClose;

  //  do it
  console.log(chalk[col]( printThis ));

};

module.exports = loggit;
