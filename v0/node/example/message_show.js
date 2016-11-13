//
//
//
// create 23/8/95
// by elyas ghasemi

const pooya = require('../');

let options = {
  cookie: "secret=s%3AFxL7HGG-f61YI9EBXGuIfqncwAKuzvcC.emaIyhwIGkv%2Bx%2F29sPSnwApFwkDSGBEOkG9iA%2FhPK3E",
  message_id: "58281f6b9eeec01b98aa3cbe"
}

pooya.message_show(options, function(err, auth, http_status, message) {
  if (err) {
    console.log(err);
  } else {
    console.log(auth);
    console.log(http_status);
    console.log(message);
  }
})
