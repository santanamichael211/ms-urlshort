

// init project
var express = require('express');
var app = express();


var mongo = require('mongodb').MongoClient;

var uri = "mongodb://user:pass@ds035766.mlab.com:35766/freecodedb";

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/new/*", function (request, response) {
  let newurl = request.params[0];
  let urlReg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  if(!urlReg.test(newurl)){
  response.send(400,{error:"This is not a valid url"});
  }
   
mongo.connect(uri,{ useNewUrlParser: true },(err,database)=>{
  if(err){
    console.error(err);
  }
  else{
    console.log("Connected to database");
    var db = database.db("freecodedb");
    db.collection("shorturl",function(err,collection){
      if(err){
      return err;
      }
      else{
       var r = Math.floor((Math.random()*4000)+1000);
        
  while(true){
  if(collection.find({url_vl:r}).toArray()[0]){
  r = Math.floor((Math.random()*4000)+1000);  
  }
  else{
  break;
  }  
  }
   let urlObj = {
  original_url:newurl,
  short_url:"https://ms-urlshort.glitch.me/"+r, 
  }
   
  response.send(urlObj);

  collection.update(
   {url:newurl},
   {$set:{urlval:r}},
   { upsert: true}
)
        
 db.close();       
        
}
});
  }
});
  
});



app.get("/:short", function (request, response) {
  
  mongo.connect(uri,{ useNewUrlParser: true },(err,database)=>{
            if(err){
                      response.send(err);
                   }
            else{
            var db = database.db("freecodedb");
              
              db.collection("shorturl",function(err,result){
              response.send("connected"+request.params.short);
              });
            
            }
});  
}); 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


