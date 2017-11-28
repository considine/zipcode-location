var fs = require('fs');
var zipcodes = require("./zipcodes");

module.exports = {
  getLocation : function (zipcode) {
    var loc = zipcodes[zipcode];
    return {"lat" : loc["latitude"], "lng" : loc["longitude"]};
  }
}
