"use strict";

var twitterTags = require("../../index.js");
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);

describe('Invalid URL', function() {

  it('Should return error property', function (done) {
    var tags = twitterTags.fetch("http://invalid-url/");
    tags.should.be.rejected.and.eventually.have.property("error").notify(done);
  });

});