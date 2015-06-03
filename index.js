"use strict";

var request = require("request");
var cheerio = require("cheerio");
var Q = require("q");

var TwitterTags = {};

TwitterTags.parseHtml = function(html) {
  var result = {};
  var $ = cheerio.load(html);
  var metaTags = $("meta").filter(function() {
    if(!this.attribs.name) {
      return false;
    }
    return this.attribs.name.match("twitter:");
  });

  metaTags.each(function(i, element) {
    var attrs = element.attribs;
    result[attrs.name.replace("twitter:", "")] = attrs.content;
  });

  return result;
};

TwitterTags.fetch = function(url) {
  var deferred = Q.defer();

  request(url, function (error, response, data) {
    if (!error && response.statusCode === 200) {
      var result = TwitterTags.parseHtml(data);

      deferred.resolve(result);
    } else {
      deferred.reject({error: error});
    }
  });

  return deferred.promise;
};

module.exports = TwitterTags;