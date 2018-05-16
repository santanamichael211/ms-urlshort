// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (request, response) {
  var ipReg = /\d\d\d\.\d\d\.\d\.\d\d\d/;
  var lReg = /\w+\-\w+\,/;
  var platReg = /\(\/
  
  
  var head = request.headers;
  
  var obj = {};
  
  
  obj.ip = head["x-forwarded-for"].match(ipReg)[0];
  obj.language = head["accept-language"].match(lReg)[0];
  obj.platform = head["user-agent"];


  

  
    

  response.send(obj);
  
  
  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
