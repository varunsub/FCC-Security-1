var express = require('express');
var app = express();
const helmet = require('helmet');

module.exports = app;
var api = require('./server.js');
app.use(helmet.hidePoweredBy());
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
