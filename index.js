var fs = require('fs');
var zipcodes = JSON.parse(fs.readFileSync('zipcodes.json', 'utf8'));

module.exports = {
  getLocation : function (zipcode) {
    var loc = zipcodes[zipcode];
    return loc;
  }
}
