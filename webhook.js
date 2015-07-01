var http = require('http');
var fs = require('fs');
var writable = fs.createWriteStream('file.txt');

http.createServer(function(req, res) {
  var data = '';
  req.on('data', function(trunk) { data += trunk;});
  req.on('end', function() {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('');
    var obj = {'body': data,};
    writable.write(JSON.stringify(obj), 'utf-8', function() {writable.close()});
  });
}).listen(8080);
