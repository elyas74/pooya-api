//
//
//
// create 23/8/95
// by elyas ghasemi

const request = require('request');
const base_url = require('../config.json').base_url;

module.exports = login;

function login(income_data, cb) {

  cb = cb || function() {};

  if (!income_data || !income_data.username || !income_data.password) {

    return cb({
      status: 400,
      desc: "low args"
    }, false);
  }

  let data = {
    form: income_data
  };

  request.post(base_url, data, function(err, res, body) {

    if (err) {
      return cb(err, false, err.status);
    }

    if (res && res.statusCode == 200) {

      body = JSON.parse(body);

      if (body.auth) {

        let cookie = res.headers['set-cookie'][0].split(';')[0];

        cb(null, true, res.statusCode, cookie);
      } else {
        cb(null, false, res.statusCode);
      }
    } else {
      cb(null, false, res.statusCode);
    }
  })
}
