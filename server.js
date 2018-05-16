

// init project
var express = require('express');
var app = express();


var mongo = require('mongodb').MongoClient;

var uri = "mongodb://user:pass@ds035766.mlab.com:35766/freecodedb";


app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


/*mongo.connect(uri,{ useNewUrlParser: true },(err,database)=>{
  if(err){
    console.error(err);
  }
  else{
    console.log("Connected to database");
    var db = database.db("freecodedb");
    db.collection("shorturl",(err,collection)=>{
      
      //----------------------------------------------------------------
      
      // http://expressjs.com/en/starter/static-files.html

app.get("/new/*", function (request, response) {
  let newurl = request.params[0];
  let urlReg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  if(!urlReg.test(newurl)){
  response.send(400,{error:"This is not a valid url"});
  }
  
 var r = Math.floor((Math.random()*4000)+1000);
  
  
  while(true){
    if(collection.find({url_val:r})){
    r = Math.floor((Math.random()*4000)+1000);
    }
    else{
    break;
    }  
  } 
   
  let urlObj = {
  original_url:newurl,
  short_url:"https://ms-urlshort.glitch.me/"+r,
  url_val:r   
  }
   
  
   
   collection.find({});
   
  response.send(urlObj);


  
  
});

app.get("/:short", function (request, response) {
  
  const short = request.params.short;

});
    //------------------------------------------------------------
    });
  }
});
*/


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


