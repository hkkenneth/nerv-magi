var crypto = require('crypto');
var http = require('http');

http.createServer(function(req, res) {
  var data = '';
  req.on('data', function(chunk) { data += chunk; });
  req.on('end', function() {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var hash = crypto.createHmac('SHA256', '...').update(data).digest('base64');
    res.end(hash);
  });
}).listen(8080);

