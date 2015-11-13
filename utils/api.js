var fetch = require('node-fetch');
var facebookUrl = 'http://api.facebook.com/restserver.php?format=json&method=links.getStats&urls=http://facebook.com/';
var twitterUrl = 'https://api.twitter.com/1.1/users/show.json?screen_name=';

var api = {
  fetchTwitter: function (username) {
    return fetch(facebookUrl + username).then(function (res) {
      return res.json();
    })
  },
  fetchFacebook: function (username) {
    return fetch(facebookUrl + username).then(function (res) {
      return res.json();
    })
  }
};

module.exports = api;