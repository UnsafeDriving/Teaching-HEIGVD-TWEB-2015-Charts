/*
var express = require('express'),
  config = require('./config/config');

var app = express();

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
*/
var express = require('express');
var app = express();
var http = require('http').Server(app);
var config = require('./config/config');

app.set('views', config.root + '/app/views');
app.set('view engine', 'jade');

app.use(express.static(config.root + '/public'));

app.get('/', function(req, res){
  res.render('index', {
      title: 'Angular Charts'
    });
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});

