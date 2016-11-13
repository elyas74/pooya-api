//
//
//
// create 23/8/95
// by elyas ghasemi

const request = require('request');
const base_url = require('../config.json').base_url;
const url = base_url + "/message_show";

module.exports = message_show;

function message_show(options, cb) {

  cb = cb || function() {};

  if (!options || !options.cookie || !options.message_id) {
    return cb({
      status: 400,
      desc: "low args"
    }, false);
  }

  // config cookie
  let j = request.jar();
  let cookie = request.cookie(options.cookie);
  j.setCookie(cookie, url);

  // send request to server
  request({
    method: 'POST',
    url: url,
    jar: j,
    form: {
      message_id: options.message_id
    }
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
