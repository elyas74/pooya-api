# pooya API

this is a sample nodejs API, but u can write it in any language, main site uses AngularJS and speaks to server in JOSN base requests and any one with cookie can send request to server and get the data, just like the browser.

### methods

##### login()
This method login in site and return a cookie in header of the response, u can use it for sending other requests.

http request data :
  url : http://pooya.sadjad.ac.ir
  http method : POST
  body : { username : "user" , password : "pass" }

response data :
  { auth : true/false }


[example](https://github.com/elyas74/pooya-api/tree/master/v0/node/example/login.js)

note : this is first method you should call to get cookie and after that you can send other requests.

##### notification()

with this method you can get notifications of user.

url : http://pooya.sadjad.ac.ir/notifications
http method : POST
body : {}

note : you need to set cookie in header

[example](https://github.com/elyas74/pooya-api/tree/master/v0/node/example/notification.js)

##### message_show()

in notificaion method you get data of messages but full data are here and you should send message `_id` to server for

url : http://pooya.sadjad.ac.ir/message_show
http method : POST
body : { message_id : "idofyourmessage" }

note : you need to set cookie in header

[example](https://github.com/elyas74/pooya-api/tree/master/v0/node/example/message_show.js)


u can see all examples in [example](https://github.com/elyas74/pooya-api/tree/master/v0/node/example) folder.

this API will be complete soon...

if u write API for other languages please send it with pull request.
