var express = require('express');
var router = express.Router();
var api = require('../utils/api');

/* GET users listing. */
router.get('/', function (req, res) {
  var username = 'just4roomies';

  var twitterFollowers = 18;
  var facebookLikes = api.fetchFacebook(username).then(function (json) {
        return json[0].like_count;
      });

  facebookLikes.then(function (likes) {
    res.json({
      twitter: {
        followers_count: twitterFollowers
      }, facebook: {
        likes: likes
      }
    });
  });

});

module.exports = router;

