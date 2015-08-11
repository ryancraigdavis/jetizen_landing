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

// var Sequelize = require('sequelize')
//   , sequelize = new Sequelize('landing_page_jetizen', 'root', null, {
//       host: 'localhost',
//       dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
//       port:    3306, // or 5432 (for postgres)
//     });
 
// sequelize.authenticate().complete(function(err) {
//     if (!!err) {
//       console.log('Unable to connect to the database:', err)
//     } else {
//       console.log('Connection has been established successfully.')
//     }
//   })

//   var medPatient = sequelize.define('medPatient', {
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// });

//   sequelize.sync().complete(function(err) {
//      if (!!err) {
//        console.log('An error occurred while creating the table:', err)
//      } else {
//        console.log('It worked!')
//      }
//   });

// var patient = medPatient.build({
//   name: 'Dick Monahaugn',
//   email: 'test@test.com'
// })
 
// patient.save().complete(function(err) {
//     if (!!err) {
//       console.log('The instance has not been saved:', err)
//     } else {
//       console.log(patient)
//     }
//   })

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