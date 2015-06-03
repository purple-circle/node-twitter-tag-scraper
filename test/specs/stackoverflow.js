"use strict";

var twitterTags = require("../../index.js");
var chai = require("chai");
var chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);

describe('Stackoverflow example', function() {

  it('Should return tags', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.not.be.empty.notify(done);
  });

  it('Should not have this_should_not_be_valid property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.not.have.property("this_should_not_be_valid").notify(done);
  });

  it('Should have domain property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.have.property("domain").notify(done);
  });

  it('Should have title property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.have.property("title").notify(done);
  });
  it('Should have description property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.have.property("description").notify(done);
  });

});