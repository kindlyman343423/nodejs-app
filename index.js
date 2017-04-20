var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');

app.use(morgan('combined'));
app.use(express.static('assets'));

var server = app.listen(port, function() {
  console.log(`Listening on ${port}.`);
});

process.on('SIGTERM', function() {
  console.log('Shutting down.');
  server.close(function() {
    process.exit(0);
  });
});
