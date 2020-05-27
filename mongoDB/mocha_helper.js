var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// IN package.json Change test to mocha

before(done => {
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', (error) => console.log('Error',error));
db.once('open', () => {console.log('Connected'); done();});

});