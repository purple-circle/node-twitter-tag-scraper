(function() {
  'use strict';
  var Q, TwitterTags, cheerio, request;

  request = require('request');

  cheerio = require('cheerio');

  Q = require('q');

  TwitterTags = {};

  TwitterTags.parseHtml = function(html) {
    var $, metaTags, result;
    result = {};
    $ = cheerio.load(html);
    metaTags = $('meta').filter(function() {
      if (!this.attribs.name) {
        return false;
      }
      return this.attribs.name.match('twitter:');
    });
    metaTags.each(function(i, element) {
      var attrs;
      attrs = element.attribs;
      return result[attrs.name.replace('twitter:', '').toLowerCase()] = attrs.content;
    });
    return result;
  };

  TwitterTags.fetch = function(url) {
    var deferred;
    deferred = Q.defer();
    request(url, function(error, response, data) {
      if (!error && response.statusCode === 200) {
        return deferred.resolve(TwitterTags.parseHtml(data));
      } else {
        return deferred.reject({
          error: error
        });
      }
    });
    return deferred.promise;
  };

  module.exports = TwitterTags;

}).call(this);
