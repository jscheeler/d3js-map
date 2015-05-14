var server = require('node-static');
var http = require('http');

var file = new(server.Server)();

var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);

console.log('Server listening on port %s', port);