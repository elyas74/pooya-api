//
//
//
// create 23/8/95
// by elyas ghasemi

const pooya = require('../');

let cookie = 'secret=s%3AFxL7HGG-f61YI9EBXGuIfqncwAKuzvcC.emaIyhwIGkv%2Bx%2F29sPSnwApFwkDSGBEOkG9iA%2FhPK3E';

pooya.notification(cookie, function(err, auth, http_status, notifications) {
  if (err) {
    console.log(err);
  } else {
    console.log(auth);
    console.log(http_status);
    console.log(notifications);
  }
})
