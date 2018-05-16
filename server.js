

// init project
var express = require('express');
var app = express();


var mongo = require('mongodb').MongoClient;




// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/new", function (request, response) {

});

app.get("/:short", function (request, response) {
  
  const short = request.params.short;

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
