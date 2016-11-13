//
//
//
// create 23/8/95
// by elyas ghasemi

const pooya = require('../');

let login_data = {
  username: '123456789',
  password: '123456789'
}

pooya.login(login_data, function(err, auth, http_status, cookie) {
  if (err) {
    console.log(err);
  } else {
    console.log(auth);
    console.log(http_status);
    console.log(cookie);
  }
})
