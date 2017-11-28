var assert = require('assert');

var zipcodeLocationService = require("../index.js");

describe("zipcodeLocationService", function() {
  describe("#getLocation()", function() {
    it ("should return a location for a zipcode", function() {
      var test_zips = [60091, 60076, 78701];
      for (var i=0; i<test_zips.length; i++) {
        var loc =zipcodeLocationService.getLocation(test_zips[i]);
        if (! loc) throw new Error( "zipcode not found ");
        if (! loc.latitude || ! loc.longitude ) throw new Error("zipcode not valid");
      }
    });
  });
});
