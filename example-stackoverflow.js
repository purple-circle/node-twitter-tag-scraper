var twitterTags = require("./index.js");

// Run test server: node test/server.js

twitterTags
  .fetch("http://localhost:3000/stackoverflow.html")
  .then(function(result) {
    console.log("result", result);
  }, function(error) {
    console.log("error", error);
  });