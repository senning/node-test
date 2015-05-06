//Modules
var express = require('express');
var app = express();
var React = require('react');

//Render views using React
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());

//Define routs
app.get('/',require('./routes').index);
app.use('/assets',express.static('./views/assets/')); //no processing on the assets folder

//Define the server
var server = app.listen(1073, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});