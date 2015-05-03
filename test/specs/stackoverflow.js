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

  it('Should not have description property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.not.have.property("description").notify(done);
  });

  it('Should have twitter:domain property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.have.property("twitter:domain").notify(done);
  });

  it('Should have twitter:title property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.have.property("twitter:title").notify(done);
  });
  it('Should have twitter:description property', function (done) {
    var tags = twitterTags.fetch("http://localhost:3000/stackoverflow.html");
    tags.should.eventually.have.property("twitter:description").notify(done);
  });

});