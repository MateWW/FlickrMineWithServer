var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "9f2d31e455853102e0f43c396e887450"
    };


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.post( '/api/search/' , function( req , res ){
    
    var search = req.body.searchtext;
    if( !search ){
      res.status(400);
      res.send("No required datas");
      return;
    }

    Flickr.tokenOnly(flickrOptions, function(error, flickr) {
      if(error){
        res.status(500);
        return;
      }
      
      flickr.photos.search({
        text: search,
        per_page: 50
      }, 
      ( err, result ) => searchCallback( res,err, result ));
    });   
})

function searchCallback( res ,err, result){
   if( typeof err == "string" ){
        res.status(500);
        return;
    }
   let photos = result.photos.photo;
   res.send( photos );
}

app.post( '/api/photoinfo/' , function( req , res ){
    
    var photoid = req.body.photoid;
    var secret = req.body.secret;
    console.log(req.body);
    if( !photoid || !secret ){
      res.status(400);
      res.send("No required datas");
      return;
    }

    Flickr.tokenOnly(flickrOptions, function(error, flickr) {
      if(error){
        res.status(500);
        return;
      }
      
      flickr.photos.getExif({
        photo_id: photoid,
        secret: secret
      }, 
      ( err, result ) => photoInfoCallback( res,err, result ));
    });
})

function photoInfoCallback( res,err, result ){
  if(typeof err == "string" || !result){
    res.status(420);
    res.send('Photo not found');
    return;
  }
   var photoExIF = result;
   res.send( photoExIF );
}


app.all( '/api/*', function( req, res ) {
    res.send(" nothing is here ");
});

app.listen( 3000, function () {
  console.log('Server start at port 3000!')
})