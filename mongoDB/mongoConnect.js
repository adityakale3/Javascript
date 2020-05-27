// var MongoClient = require('mongodb').MongoClient;
// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
//      if(err) throw err;
//      //Write databse Insert/Update/Query code here..          
// });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', (error) => console.log('Error',error));
db.once('open', () => console.log('Connected'));