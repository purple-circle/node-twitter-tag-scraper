'use strict'
request = require('request')
cheerio = require('cheerio')
Q = require('q')
TwitterTags = {}

TwitterTags.parseHtml = (html) ->
  result = {}
  $ = cheerio.load(html)
  metaTags = $('meta').filter ->
    if !@attribs.name
      return false
    @attribs.name.match 'twitter:'

  metaTags.each (i, element) ->
    attrs = element.attribs
    result[attrs.name.replace('twitter:', '').toLowerCase()] = attrs.content

  result

TwitterTags.fetch = (url) ->
  deferred = Q.defer()
  request url, (error, response, data) ->
    if not error and response?.statusCode is 200
      deferred.resolve TwitterTags.parseHtml(data)
    else
      deferred.reject({error})

  deferred.promise

module.exports = TwitterTags
