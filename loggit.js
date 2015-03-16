var chalk = require('chalk'),
    loggit = function(msg, color, symbol) {

      if(typeof msg  === "undefined"){
        console.log(chalk.red( "  !!!   !!!   !!!ERROR!!!   !!!   !!!   \nYou must supply a message to be logged!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" ));
        return null;
      }

      //  Our variables for the module
      var col       = "yellow",
          sym       = "*",
          openClose = "",
          size      = 46,
          printThis = ''; // total size of the symbol string

      // Applies passed-in color if it exists
      if(typeof color  !== "undefined"){
        col = color;
      }
      // If the symbol was provided, this ensures that it's only 1 character long
      if(typeof symbol !== "undefined"){
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

      printThis = openClose + "\n";

      if( Array.isArray(msg) ){
        printThis += JSON.stringify( msg, null, 2 );
      }
      else if( typeof msg === "object" ){
        printThis += JSON.stringify( msg, null, 2 );
      }else{
        printThis += msg;
      }

      printThis += "\n" + openClose;

      //  do it
      console.log(chalk[col]( printThis ));

    };

module.exports = loggit;
