"use strict";

var twitterTags = require("../../index.js");
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);

describe('Invalid URL', function() {

  it('Should return an empty object', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/no-twitter-tags.html");
    tags.should.eventually.be.empty.notify(done);
  });

});