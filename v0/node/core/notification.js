//
//
//
// create 23/8/95
// by elyas ghasemi

const request = require('request');
const base_url = require('../config.json').base_url;
const url = base_url + "/notifications";

module.exports = notification;

function notification(cookie_string, cb) {

  cb = cb || function() {};

  // config cookie
  let j = request.jar();
  let cookie = request.cookie(cookie_string);
  j.setCookie(cookie, url);

  // send request to server
  request({
    method: 'POST',
    url: url,
    jar: j
  }, function(err, res, body) {
    if (err) {
      return cb(err);
    }

    if (res && res.statusCode == 200) {

      if (body) {
        body = JSON.parse(body);
      }

      cb(null, true, res.statusCode, body);

    } else {
      cb(null, false, res.statusCode);
    }
  })
}
