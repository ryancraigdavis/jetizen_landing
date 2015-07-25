var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var procedureList = require('./server-assets/procedureList.js');

app.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.use(bodyParser());


app.use(express.static(__dirname + '/public'));

app.get('/procedure:name', function(req, res){
  res.setHeader('Content-Type', 'application/json');
    for(var i=0;i<procedureList.getProcedures().length;i++){
      if(req.query.q === procedureList.getProcedures()[i][0].name){
      	var data = procedureList.getProcedures()[i];
        res.send(JSON.stringify(data));
      }
    } 
});


app.listen(80);