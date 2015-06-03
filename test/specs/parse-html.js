"use strict";

var twitterTags = require("../../index.js");
var chai = require("chai");
chai.should();

describe('Parse html', function() {

  it('Should return empty object', function() {
    var tags = twitterTags.parseHtml("");
    return tags.should.be.empty;
  });

  it('Should return property twitter:hello', function() {
    var tags = twitterTags.parseHtml('<meta name="twitter:hello" content="world">');
    tags.should.have.property("hello");
  });

});