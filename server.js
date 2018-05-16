

// init project
var express = require('express');
var app = express();


var mongo = require('mongodb').MongoClient;

var uri = "mongodb://user:pass@ds035766.mlab.com:35766/freecodedb";


var collection = mongo.connect(uri,{ useNewUrlParser: true },(err,database)=>{
  if(err){
    console.error(err);
  }
  else{
    console.log("Connected to database");
    var db = database.db("freecodedb");
    return db.collection("shorturl");
  }
});

console.log("yes");

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
  var r = 0;
 async ()=>{
   
  r = await exclusiveR((Math.random*4000)+1000);
   
   let urlObj = {
  original_url:newurl,
  short_url:"https://ms-urlshort.glitch.me/"+r  
  }
   
  response.send(urlObj);
   
   
  };
  
  
  
  
  /*collection.update(
   {url:newurl},
   {$set:{urlval:r}},
   { upsert: true}
)*/
  
  
  
});

app.get("/:short", function (request, response) {
  
  const short = request.params.short;

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

  
function exclusiveR(r){
  return new Promise((resolve,reject)=>{
    
  collection.find({urlval:r},(err,doc)=>{
      
          if(err){reject(err);}
          if(!doc){
            resolve(r);
                  }
          if(doc){
          exclusiveR((Math.random()*4000)+1000);
          }
  }) 
  });
}

